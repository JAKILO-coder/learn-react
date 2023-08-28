import React from "react"


function SonA (props) {
  return (
    <div>this is A {props.sendAMsg}</div>
  )
}

function SonB (props) {
  const bMsg = '来自B组件的数据'
  return (
    <div>this is B
      <button onClick={() => props.getBMsg(bMsg)}>发送数据</button>
    </div>
  )
}

class App extends React.Component{
  state = {
    sendAMsg : ''
  }
  getBMsg = (msg) => {
    this.setState({
      sendAMsg: msg
    })
  }
  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg}/>
        <SonB getBMsg={this.getBMsg}/>
      </div>
    )
}
}

export default App;
