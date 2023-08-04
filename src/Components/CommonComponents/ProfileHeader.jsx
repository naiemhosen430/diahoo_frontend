
function ProfileHeader(props) {
    return (
        <div className='text-center'>
            <div className='coverImage flex items-center justify-center'>
                <img className='block' src={props.coverImage} alt="" />
            </div>
            <div className='profileImage flex items-center justify-center'>
                <img className='h-20 w-20 block rounded-full' src={props.profileImage} alt="no image" />
            </div>
            <div className='coverImage'>
                <h1 className='text-3xl'>{props.fullName}</h1>
                <h1>{props.tittle}</h1>
            </div>
        </div>
    )
}

export default ProfileHeader
