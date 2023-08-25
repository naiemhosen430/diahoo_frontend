import { useEffect, useState } from "react";
import BoxField from "./Components/BoxField";
import { GetProfile } from "../../api/GetProfile";

function Friend() {
  const [showMyfriendBox, setShowMyfriendBox] = useState(true);
  const [showMyfriendReqBox, setShowMyfriendReqBox] = useState(false);
  const [showMysentfriendReqBox, setShowMysentfriendReqBox] = useState(false);
  const [myself, setMyself] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      const data = await GetProfile();
      setMyself(data);
    };
    fatchData();
  }, [GetProfile]);

  // use onclick
  function showMyfriend() {
    setShowMyfriendBox(true);
    setShowMyfriendReqBox(false);
    setShowMysentfriendReqBox(false);
  }
  function showMyfriendreq() {
    setShowMyfriendBox(false);
    setShowMyfriendReqBox(true);
    setShowMysentfriendReqBox(false);
  }
  function showMysendfriendreq() {
    setShowMyfriendBox(false);
    setShowMyfriendReqBox(false);
    setShowMysentfriendReqBox(true);
  }

  console.log({ myself });
  return (
    <div className="col-span-3 bg-slate-950 mx-2">
      <div className="p-4 pb-1">
        <ul className="flex items-center justify-center">
          <button
            className="text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800"
            onClick={showMyfriend}
          >
            My Friend
          </button>
          <button
            className="text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800"
            onClick={showMyfriendreq}
          >
            Friend Request
          </button>
          <button
            className="text-2sm w-2/6 text-slate-300 mx-1 rounded p-1 px-4 bg-slate-800"
            onClick={showMysendfriendreq}
          >
            Send Friend
          </button>
        </ul>

        <div>{showMyfriendBox && <BoxField myfriend={myself.friends} />}</div>
        <div>
          {showMysentfriendReqBox && (
            <BoxField myfriend={myself.sendrequests} />
          )}
        </div>
        <div>
          {showMyfriendReqBox && <BoxField myfriend={myself.friendrequests} />}
        </div>
      </div>
    </div>
  );
}

export default Friend;
