import React, { useState, useEffect } from 'react'

import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cartHelper';

function Cart() {

    const [Products, setProducts] = useState([])
    const [reload, setReload] = useState(false);

    useEffect( () => {
        setProducts(loadCart())
    }, [reload]); // Passing reload for Forcefully Reloading of Component

    const loadProducts = (products) => (
        products.map( (product, index) => (
            <Card
                key={ index }
                product={ product }
                addtoCart={ false }
                removefromCart={ true }
                setReload={ setReload }
                reload={ reload }
            />
        ) )
    )

    const loadCheckout = () => (
        <div>
            <h3>This Section is to Checkout Product in Cart</h3>
        </div>
    )

    return (
        <Base title='Welcome to AdminDashboard' description='An Amazing Place to Buy Books'>
            <div className="row text-center">
                <div className="col-6">
                    {  Products.length > 0 ?  loadProducts(Products) : ( <h1> No Product in Cart </h1> ) }
                </div>
                <div className="col-6">
                    { loadCheckout() }
                </div>
            </div>
        </Base>
    )
}

export default Cart;
