import React from "react"
// 父传子 props函数
// 子传父 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参
// 传入即可

function Son (props) {
  const {getSonMsg} = props
  return (
    <div>this is son<button onClick={()=>getSonMsg('来自子组件的数据')}>click</button></div>
  )
}

class App extends React.Component{
  state = {
    list: [1, 2, 3]
  }
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)

  }

  render () {
    return (
      <div>
        <Son getSonMsg={this.getSonMsg}/>
      </div>
    )
}
}

export default App;
