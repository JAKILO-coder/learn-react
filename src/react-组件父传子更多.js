import React from "react"

// 函数式的Son
//function Son (props) {
//  // props是一个对象 里面存着通过父组件传入的所有数据
//  const {list, userInfo, getMes, child} = props
//  return (
//    <div>
//      我是函数子组件,
//      {list.map(item => <p key={item}>{item}</p>)}
//      {userInfo.name}
//      <button onClick={getMes}>触发父组件传入的函数</button>
//      {child}
//    </div>
//  )
//}
function Son (props) {
  // props是一个对象 里面存着通过父组件传入的所有数据
  const {list, userInfo, getMes, child} = props
  return (
    <div>
      我是函数子组件,
      {list.map(item => <p key={item}>{item}</p>)}
      {userInfo.name}
      <button onClick={getMes}>触发父组件传入的函数</button>
      {child}
    </div>
  )
}

class App extends React.Component{
  state = {
    list: [1, 2, 3],
    userInfo:{
      name: 'cp',
      age: 30
    }
  }
  getMes = () => {
    console.log('父组件中的函数')
  }
  render () {
    return (
      <div>
        <Son
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMes = {this.getMes}
          child={<span>this is span</span>}/>
      </div>
    )
}
}

export default App;
