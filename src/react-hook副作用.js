import React, { useEffect } from "react";
import {useState} from 'react'

function App () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    //定义副作用
    document.title = count

  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>

  )
}


export default App