import React, { useEffect } from "react";
import {useState} from 'react'
import { useWindowScroll } from "./hooks/useWindowScroll";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App () {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', '阿飞')
  setTimeout(()=>{
    setMessage('cp')
  }, 5000)
  return (
    <div style={{height:'12000px'}}>
      {y} {message}
    </div>

  )
}


export default App