// React: 框架的核心包
// ReactDOM: 专门做渲染相关的包
import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css';
// 引入根组件
import App from './App';

//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(
//    <App />
//)

// 渲染根组件APP 到一个id为root的dom节点上
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
