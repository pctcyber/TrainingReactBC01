import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className ="container-fluid bg-dark p-5">
                <h3 className = 'text-white'>BEST SMARTPHONE</h3>
                <div className ="row">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                </div>
            </div>
        )
    }
}
