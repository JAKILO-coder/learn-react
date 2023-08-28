import React from "react"

function ListItem (props) {
  const {item, delItem} = props
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => delItem(item.id)}>删除</button>
    </>
  )
}

class App extends React.Component{
  state = {
    list: [
      {id:1, name:'sugar', price: 18.8, info:'cheap'},
      {id:2, name:'chicken', price: 28.8, info:'cheap'},
      {id:3, name:'ice cream', price: 38.8, info:'cheap'}
    ]
  }
  delItem = (id) =>{
    this.setState({
      list:this.state.list.filter(item => item.id !== id)
    })
  }
  render () {
    return (
      <div>
        {this.state.list.map(item=><ListItem key={item.id} item={item} delItem={this.delItem}/>)}
      </div>
    )
  }
}

export default App;
