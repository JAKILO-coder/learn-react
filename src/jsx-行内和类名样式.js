// jsx样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性即可
// 2. 类名样式 - 在元素身上绑定一个className属性即可

import './app.css';

const style = {
    color:'red',
    fontSize:'30px'
}

// 动态控制active类名
const activeFlag = false
function App () {
  return (
    <div className="App">
        <span style={style}>this is span</span>
        <span className={activeFlag?'active' : ''}>测试类名样式</span>
    </div>
  );
}

export default App;
