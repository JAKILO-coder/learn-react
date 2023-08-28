import React, {createContext} from "react"
// App -> A -> C
const {Provider, Consumer} = createContext()

function ComC() {
  return(
    <div>
      this is ComC
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

function ComA() {
  return(
    <div>
      <div>this is ComA</div>
      <ComC />
    </div>
  )
}


class App extends React.Component{
  state = {
    message: 'App message'
  }
  render () {
    return (
      <Provider value={this.state.message}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
}
}

export default App;
