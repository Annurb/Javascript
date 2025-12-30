import './Box.css'
import {useState} from 'react'
export default function Box({active, toggle}){
    const toggleActive = () =>setActive(!active)
    return (<div onClick={toggle}
     className="Box" style={{backgroundColor: active?'red': 'black'}}>vsf</div>)
}