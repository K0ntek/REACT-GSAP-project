import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar =()=>{

    const scroller =()=>{
            let contact = document.querySelector('.form');
            contact.scrollIntoView({behavior: 'smooth'});
    }
    return(
        <div className="nav">
            <ul>
                <li>
						<Link to={"/"}>STRONA GŁÓWNA</Link>
					</li>
					<li>
						<Link to={"/bmw"}>BMW</Link>
					</li>
					<li>
						<Link to={"/mercedes"}>MERCEDES</Link>
					</li>
                    <li>
						<Link to={"/audi"}>AUDI</Link>
					</li>
					<li id="contactBtn" onClick={scroller}><Link style={{color: "rgb(255, 0, 0)"}}>KONTAKT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;