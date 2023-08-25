import React from "react";

export default function Ntf() {
  return (
    <>
      <div className="hover:bg-slate-800 bg-slate-900 flex rounded-md my-1 cursor-pointer items-center p-2 px-4">
        <div className="w-2/12 flex justify-center items-center">
          <img
            className="w-10 h-10 rounded-full bg-slate-700"
            src=""
            alt="no image"
          />
        </div>
        <div className="w-10/12">
          <h3 className="text-slate-400">MD Naiem liked Your Post</h3>
        </div>
      </div>
    </>
  );
}
