import React from 'react'

const Display = ({isLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
       {isLoggedIn ? <p>You are logged in!</p> : 
       
        <div>
        <div>
       <label htmlFor="username">Username</label>
        <input 
            id="username"
            name='username'
            type="text"
        />
        </div>

        <div>
       <label htmlFor="password">Password</label>
        <input 
            id="password"
            name='password'
            type="password"
        />
        </div>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
        
        </div>
       
       }
    </div>
  )
}

export default Display;