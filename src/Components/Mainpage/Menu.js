import React, { useState } from "react";
import '../Mainpage/Menu.css';

export default function Menu({navbar}){

    const [showproduct,setproduct] = useState(false);
    const handleClick=()=>{
        setproduct((value)=>!value);
    }

    const [showBar,setBar]= useState(true);
    const handleBar = ()=>{
        setBar((prev)=>!prev);
    }

    return(
        <>
            <ul id="menu" className={`${showBar?"#menu":"#menu active"}`}>
               {navbar.map((items)=>{
                return(
                    (!items.child)?
                    (
                        <li id={items.id} className={`${!showBar?"#items.id":"items.id active"}`} key={items.id}>
                            <a href={`${(items.id === "home") ? "/Mainpage.js" :"#"}`}>{items.name}</a>
                        </li>
                    ):
                    (
                        <li id={items.id} key={items.id}>
                            <button id="productbtn" className={`${!showBar?"#productbtn":"#productbtn active"}`} onClick={handleClick}>
                                {items.name}
                                <span id={`${!showproduct?'Line34':'noline'}`} />
                            </button>
                            <ul id={`${showproduct?'revealProducts':'hideProducts'}`}>
                                {items.child.map((item)=>{
                                    return(
                                        <li id={item.id} key={item.id}>
                                            <a>{item.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )

                )
               })} 
            </ul>

            <div id="menubar">
                <i className={`${showBar?'HamburgerMenu':'Cross'}`} onClick={handleBar}/>
            </div>
        </>
    )
}
