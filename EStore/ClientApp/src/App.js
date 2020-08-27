import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ListProducts } from './components/ListProducts';
import { DetailsPage } from './components/DetailsPage';
import { SubCategoryPage } from './components/SubCategoryPage';
import { CategoryPage } from './components/CategoryPage';
import { CartProvider } from './components/CartContext';
import { Cart } from "./components/Cart.js"
import { NewArrivalsPage } from "./components/NewArrivalsPage.js"
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Switch>
                <CartProvider>
                    <Layout> {/* Layout �r en komponent som inneh�ller komponenten NavMenu. Detta g�r att NavMenu f�ljer med till alla sidor som �r innanf�r Layouten h�r */}
                        <Route exact path='/' component={Home} /> {/* Om s�kv�g slutar med '/' t:ex https://localhost:3000/ s� h�mtas komponenten Home */}
                        <Route path='/products/:id' component={DetailsPage} /> {/*Om s�kv�gen �r https://localhost:3000/api/products/# s� h�mtas detaljvyn f�r specifik produkt*/}
                        <Route path='/list-products' component={ListProducts} /> {/* Om s�kv�g �r https://localhost:3000/list-products s� h�mtas komponenten ListProducts */}
                        <Route path='/category/:category' component={CategoryPage} />
                        <Route path='/subCategory/:subCategory' component={SubCategoryPage} />
                        <Route path='/shoppingCart' component={Cart} />
                        <Route path='/newarrivals' component={NewArrivalsPage} />
                    </Layout>
                </CartProvider>
            </Switch>
        );
    }
}
