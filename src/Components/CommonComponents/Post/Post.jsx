import React from 'react'
import PostHeader from './Components/PostHeader'
import PostBody from './Components/PostBody'
import PostFooter from './Components/PostFooter'

export default function Post(props) {
  return (
    <div>
      <PostHeader 
        postOwnerImage= {props.postOwnerImage}
        postOwnerName= {props.postOwnerName}
        postedDate= {props.postedDate}
      />
      <PostBody 
        postTittle= {props.postTittle}
        postImage= {props.postImage}
      />
      <PostFooter 
        
      />
    </div>
  )
}
