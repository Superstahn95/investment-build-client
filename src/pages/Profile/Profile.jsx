/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProfileDetails from "../../components/ProfileDetails/ProfileDetails";
import ManageProfile from "../../components/ManageProfile/ManageProfile";
import ManagePassword from "../../components/ManagePassword/ManagePassword";
import ChangeImageModal from "../../components/ChangeImageModal/ChangeImageModal";
import ChangePasswordModal from "../../components/ChangePasswordModal/ChangePasswordModal";
import { useAuth } from "../../hooks/useAuth";

function Profile() {
  // to fix=> double toast component shooting whenever i change admin details
  const [showImageModal, setShowImageModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const { user } = useAuth();

  const handleUserUpdate = (data) => {
    //   dispatch(updateUser(data));
    // logic to update user
  };

  const handleUserPasswordChange = (data) => {
    //   dispatch(changePassword(data));
    //logic to update user
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8  my-10 font-montserrat">
        {/* profile */}
        <ProfileDetails user={user} setShowImageModal={setShowImageModal} />

        {/* manage profile */}
        <ManageProfile user={user} handleSubmit={handleUserUpdate} />
        {/* manage password */}
        <ManagePassword setShowPasswordModal={setShowPasswordModal} />
        {/* imageModal */}
        {showImageModal && (
          <ChangeImageModal
            setShowImageModal={setShowImageModal}
            handleSubmit={handleUserUpdate}
          />
        )}
        {showPasswordModal && (
          <ChangePasswordModal
            setShowPasswordModal={setShowPasswordModal}
            handleSubmit={handleUserPasswordChange}
          />
        )}
      </div>
    </>
  );
}

export default Profile;
