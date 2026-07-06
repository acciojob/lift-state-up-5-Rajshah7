
import React, { useState } from "react";
import './../styles/App.css';
import Display from "./Display";

const App = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  console.log(isLoggedIn,"isLoggedIn");
  return (
    <div>
        <h1>Parent Component</h1>

        <Display isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App
