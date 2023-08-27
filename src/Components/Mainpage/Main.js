import React from "react";
import '../Mainpage/Main.css';
import Rectangle from "../Uploads/Rectangle.svg";
import Line17 from '../Uploads/Line 17.svg'
import Star1 from '../Uploads/Star 1.svg'
import Menu from "./Menu";
import Banner from "./Banner";

export default function Main(){
    
    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
        ];

    return(
        <section>
            <span id="Rectangle31"></span>
            <img src={Rectangle} alt="Rectangle" id="Rectangle"/>
            <a id="ShopKart" href="/Main.js">ShopKart</a>
            <a id="Wishlist" href="#">WISHLIST (0)</a>
            <a id="Bag" href="#">BAG (0)</a>
            <img src={Line17} alt="Line17" id="Line17"/>
            <img src={Star1} alt="Star1" id="Star1"/>
            <Menu navbar={navbar}/>
            <Banner/>
        </section>
    )
}