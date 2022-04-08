import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='http://www.nightwatchsoftware.com/wp-content/uploads/how-to-maximize-your-banner-ads.jpg'
        />

        <div>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>
          {/* basket item */}
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