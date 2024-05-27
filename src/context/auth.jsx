/* eslint-disable react/prop-types */
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const registerUser = useCallback(async (userDetails) => {
    setRegisterLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/register`,
        userDetails,
        {
          withCredentials: true,
        }
      );
      setUser(data.data);
      setRegisterLoading(false);
    } catch (err) {
      setError(err.response.data.message);
      setRegisterLoading(false);
    }
  }, []);

  const loginUser = useCallback(async (userDetails) => {
    setLoginLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/login`,
        userDetails,
        {
          withCredentials: true,
        }
      );
      //   const { token } = data.data;
      console.log(data);
      //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      //   setUser(data.data.user); => data.user
      setLoginLoading(false);
    } catch (err) {
      setLoginLoading(false);
      setError(err.response.data.message);
    }
  }, []);
  const refetchUserOnRefresh = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/refetch`,
        {
          withCredentials: true,
        }
      );
      axios.defaults.headers.common.Authorization = data.data.token;
      setUser(data.data.user);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const logout = useCallback(async () => {
    setLogoutLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(data.data);
      setUser(null);
      setLogoutLoading(false);
    } catch (error) {
      console.log(error);
      setLogoutLoading(false);
    }
  }, []);

  const authContextValue = useMemo(
    () => ({
      user,
      error,
      loginLoading,
      registerLoading,
      logoutLoading,
      setError,
      loginUser,
      registerUser,
      logout,
      refetchUserOnRefresh,
    }),
    [
      user,
      error,
      loginLoading,
      registerLoading,
      logoutLoading,
      setError,
      loginUser,
      registerUser,
      logout,
      refetchUserOnRefresh,
    ]
  );
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(null);
    }
  }, [error]);
  return (
    <AuthContext.Provider value={authContextValue}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
