import React, { useContext, useState, useEffect } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import './Cart.css'
import { Row, Col } from "reactstrap"


export const Cart = () => {

    const [cart, setCart] = useContext(CartContext)

    if (JSON.parse(localStorage.getItem('cart') == null)) {
        return (
            <div>
                <p>Your shopping cart is empty :(</p>
            </div>
        )
    }

    let cart1 = JSON.parse(localStorage.getItem('cart'))
    let arrLength = cart1.length;
    console.log(arrLength)
    const total = cart1.reduce((acc, curr) => acc + curr.price, 0);

    const emptyShoppingCart = () => {
        localStorage.removeItem('cart')
    }

    return (
        <div className="cartcontainer">

            <div className="cartcontent">
                <div className="cartleft">
                    <h3 className="carth3">MY BAG</h3>
                    <span>Items in cart: {cart}</span><br></br>
                    <span>Total price: {total} SEK</span><br></br>
                    <Link to="/shoppingcart"><button onClick={() => emptyShoppingCart()}>Empty shopping cart</button></Link>
                    <hr className="carthr"></hr>
                    <div className="cartbagitem">
                        {cart1.map(product => <Row> <Col xs="2"><img src={product.imgUrl} className="cartimg"></img></Col>
                            <Col xs="6">{product.price}:-<br></br>{product.brand}<br></br>{product.model}</Col><hr className="carthr"></hr></Row>)}
                    </div>
                </div>
                <div className="cartright">
                    <h3 className="carth3">TOTAL:<span className="carttotprice">{total} SEK</span></h3>
                    <button className="cartbtn">CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}
