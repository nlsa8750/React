// how to protect route and pages
// whenever you access the page such as brainly where the solution of the math is given but before giving access to that page comes login function ===>> that is exactly what we are making .. to protect the main page
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


// dont worry, you can name your function whatever you want
// Authentication indicates whether authentication is required for this route. set to true meaning required at every phase
// children denotes which page(component ) the protected function wants to protect
export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [ loader, setLoader ] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {

        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        //TIP :( if authStatus is true -> the user is logged-in otherwise not )

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}