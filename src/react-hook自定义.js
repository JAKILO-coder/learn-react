import React, { useEffect } from "react";
import {useState} from 'react'
import { useWindowScroll } from "./hooks/useWindowScroll";

function App () {
  const [y] = useWindowScroll()
  return (
    <div style={{height:'12000px'}}>
      {y}
    </div>

  )
}


export default App