import React, { Component } from "react"
import { ProductCard } from "./ProductCard"
import Slider from "react-slick"

class PopularSlide extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            product: {}
        }
    }

    componentDidMount() {
        this.populateSlider();
    }

    populateSlider() {
        fetch("/api/products/popularProducts")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    products: response,
                    product: response[0]
                })
            });
    }

    render() {
        const { product, products } = this.state

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            draggable: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div>
                <h2>New Arrivals</h2>
                <hr className="productdivider"></hr>
                <Slider {...settings}>
                    {products.map(product => < ProductCard key={product.id} product={product} />)}
                </Slider>
            </div>
        )
    }
}

export default PopularSlide