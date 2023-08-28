// 1. 识别常规变量
// 2. 原生js方法调用
// 3. 三元运算符 (常用)
const name = '老师'
const getAge = () =>{
    return 18
}
const flag = false

// react如何完成列表渲染？
// 技术方案：map
const songs = [
    { id: 1, name: '123'},
    { id: 2, name: '234'},
    { id: 3, name: '345'}
]

const flag = true

function App() {
  return (
    <div className="App">
        { name }
        { getAge() }
        { flag ? '真棒' : '真菜'}
        <ul>
            { songs.map(song=> <li key={song.id}>{song.name}</li>) }
        </ul>
    </div>

  );
}

export default App;
