import { useEffect } from "react"

function App () {
  useEffect(()=>{
    async function loadData(){
      const res = await fetch('http://geek.itheima.net/v1_0/channels').then(
        response => response.json()
      ).then(data=>console.log(data))
    }
    loadData()
  }, [])
  return (
    <div>
    </div>
  )
}


export default App