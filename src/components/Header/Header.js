import React from "react";
import './Header.css'

export default function Header(){
    return(
        <header className="header-container">
           <img src="img/336750567_1403063726759917_2999876311063815482_n.jpg" alt="!!" className="header-img"/>
           <div className="header-content">
                <h1>HI, I am</h1>
                <h1>Giorgi Maisuradze</h1>
           </div>
           <p>front-end dev</p>
        </header>
    )
}