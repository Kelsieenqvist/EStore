import React, { Component, useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';
import SubMenu from './SubMenu'
import { Container, Row, Col } from 'reactstrap';
import './DetailsPage.css';
import { Link } from 'react-router-dom'


export const DetailsPage = ({ match }) => {

    useEffect(() => {
        fetchProduct();
    }, [])

    const [product, setProduct] = useState({});
    const [cart, setCart] = useContext(CartContext);

    const fetchProduct = async () => {
        const fetchProduct = await fetch(`/api/products/${match.params.id}`);
        const product = await fetchProduct.json();
        setProduct(product)
    }

    const addToCart = () => {

        let existingEntires = JSON.parse(localStorage.getItem('cart'));

        if (existingEntires == null) existingEntires = [];

        localStorage.setItem('product', JSON.stringify(product));
        existingEntires.push(product)
        localStorage.setItem('cart', JSON.stringify(existingEntires))
    }

    return (
        <div className="dpcontainer">
            <div className="dpcontent">
                <div className="dpleft">
                    <img src={product.imgUrl2} className="thumbpic"></img>
                    <img src={product.imgUrl3} className="thumbpic"></img>
                </div>
                <div className="dpmiddle">
                    <img src={product.imgUrl} className="productpic"></img>
                </div>
                <div className="dpright">
                    <h2 className="productname">{product.brand}</h2>
                    <h4 className="productdsc">{product.model}</h4>
                    <hr className="productdivider"></hr>
                    <h5 className="productprice">{product.price}:-</h5>
                    <p className="producttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec leo mollis, lobortis erat vel, facilisis nunc. Praesent sem eros, consequat nec nibh sed, malesuada blandit elit.</p>
                    <Link to={`/products/${product.id}`}><button onClick={() => addToCart()} className="productbtn">ADD TO CART</button></Link>

                </div>
            </div>

        </div>
    );
}