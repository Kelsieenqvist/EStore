import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap'
import './ProductCard.css';
import { DetailsPage } from './DetailsPage';
import { Link } from "react-router-dom"


export const ProductCard = ({ product }) => {
    const { id, dateAdded, brand, model, category, subCategory, color, price, newArrival, discountPrice, imgUrl, imgUrl2, imgUrl3 } = product;




    return (
        <div className="test">
            <Link to={`/products/${id}`}>
                <Card className="custom-card">
                    <CardImg src={imgUrl}></CardImg>
                    <CardBody>
                        <CardTitle className="card-title">{brand}</CardTitle>
                        <CardSubtitle>{model}</CardSubtitle>
                        <CardSubtitle className="price">{price}:-</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
        </div >
    )
}