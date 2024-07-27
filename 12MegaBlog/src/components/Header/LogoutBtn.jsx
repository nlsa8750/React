import React from 'react'
import {logout} from '../../store/authSlice'
import store from '../../store/store';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';

function LogoutBtn() {
    
    const dispatch = useDispatch()
    const logoutHandler = () => {
        // if logout function is called then we will dispatch the values of the state as false inside logout -> 

        // when you called the logout function , the promise will be generated and to handle the promise we use .then where we will dispatch the state through the reducer to update the state in the store.

        // inside the authService where login function is made(auth.js), we are dispatching the logout(config.js) which updates the state of the logout 
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn;

