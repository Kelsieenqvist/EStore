import React, { Component } from 'react';

export class ListProducts extends Component {
    static displayName = ListProducts.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProducts();
    }

    static renderProducts(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(products =>
                        <tr key={products.id}>
                            <td>{products.model}</td>
                            <td>{products.brand}</td>
                            <td>{products.price}</td>
                            <a href={`api/products/${products.id}`}>
                                <td><img src={products.imgUrl} /></td>
                            </a>
                        </tr>
                    )}
                </tbody>
            </table >
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ListProducts.renderProducts(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >All Products</h1>
                {contents}
            </div>
        );
    }

    async populateProducts() {
        const response = await fetch('/api/Products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}