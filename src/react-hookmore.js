import React from "react";
import {useState} from 'react'

function App () {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  function test() {
    setCount(count + 1)
    setFlag(false)
    setList([1, 2, 3])
  }
  return (
    <div>
      count:{count}
      flag:{flag ? '1' : '0'}
      list:{list.join('-')}<button onClick={test}>+</button>
    </div>

  )
}


export default App