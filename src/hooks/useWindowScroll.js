import {useState} from 'react'

export function useWindowScroll () {
    const [y, sety] = useState(0)
    // 滚动时，不断获取滚动值，交给y
    window.addEventListener('scroll', ()=>{
        const h = document.documentElement.scrollTop
        sety(h)
    })
    return [y]
}