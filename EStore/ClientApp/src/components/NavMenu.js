
import { Link } from 'react-router-dom';
import './NavMenu.css';

import React, { useState } from 'react';

function NavMenu() {
    return (
        <div className="navbarcontainer">
            <div className="navrow">
                <div className="navleft">
                    <Link to="/" className="logotype">MVC BRAND</Link>
                </div>
                <div className="navright">
                    <div className="dropdown">
                        <Link to="/category/tops"><button className="dropbtn">Tops</button></Link>
                        <div className="dropdown-content">
                            <Link to="/subcategory/Hoodies">Hoodies</Link>
                            <Link to="/subcategory/Crop Tops">Crop Tops</Link>
                            <Link to="/subcategory/Sports Bras">Sports Bras</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to="/category/Bottoms"><button className="dropbtn">Bottoms</button></Link>
                        <div className="dropdown-content">
                            <Link to="/subcategory/Leggings">Leggings</Link>
                            <Link to="/subcategory/Joggers">Joggers</Link>
                            <Link to="/subcategory/Shorts">Shorts</Link>
                        </div>
                    </div>
                    
                    <div className="dropdown">
                        <Link to="/category/accessories"><button className="dropbtn">Accessories</button></Link>
                        <div className="dropdown-content">
                            <Link to="/subcategory/Bags">Bags</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;