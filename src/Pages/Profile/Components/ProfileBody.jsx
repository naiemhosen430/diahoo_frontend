import { AiFillEdit } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";
import MyInfoBody from "./MyInfoBody";
import { useEffect, useState } from "react";
import Post from "../../../Components/CommonComponents/Post/Post";

import { getToken } from "../../../Hook/getToken";
import { decodeToken } from "../../../Hook/decodeToken";
import api from "../../../api/api";

export default function ProfileBody() {
  const [postShow, setPostShow] = useState(true);
  const [myInfShow, setMyInfoShow] = useState(false);
  const [myPost, setMypost] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const token = getToken("accessToken");
      const data = decodeToken(token);
      await api
        .get(`/api/v1/post/${data.userId}`)
        .then((response) => {
          if (response) {
            setMypost(response.data.data);
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
    };

    fatchData();
  }, []);

  // hu8ndle onclick
  const showMyInfoBox = () => {
    setMyInfoShow(true);
    setPostShow(false);
  };
  const showMyPostBox = () => {
    setPostShow(true);
    setMyInfoShow(false);
  };

  return (
    <>
      <div className="flex p-4 space-x-2">
        <button
          className="w-2/6 bg-slate-700 text-white py-2 text-sm px-4 rounded-md shadow-md flex items-center space-x-2"
          type="button"
        >
          <IoMdAdd />
          <span>Share Something</span>
        </button>
        <button
          className="w-2/6 bg-slate-700 text-white py-2 text-sm px-4 rounded-md shadow-md flex items-center space-x-2"
          type="button"
        >
          <AiFillEdit /> <span>Edit Profile</span>
        </button>
        <button
          className="w-2/6 bg-slate-700 text-white py-2 text-sm px-4 rounded-md shadow-md flex items-center space-x-2"
          type="button"
        >
          <GiNotebook />
          <span>Notes</span>
        </button>
      </div>
      <div className="flex space-x-2">
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
          onClick={showMyPostBox}
        >
          <span>Post</span>
        </button>
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
        >
          <span>Video</span>
        </button>
        <button
          className="w-2/6 text-white py-1 text-sm px-4 rounded-md shadow-md"
          type="button"
          onClick={showMyInfoBox}
        >
          <span>My Info</span>
        </button>
      </div>
      {myInfShow && <MyInfoBody />}
      {postShow && myPost.length === 0 ? (
        <h1 className="text-center text-slate-500 py-20 px-4 text-lg">
          There is no post
        </h1>
      ) : (
        myPost.map((postItem) => <Post key={postItem._id} post={postItem} />)
      )}
    </>
  );
}
