import React, { useEffect, useState, useContext } from 'react'
import './SubMenu.css';
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

export const SubMenu = () => {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div id="subBar">
            <div className="subContent">
                <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
                <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                <Link to={`/shoppingcart`}><i class="fa fa-shopping-cart" aria-hidden="true"><span style={{ color: 'red' }} className="itemsInCart-icon">{cart}</span></i></Link>

            </div>
        </div>
    )
}
