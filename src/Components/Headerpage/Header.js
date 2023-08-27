import React from "react";
import Truck from '../Uploads/truck.svg';
import Fb from '../Uploads/fb.svg';
import Ig from '../Uploads/ig.svg';
import In from '../Uploads/in.svg';
import Tw from '../Uploads/tw.svg';
import './Header.css';

export default function Header(){
    return (
        <section id="Rectangle27">
            <div>
                <img src={Truck} alt="Truck" id="Truck"/>
                <span id="FreeDelivery">Free Delivery</span>
                <hr id="Line11"/>
                <span id="ReturnPolicy">Return Policy</span>
            </div>
            <div>
                <a href="#" id="login">Login</a>
                <span id="follow">Follow US</span>
                <a href="#"><img src={Fb} alt="Facebok" id="fb" /></a>
                <a href="#"><img src={In} alt="Linkedln" id="in" /></a>
                <a href="#"><img src={Tw} alt="Twitter" id="tw" /></a>
                <a href="#"><img src={Ig} alt="Instagram" id="ig" /></a>
            </div>
        </section>
    )
}