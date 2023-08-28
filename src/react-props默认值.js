import React from "react"
import PropTypes from 'prop-types'

function Test ({list}) {
  return (
    <div>
      {list.map(item=><li key={item.id}>{item}</li>)}
    </div>
  )
}
Test.propTypes = {
  list: PropTypes.array
}
Test.defaultProps = {

}

class App extends React.Component{
  render () {
    return (
      <div>
        <Test list={[3, 4]}/>
      </div>
    )
  }
}

export default App;
