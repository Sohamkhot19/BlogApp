// useUsername.js
import React from "react";
import { useState,useEffect } from "react";
function useUsername() {
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      const storedUsername = sessionStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, []);
  
    return username;
  }
  
  export default useUsername;