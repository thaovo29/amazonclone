import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user){
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to="/">
            <img className='Header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'/>
        </Link>
        <div className='header__search'>
            <input className='header__search__input' type = 'text' />
            <img className='header__searchIcon' src={require('./img/search.png')}/>
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className='header__option'>
                    <span className='header__option__line1'>Hello {!user?'Guest': user.email}</span>
                    <span className='header__option__line2'>{user?'Sign Out':'Sign In'}</span>
                </div>
            </Link>

            <div className='header__option'>
                <span className='header__option__line1'>Returns</span>
                <span className='header__option__line2'>& Orders</span>
            </div>

            <div className='header__option'>
                <span className='header__option__line1'>Your</span>
                <span className='header__option__line2'>Prime</span>
            </div>

            <div className='header__optionBasket'>
                <Link to="/checkout">
                    <img className='header__optionBasketIcon' src={require('./img/basket.png')}/>
                    <span className='header__option__line2 header__optionBasketCount'>{basket.length}</span>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Header