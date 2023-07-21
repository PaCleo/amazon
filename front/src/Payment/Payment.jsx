import React from 'react';
import './Payment.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';

function Payment() {
    const [{ basket }, dispatch] = useStateValue();
    const cachedUser = localStorage.getItem('usuario');
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="paymentent_address">
                        <p>{cachedUser}</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review item and delivery</h3>
                    </div>
                    <div className="payment_items">
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

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method: <h4>There is no payment method because is just a study project</h4></h3>
                    </div>
                    <div className="payment_details">
                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)} // Part of the homework
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;