import React, { useEffect, useState } from "react";
import ProfileHeader from "../../Components/CommonComponents/ProfileHeader";
import api from "../../api/api";
import { GetProfile } from "../../api/GetProfile";
import ProfileBody from "./Components/ProfileBody";
import "./Components/style.css";

function Profile() {
  const [profileInfo, setProfileInfo] = useState({
    coverImage: "",
    profileImage: "",
    fullName: "",
    tittle: "",
  });
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const data = await GetProfile();
      setProfileInfo({
        coverImage: data.coverphoto,
        profileImage: data.profilephoto,
        fullName: data.fullname,
        tittle: data.tittle,
      });
      setUser(data);
    };

    fatchData();
  }, []);
  return (
    <div className="col-span-3 h-screen overflow-y-auto custom-scrollbar-hidden bg-slate-950 mx-2">
      <ProfileHeader
        coverImage={profileInfo.coverImage}
        profileImage={profileInfo.profileImage}
        fullName={profileInfo.fullName}
        tittle={profileInfo.tittle}
      />

      <ProfileBody />
    </div>
  );
}

export default Profile;
