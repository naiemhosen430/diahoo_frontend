import React, { useEffect, useState } from "react";
import GetPublicProfile from "../../../api/GetPublicProfile";

export default function SingleMsg({ openChat, friendId }) {
  const [user, setusER] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const data = await GetPublicProfile(friendId);
      setusER(data);
    };
    fatchData();
  }, [friendId]);

  return (
    <div className="py-4" onClick={openChat}>
      <div className="py-2 px-4 flex items-center shadow-md cursor-pointer hover:bg-slate-900 rounded-2xl">
        <div className="w-1/6 rounded-full">
          <img
            className="w-14 h-14 rounded-full"
            src={user.profilephoto}
            alt="No image"
          />
        </div>
        <div className="w-5/6">
          <div>
            <h1 className="text-white py-2 text-2xl">{user.fullname}</h1>
          </div>
          <div className=" flex items-center space-x-2">
            <h4 className="text-slate-500">Hello</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
