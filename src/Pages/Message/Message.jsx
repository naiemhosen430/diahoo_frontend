import React, { useState } from 'react'
import SingleMsg from './Components/SingleMsg'
import Chat from './Components/Chat'

function Message() {
    const [chat, setChat] = useState(false)

    // hundle onclick
     const openChat = () => {
        setChat(true)
    }
    const closeChat = () => {
        setChat(false)
    }

    return (
        <>
            {chat && <Chat 
                closeChat={closeChat}
            />}
            <div className='col-span-3 bg-slate-900 mx-2'>
                <SingleMsg 
                    openChat={openChat}
                />
            </div>
        </>
    )
}

export default Message
