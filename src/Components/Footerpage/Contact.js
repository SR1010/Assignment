import React, { useState } from "react";
import './Contact.css';

export default function Contact(){
    return(
        <>
            <span id="BackgroundMap"/> 
            <span id="Newslleter">Newslleter</span>
            <span id="aboutnewsletter">Get news about articles and updates in your inbox.</span>
            <h1 id="GetInTouch">GET<br/>IN TOUCH</h1>

            <form>
                <input type="text" placeholder="NAME" name="Name" id="name"/>
                <hr id="Line19"/>
                <input type="text" placeholder="EMAIL" name="Email" id="email"/>
                <hr id="Line20"/>
                <input type="text" placeholder="MESSAGE" name="msg" id="message"/>
                <hr id="Line21"/>
                <button id="sendbtn">
                    <span id="send">SEND</span>
                    <span id="Ellipse1"></span>
                </button>
            </form>

        </>
    )
}