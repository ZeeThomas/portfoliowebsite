import "../styles/desktop.css"
import bg from '../assets/windows7bg.jpeg'
import fileExplorer from "../assets/explorer_ICO_MYCOMPUTER.ico"
import {Component} from 'react';
import {Menubar} from "./menubar.jsx"

function Icon(props)
{
    function openWindow()
    {
        alert("open the window")
        return 
    }
    return (
        <div onClick={openWindow}>
            <img src={props.src}/>
            <p>{props.title}</p>
        </div>
    )
        
}
export const Desktop = () => 
{
    return (
        <div id="desktop">
           {/*<img src={bg} alt="windows 7 background" /> */}
            <div>
               <Icon class="icons" src={fileExplorer} title="About Me"/>
            </div>
            <Menubar id="menubar"/>
        </div>
    );
}