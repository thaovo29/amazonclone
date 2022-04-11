import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from "./StateProvider";

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='http://www.nightwatchsoftware.com/wp-content/uploads/how-to-maximize-your-banner-ads.jpg'
        />

        <div>
          <h3>{user.email}</h3>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>
          {basket.map(item => (
            <CheckoutProduct
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
          
        </div>

      </div>
      <div className='checkout__right'>
        <Subtotal />
        <h2>
          The subtotal will for here
        </h2>
      </div>
    </div>
  )
}

export default Checkout