import React from 'react'
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CardSection from './CardSection'


const CheckoutForm = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div class="product-info">
                <h3 className="product-title">Apple MacBook Pro</h3>
                <h4 className="product-price">$999</h4>
            </div>
            <form onSubmit={() => handleSubmit()}>
                <CardSection />
                <button className="btn-pay">Buy Now</button>
            </form>
        </div>
    )
}

export default CheckoutForm
