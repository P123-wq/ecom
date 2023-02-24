import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import classes from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import {Link }from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.header}>
      
        
          <div className={classes.header__logo}>
            <StorefrontIcon className={classes.header__logoImage}></StorefrontIcon>
            <h2 className={classes.header__logoTitle}>e-shopping</h2>
          </div>

          <div className={classes.header__search}>
            <input type="text" className={classes.header__searchInput}></input>
            <SearchIcon className={classes.header__searchIcon}/>
          </div>
          
          <div className={classes.header__nav}>
            <div className={classes.nav__item }>
              <span className={classes.nav__itemLineOne}>Hello Guest</span>
              <span className={classes.nav__itemLineTwo}>Sign in</span>
            </div>

            <div className={classes.nav__item}>
            <span className={classes.nav__itemLineOne}>Your</span>
              <span className={classes.nav__itemLineTwo}>Shop</span>
            </div>

            
            <div className={classes.nav__itemBasket}>
            <ShoppingBasketIcon></ShoppingBasketIcon>
              <span className={classes.nav__itemLineTwo} >0</span>
            </div>

          </div>
     
    </div>
  )
}

export default Header