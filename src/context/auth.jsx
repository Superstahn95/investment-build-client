/* eslint-disable react/prop-types */
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import toastifyConfig from "../utils/toastify";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
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
      setRegisterLoading(false);
      setRegisterSuccessMessage(data.message);
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
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      setUser(data.user);
      setLoginLoading(false);
    } catch (err) {
      setLoginLoading(false);
      setError(err.response.data.message);
    }
  }, []);
  const refetchUserOnRefresh = useCallback(async () => {
    setAppLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/refreshToken`,
        {
          withCredentials: true,
        }
      );
      //bug
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      setUser(data.user);
    } catch (error) {
      return;
    } finally {
      setAppLoading(false);
    }
  }, []);
  const logout = useCallback(async () => {
    setLogoutLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
      setLogoutLoading(false);
    } catch (error) {
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
      appLoading,
      registerSuccessMessage,
      setRegisterSuccessMessage,
      setError,
      setUser,
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
      appLoading,
      registerSuccessMessage,
      setUser,
      setError,
      setRegisterSuccessMessage,
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
  useEffect(() => {
    if (registerSuccessMessage) {
      toast.success(registerSuccessMessage, toastifyConfig);
    }
    // setRegisterSuccessMessage(null);
  }, [registerSuccessMessage]);
  return (
    <AuthContext.Provider value={authContextValue}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
