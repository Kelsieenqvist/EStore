import React, { Component } from 'react';
import { ProductCard } from './ProductCard';
import HeaderHome from './HeaderHome';
import ProductSlide from './ProductSlide';
import SubMenu from './SubMenu'
import Collection from './Collection'
import NewsLetterForm from './NewsLetterForm';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <HeaderHome />
                <ProductSlide />
                <Collection />
                <NewsLetterForm />
            </div>
        );
    }
}

