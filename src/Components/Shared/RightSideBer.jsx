import React from "react";
import Notification from "../../Pages/Notifications/Notification";

export default function RightSideBer() {
  return (
    <div className="col-span-2 p-4 bg-slate-950">
      <h1 className="text-white font-bold text-center">Notification</h1>
      <Notification />
    </div>
  );
}
