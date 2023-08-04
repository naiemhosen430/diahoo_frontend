import React, { useEffect, useState } from 'react'
import Post from '../../../Components/CommonComponents/Post/Post'
import api from '../../../api/api'

export default function Feed() {

  const [post, setPost] = useState([])


  useEffect(() => {
    api.get('api/v1/post/')
    .then(response => {
      if (response) {
          setPost(response.data.data)
      }
    })
    .catch(Error => {
      if (Error) {
        console.log(Error)
      }
    })

  }, [])


  return (
    <div className='mx-2 h-screen bg-slate-900'>
      {
        
        post.map((post) => (
          <Post 
            key={post._id} 
            postOwnerImage={post.postOwnerImage}
            postOwnerName={post.postOwnerName}
            postedDate={post.postedDate}
            postTitle={post.postTitle} // Corrected "postTittle" to "postTitle"
            postImage={post.postImage}
          />
        ))
      }
    </div>
  );

}
