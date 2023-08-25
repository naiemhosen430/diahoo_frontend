import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetPublicProfile from "../../api/GetPublicProfile";
import PublicProfileBody from "./Components/PublicProfileBody";
import ProfileHeader from "../../Components/CommonComponents/ProfileHeader";

export default function PublicProfile() {
  const [profileInfo, setProfileInfo] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetPublicProfile(id);
        setProfileInfo(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="col-span-3 h-screen overflow-y-auto bg-slate-900 mx-2">
        <ProfileHeader
          coverImage={profileInfo.coverImage}
          profileImage={profileInfo.profileImage}
          fullName={profileInfo.fullName}
          tittle={profileInfo.tittle}
        />

        <PublicProfileBody profileInfo={profileInfo} />
      </div>
    </>
  );
}
