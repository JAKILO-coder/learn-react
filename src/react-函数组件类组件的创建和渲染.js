import React from "react"
// 函数组件的创建和渲染
// 创建
function Hello(){
    return <div>hello</div>
}

// 渲染 <Hello/> <Hello></Hello>

// 类组件的创建和渲染

// 创建
class HelloComponent extends React.Component{
    render(){
        return <div>this is class Component</div>
    }
}
// 渲染 <HelloComponent/> <HelloComponent></HelloComponent>

function App () {
  return (
    <div className="App">
        <Hello/>
        <Hello></Hello>
        <HelloComponent/>
        <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
