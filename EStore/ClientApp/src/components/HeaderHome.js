import React from 'react';
import './HeaderHome.css';
import { Link } from "react-router-dom"

function HeaderHome() {
    return (
        <div className="headerhome">
            <div className="headerhomeCon">
                <h1 className="h1home">NEW SEASON COLLECTION</h1>
                <Link to="/newarrivals"> <button className="btnHeader">SHOP NOW</button></Link>
            </div>
        </div>
    )
}

export default HeaderHome