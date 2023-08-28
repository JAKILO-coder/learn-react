import React, { useEffect } from "react";
import {useState} from 'react'


// 依赖项控制副作用的执行时机
// 1.默认状态 无依赖项
// 2.只在渲染时执行一次 依赖项为空数组
// 3.在依赖项发生变化时重新执行 添加特定依赖项

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