import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store=> store.user)
  console.log("User :", user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
       dispatch(removeUser())
       navigate('/')
    }).catch((error) => {
      // An error happened.
      debugger
    });
  }
  return (
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44 px-8 py-2 bg-gradient-to-b ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
       {user &&  <div className='flex p-2'>
    <img src={user?.photoURL} alt="user" className='w-11 p-1' />
    <button className='text-white' onClick={handleSignout}>Sign Out</button>
        </div>}
      </div>
  )
}

export default Header