// Components/CommonComponents/Post/Post.js

import React, { useEffect, useState } from 'react';
import PostHeader from './Components/PostHeader';
import PostFooter from './Components/PostFooter';
import api from '../../../api/api';

const Post = ({ post }) => {

  const [user, setUser] = useState({
    profilephoto: '',
    fullname: ''
  })

  useEffect( () => {
    api.get(`/api/v1/user/${post.postownerid}`)
    .then((response) => {
      if(response) {
        setUser({
          profilephoto: response.data.data.profilephoto,
          fullname: response.data.data.fullname
        })
      }
    })
    .catch((error) => {
      if (error) {
        console.log(error)
      }
    })
  }, [post.postownerid])

  return (
    <div className='post'>
      <PostHeader 
        postOwnerName={user.fullname}
        postOwnerid={user._id}
        postOwnerPicture={user.profilephoto}
        postedtime={post.createdAt}
      />
      <p className='text-white text-sm p-4'>{post.postcontent}</p>
      <PostFooter 
        postOwnerName={user.fullname}
        likes={post.like}
        comments={post.comment}
        postid={post._id}
      />
    </div>
  );
};

export default Post;
