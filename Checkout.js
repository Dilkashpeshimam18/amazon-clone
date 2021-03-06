import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket, user},dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://www.earticleblog.com/wp-content/uploads/2017/08/gp-amazon-sale-banner-29062017.jpg" />
                <div className="checkout_title">
                    <h3> Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                    
                </div>
                {basket.map(item =>(
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
