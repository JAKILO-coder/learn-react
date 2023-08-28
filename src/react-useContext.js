import React, {createContext, useContext, useState} from "react"

const Context = createContext()

function ComA () {
  const count = useContext(Context)
  return (
    <div>
      this is ComA
      <br />
      app传过来的数据为：{count}
      <ComC />
    </div>
  )
}

function ComC () {
  const count = useContext(Context)
  return (
    <div>
      this is ComC
      <br />
      app传过来的数据为：{count}
    </div>
  )
}

function App () {
  const [count, setCount] = useState(0)
  return (
    <Context.Provider value={count}>
    <div>
      <ComA />
    </div>
    </Context.Provider>
  )
}


export default App