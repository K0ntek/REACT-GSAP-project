import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar =()=>{

    const scroller =()=>{
            let contact = document.querySelector('.form');
            contact.scrollIntoView({behavior: 'smooth'});
        }

        const [active, setActive] = useState("nav");
        const [icon, setIcon] = useState("nav__toggler");
        const navToggle = () => {
            active === 'nav' ? setActive('nav nav_active'): setActive('nav')
            icon === 'nav__toggler' ?  setIcon("nav__toggler toggle"): setIcon("nav__toggler");
        };

    return(
        <div className={active}>
            <div onClick={navToggle} className="navButton">
				<div className="lines">
					<div className="line item1" id="line"></div>
					<div className="line item2" id="line"></div>
					<div className="line item3" id="line"></div>
				</div>
			</div>

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
					<li id="contactBtn" onClick={scroller}><Link style={{color: "rgb(128, 0, 0)"}}>KONTAKT</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;