import React from "react"
// 函数组件的创建和渲染
// 创建
function Hello(){
    const clickHandler = (e)=>{
        // 阻止默认行为
        e.preventDefault()
        console.log('函数组件中的事件被触发了', e)
    }
    return <div><a onClick={clickHandler} href="http://baidu.com">百度</a></div>
}

// 渲染 <Hello/> <Hello></Hello>

// 类组件的创建和渲染

// 创建
class HelloComponent extends React.Component{
    // 事件回调函数
    clickHandler = () =>{
        console.log('类组件中的事件被触发了')
    }
    render(){
        return <div onClick={this.clickHandler}>this is class Component</div>
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
