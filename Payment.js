import React, {useState, useEffect} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {Link, useHistory} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reducer';
import { Card } from '@material-ui/core';
import axios from './axios';
import {db} from "./firebase";

function Payment(id) {
    const [{basket, user},dispatch]= useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const[error, setError]= useState(null);
    const[disabled, setDisabled]=useState(true);
    const[succeeded,SetSucceeded]=useState(false);
    const[processing,SetProcessing]=useState("");
    const[clientSecret, setClientSecret]= useState(true);

    useEffect(() => {
        const getClientSecret = async() =>{
            const response = await axios({
                method:'post',
                url : `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
        console.log("THE SECRET is>>>>", clientSecret)

    }, [basket])

    const handleSubmit= async(event)=>{
        event.preventDefault();
        SetProcessing(true);

        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
            //paymentIntent=paymentConfirmation
            db
            .collection('users')
            .doc(user?.uid)
            .collection('order')
            .doc('paymentIntent.id')
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created,
            })
            SetSucceeded(true);
            setError(null);
            SetProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })


    }

    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");


    }

    return (
        <div className="payment">
            <div className="payment__container">
            <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 lane</p>
                        <p>Mumbai , Maharashtra</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items & Delivery</h3>
                    </div>
                    <div className="payment__items">
                    {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                
                                    />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Payment;
