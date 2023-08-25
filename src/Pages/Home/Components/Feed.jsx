import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import Post from "../../../Components/CommonComponents/Post/Post";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    api
      .get("api/v1/post/")
      .then((response) => {
        if (response) {
          setPost(response.data.data);
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  }, []);

  return (
    <div className="mx-2 bg-slate-950">
      {post.map((postItem) => (
        <Post key={postItem._id} post={postItem} />
      ))}
    </div>
  );
}
