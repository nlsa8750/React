import React from 'react'

// before using it, you have to create it, which is available inside react
const UserContext = React.createContext()


// useContext works like global variable ,instead of accessing within and within the component, directly you will be accessed.
export default UserContext;