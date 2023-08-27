import React from "react";
import '../Mainpage/Banner.css';
import BlackJacketPerson from '../Uploads/jessica-radanavong-IchPBHFD0pw-unsplash.svg';
import Star4 from '../Uploads/Star 4@2x.svg'
import Line23 from '../Uploads/Line 23.svg';
import Star3 from '../Uploads/Star 3.svg';
import VectorArrow from '../Uploads/Vector.svg';


export default function Banner(){
    return(
        <section>
            <span id="rectangle29"></span>
            <span id="rectangle30"></span>
            <h1 id="Fresh">Fresh</h1>
            <h1 id="Year">2022</h1>
            <h1 id="Look">Look</h1>
            <img src={Star3} alt="Star3" id="Star3"/>
            <img src={BlackJacketPerson} alt="BlackJacketPerson" id="BlackJacketPerson"/>
            <span id="OregonJacket">Oregon jacket</span>
            <span id="Price">$124</span>
            <img src={Line23} alt="Line23" id="Line23"/>
            <img src={Star4} alt="Star4" id="Star4" />
            <span id="Frame11197">
                <span id="Frame1">
                    <span id="Frame3">
                        <a href="#" id="seemore">See more</a>
                    </span>
                    <img src={VectorArrow} alt="VectorArrow" id="VectorArrow" />
                </span>
                <hr id="Line16" />
            </span>
        </section>
    )
}