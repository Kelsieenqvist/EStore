import React, { Component, useEffect, useState } from 'react';
import SubMenu from './SubMenu'
import { ProductCard } from './ProductCard'
import { Row, Container, Col } from "reactstrap"

export class CategoryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        this.fetchProducts = this.fetchProducts.bind(this)
    }

    fetchProducts = async () => {
        const fetchProducts = await fetch(`/api/category/${this.props.match.params.category}`);
        const fetched = await fetchProducts.json();
        this.setState({
            products: fetched
        })
    }

    componentDidMount() {
        this.fetchProducts();
    }
    componentDidUpdate() {
        this.fetchProducts();
    }

    render() {
        return (
            <Container>
                <h2>{this.props.match.params.category}</h2>
                <Row xs={3}>
                    {this.state.products.map(product => <Col s={3}>< ProductCard key={product.id} product={product} /></Col>)}
                </Row>
            </Container>
        )
    }
}