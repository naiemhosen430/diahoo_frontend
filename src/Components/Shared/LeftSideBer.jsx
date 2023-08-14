import React, { useEffect, useState } from 'react';
import ProfileHeader from '../CommonComponents/ProfileHeader';
import ButtonBox from '../CommonComponents/ButtonBox';
import api from '../../api/api';
import { getToken } from '../../Hook/getToken';
import { decodeToken } from '../../Hook/decodeToken';
import CreatePost from '../CommonComponents/Post/CreatePost';
import CreateNote from '../CommonComponents/Note/CreateNote';
import MyNote from '../CommonComponents/Note/MyNote';
import { GetProfile } from '../../api/GetProfile';



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
    const fatchData = async () => {
      const data = await GetProfile()
      setUserInfo({
        profileImage: data.profilephoto,
        fullName: data.fullname,
        tittle: data.tittle,
      });
    }

    fatchData()
  }, []); 

  const coverImagee = false;
  return (
    <>
    {createboxshow && <CreatePost 
      closecreatepostbox={closecreatepostbox}
    />}
    {showaddnoteboxalert && <CreateNote 
      closecreatenotebox={closecreatenotebox}
    />}
    {showmynoteboxalert && <MyNote />}

      <div className='col-span-2 text-zinc-50 p-4 bg-slate-900'>
        <ProfileHeader
          coverImage={coverImagee}
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
