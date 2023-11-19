import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addUser, removeUser } from '../utils/userSlice'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector(store=> store.user)

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
       dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
      debugger
    });
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName, photoURL}  = user
        dispatch(addUser({ uid : uid, displayName : displayName, email: email, photoURL: photoURL }));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate('/')
      }
    });

    // Unsubscribe when componment removed  
    return () => unsubscribe()
  }, [])
    
  return (
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44 px-8 py-2 bg-gradient-to-b ' src={LOGO} alt="logo" />
       {user &&  <div className='flex p-2'>
    <img src={user?.photoURL} alt="user" className='w-11 p-1' />
    <button className='text-white' onClick={handleSignout}>Sign Out</button>
        </div>}
      </div>
  )
}

export default Header