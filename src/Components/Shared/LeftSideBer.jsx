import React, { useEffect, useState } from 'react';
import ProfileHeader from '../CommonComponents/ProfileHeader';
import ButtonBox from '../CommonComponents/ButtonBox';
import api from '../../api/api';
import { getToken } from '../../Hook/getToken';
import { decodeToken } from '../../Hook/decodeToken';
import CreatePost from '../CommonComponents/Post/CreatePost';
import CreateNote from '../CommonComponents/Note/CreateNote';
import MyNote from '../CommonComponents/Note/MyNote';


function LeftSideBer() {
  const [userInfo, setUserInfo] = useState({
    profileImage: '',
    fullName: '',
    tittle: '',
  });
  const [createboxshow, setCreateboxshow] = useState(false)
  const [showaddnoteboxalert, setShowaddnoteboxalert] = useState(false)
  const [showmynoteboxalert, setShowmynoteboxalert] = useState(false)


// hundle onclick
  function postsomething() {
    setCreateboxshow(true)
  }
  function closecreatepostbox() {
    setCreateboxshow(false)
  }
  function showaddnotebox() {
    setShowaddnoteboxalert(true)
  }
   function closecreatenotebox() {
    setShowaddnoteboxalert(false)
   }
   function showmynotebox() {
    setShowmynoteboxalert(true)
   }

  useEffect(() => {
    const token = getToken('accessToken')
    const data = decodeToken(token)
    api.get(`/api/v1/user/me/${data.userId}`)
    .then((response) => {
      setUserInfo({
        profileImage: response.data.data.profilephoto[0],
        fullName: response.data.data.fullname,
        tittle: response.data.data.tittle,
      });
    })
    .catch((error) => {
      if (error) {
        // console.log(error)
      }
    })
  }, []); 

  return (
    <>
    {createboxshow && <CreatePost 
      closecreatepostbox={closecreatepostbox}
    />}
    {showaddnoteboxalert && <CreateNote 
      closecreatenotebox={closecreatenotebox}
    />}
    {showmynoteboxalert && <MyNote />}

      <div className='col-span-2 h-screen text-zinc-50 p-4 bg-slate-900'>
        <ProfileHeader
          profileImage={userInfo.profileImage}
          fullName={userInfo.fullName}
          tittle={userInfo.tittle}
        />
        <ButtonBox 
          postsomething={postsomething}
          showaddnotebox={showaddnotebox}
          showmynotebox={showmynotebox}
        />
      </div>
    </>
  );
}

export default LeftSideBer;
