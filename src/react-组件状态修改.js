import React from "react"
// 组件状态 类组件作为演示
class TestComponent extends React.Component {
  // 1.定义组件状态
  state = {
    //在这里可以定义各种属性，全都是当前组件状态
    name: 'cp teacher'
  }
  changeName = () => {
    // 3.修改state中的状态name
    // 注意：不可以直接做赋值修改，必须通过一个方法setState
    this.setState({
        name : 'good'
    })
  }
  render(){
  // 2.使用状态
    return (
    <div>
      this is TestComponent
      当前name为:{this.state.name}
      <button onClick={this.changeName}>修改名字</button>
    </div>)
  }
}


function App () {
  return (
    <div className="App">
      <TestComponent />
    </div>
  );
}

export default App;
