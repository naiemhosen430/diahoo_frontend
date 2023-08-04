import React from 'react'
const handleSubboxClick = (event) => {
  event.stopPropagation();
};

export default function CreateNote(props) {
  return (
    <div  className='backdrop-blur-xl bg-b py-20 fixed w-screen h-screen' onClick={props.closecreatenotebox}>
      <form className='w-3/6 m-auto p-4 bg-slate-900' onClick={handleSubboxClick}>
        <div>
          <label className='text-white p-4' htmlFor="notetittle">Write note tittle</label>
          <input className='w-full rounded-md bg-black text-slate-400 p-4' type="text" id='notetittlr' placeholder='Write a note tittle' />
        </div>
        <div className='py-4'>
          <label className='text-white p-4' htmlFor="notedes">Write note tittlr</label>
          <textarea className='w-full rounded-md bg-black text-slate-400 p-4' name="notedes" id="notedes" cols="20" rows="5" placeholder='Start writting....'></textarea>
        </div>
        <div>
          <button className='px-4 py-1 text-lg text-white bg-slate-500 rounded mx-2' type="button">Add Note</button>
          <button className='px-4 py-1 text-lg text-white bg-slate-700 rounded mx-2' type="button" onClick={props.closecreatenotebox}>Cencel</button>
        </div>
      </form>
    </div>
  )
}

