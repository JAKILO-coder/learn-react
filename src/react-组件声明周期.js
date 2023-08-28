import React from "react";

class Test extends React.Component {
  timer = null
  componentDidMount () {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000)
  }

  componentWillUnmount () {
    console.log('unmount')
    clearInterval(this.timer)

  }
  render () {
    return <div>test</div>
  }

}

class App extends React.Component {
  
  constructor () {
    super()
    console.log('constructor')
  }
  state = {
    count : 0,
    flag : true
  }
  componentDidMount () {
    console.log('componentDidmount')
    // ajax 类似于 mounted
    

  }
  componentDidUpdate () {
    console.log('update')

  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag
    })
  }
  render () {
    console.log('render')
    return (
      <div>
        {this.state.flag ? <Test /> : null}
        <button onClick={this.clickHandler}>{this.state.count}</button>
      </div>
    )

  }

}

export default App