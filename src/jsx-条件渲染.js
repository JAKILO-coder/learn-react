// 条件渲染
// 三元表达式 逻辑&&运算

const flag = true

function App() {
  return (
    <div className="App">
        { flag ? (
         <div>
            <span>this is span</span>
         </div>) : null}

         { true && <span>this is span</span>}
    </div>

  );
}

export default App;
