/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ManageProfile from "../../components/ManageProfile/ManageProfile";
import ManagePassword from "../../components/ManagePassword/ManagePassword";
import ChangeImageModal from "../../components/ChangeImageModal/ChangeImageModal";
import ChangePasswordModal from "../../components/ChangePasswordModal/ChangePasswordModal";
import { useAuth } from "../../hooks/useAuth";
import toastifyConfig from "../../utils/toastify";

function Profile() {
  // to fix=> double toast component shooting whenever i change admin details
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuth();

  const handleUserUpdate = async (formData) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/update`,
        formData,
        {
          withCredentials: true,
        }
      );
      //set user to newly returned user data
      toast.success("Your details has been updated", toastifyConfig);
      setUser(data.user);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUserPasswordChange = async (formData) => {
    setLoading(true);
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}users/change-password`,
        formData,
        {
          withCredentials: true,
        }
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8  my-10 font-montserrat">
        {/* profile */}
        <ProfileDetails user={user} setShowImageModal={setShowImageModal} />

        {/* manage profile */}
        <ManageProfile
          user={user}
          handleSubmit={handleUserUpdate}
          loading={loading}
        />
        {/* manage password */}
        <ManagePassword setShowPasswordModal={setShowPasswordModal} />
        {/* imageModal */}
        {showImageModal && (
          <ChangeImageModal
            setShowImageModal={setShowImageModal}
            handleSubmit={handleUserUpdate}
            loading={loading}
          />
        )}
        {showPasswordModal && (
          <ChangePasswordModal
            setShowPasswordModal={setShowPasswordModal}
            handleSubmit={handleUserPasswordChange}
            loading={loading}
          />
        )}
        <ToastContainer containerId="profileToast" />
      </div>
    </>
  );
}

export default Profile;
