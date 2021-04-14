import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const header = () => {
    return (
        <>
            <input type="checkbox" id="bt_menu" />
            <label htmlFor="bt_menu">&#9776;</label>

            <div id="Header-site" >
                <ul id="buttons" >
                <img alt=' Flor' src="flor.png"></img>
                    <Link to="/">
                        <li className="items-menu" >Flores</li>
                    </Link>
                    <Link to="/buque">
                        <li className="items-menu">Buques</li>
                    </Link>
                </ul> 
            </div>
        </>
    );
};

export default header;
