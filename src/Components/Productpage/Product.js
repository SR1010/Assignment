import React from "react";
import '../Productpage/Product.css';
import Line18 from '../Uploads/Line 18.svg';
import Star2 from '../Uploads/Star 2.svg';
import Arrow1 from '../Uploads/Arrow 1.svg';
import Arrow2 from '../Uploads/Arrow 2.svg';
import Pdt1 from '../Uploads/Pdt1.svg';
import Pdt2 from '../Uploads/Pdt2.svg';
import Pdt3 from '../Uploads/Pdt3.svg';
import Pdt4 from '../Uploads/Pdt4.svg';

export default function Product(){
    return(
        <section>
            <h2 id="Newproducts">New products</h2>
            <img src={Star2} alt="Star2" id="Star2"/>
            <img src={Line18} alt="Line18" id="Line18"/>
            <img src={Arrow1} alt="Arrow1" id="Arrow1"/>
            <img src={Arrow2} alt="Arrow2" id="Arrow2"/>


            <span id="Apparel">Apparel</span>
            <span id="Accessories">Accessories</span>
            <span id="Bestsellers">Best sellers</span>
            <span id="discount">50% off</span>


            <img src={Pdt1} alt="Pdt1" id="Pdt1"/>
            <span id="group19"/>
            <span id="textfield1">
                <span id="Frame11194">
                    <div id="jacket">FLORIDA JACKET</div>
                    <div id="jktext">Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</div>
                    <div id="jktprice">$100</div>
                </span>
            </span>


            <img src={Pdt2} alt="Pdt2" id="Pdt2"/>
            <span id="group19-2"/>
            <span id="textfield2">
                <span id="Frame11194">
                    <div id="jacket">FLORIDA JACKET</div>
                    <div id="jktext">Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</div>
                    <div id="jktprice">$100</div>
                </span>
            </span>



            <img src={Pdt3} alt="Pdt3" id="Pdt3"/>
            <span id="group19-3"/>
            <span id="Group19"></span>
            <span id="textfield3">
                <span id="Frame11194">
                    <div id="jacket">FLORIDA JACKET</div>
                    <div id="jktext">Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</div>
                    <div id="jktprice">$100</div>
                </span>
            </span>

            <img src={Pdt4} alt="Pdt4" id="Pdt4"/>
            <span id="textfield4">
                <span id="Frame11194">
                    <div id="jacket">FLORIDA JACKET</div>
                    <div id="jktext">Suffered alteration in some form, bysuffalterattion in some forme, byinjected humor, or randomised</div>
                    <div id="jktprice">$100</div>
                </span>
            </span>

        </section>
    )
}