import React from "react"

// 函数式的Son
function SonF (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>我是函数子组件, {props.msg}</div>
  )
}
class SonC extends React.Component{
  render () {
    return (
      <div>我是类子组件, {this.props.msg}</div>
    )
  }
}

class App extends React.Component{
  state = {
    message: 'this is message'
  }
  render () {
    return (
      <div>
        <SonF msg={this.state.message}/>
        <SonC msg={this.state.message}/>
      </div>
    )
}
}

export default App;
