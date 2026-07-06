import React from 'react'

const Display = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
       {isLoggedIn ? <p>You are logged in!</p> : 
       
       <form
       onSubmit={(e) => {
         e.preventDefault();
         setIsLoggedIn(true);
       }}
     >
       <div>
         <label htmlFor="username">Username</label>
         <input
           id="username"
           name="username"
           type="text"
         />
       </div>
     
       <div>
         <label htmlFor="password">Password</label>
         <input
           id="password"
           name="password"
           type="password"
         />
       </div>
     
       <button type="submit">
         Login
       </button>
     </form>
       
       }
    </div>
  )
}

export default Display;