import React from "react"

class Counter extends React.Component {
  //1. 声明用来控制input value的react组件自己的状态
  state = {
    message: 'this is message'
  }
  inputChange = (e) => {
    console.log('change事件', e)
    this.setState({
      message:e.target.value
    })
  }

  render () {
    return (
      // 2. 给input框的value属性绑定 react state
      // 3. 给input框绑定一个change的事件 为了拿到当前输入框中的数据
      <input
        type='text'
        value={this.state.message}
        onChange={this.inputChange}/>
    )
  }
}

function App () {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
