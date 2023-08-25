import React, { useEffect, useState } from "react";
import SingleMsg from "./Components/SingleMsg";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import Chat from "../../Components/Shared/Chat";

function Message() {
  const [myAllChats, setMyAllChats] = useState([]);
  const [selectedSingleMsg, setSelectedSingleMsg] = useState(null);
  const { myid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/v1/chat/myconversion/${myid}`);
        setMyAllChats(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [myid]);

  const openChat = (frndId) => {
    setSelectedSingleMsg(frndId); // Update selected SingleMsg when opening chat
  };

  const closeChat = () => {
    setSelectedSingleMsg(null); // Clear selected SingleMsg when closing chat
  };

  return (
    <>
      <div className="col-span-3">
        {myAllChats.length === 0 ? (
          <h1 className="text-slate-600 col-span-3 bg-slate-950 mx-2 text-center px-4 py-20 text-lg">
            You have no chats. Start a conversation now.
          </h1>
        ) : (
          <>
            {myAllChats.map((perMessageone) => {
              let frndId =
                perMessageone.chatIds[0].find((id) => id !== myid) || null;
              return (
                <div key={perMessageone._id}>
                  <div className="chat-container col-span-3">
                    {selectedSingleMsg === frndId && ( // Render Chat only for selected SingleMsg
                      <Chat friendId={frndId} closeChat={closeChat} />
                    )}
                    <div className="col-span-3 bg-slate-950 mx-2">
                      <SingleMsg
                        openChat={() => openChat(frndId)} // Pass frndId when opening chat
                        friendId={frndId}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Message;
