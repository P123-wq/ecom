import React from 'react'
import classes from './Product.module.css'

const Product = (props) => {
  return (
    <div>
        <div className={classes.product}>
            <div className={classes.product__info}>
                <p >{props.title}</p>
                <p className={classes.product__price}>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <p className={classes.product__rating}>
                    {Array(props.rating).fill().map((_,i)=>(<p>⭐️</p>))}
                    {/* creating array of rating. to fill value we used fill(). _ is used to represent- for each and every item of array 
                     and i is integer*/}
                </p>

            </div>
            
                <img className={classes.img} src={props.image}></img>
                <button className={classes.button}>Add to Cart</button>
            
            
            
        </div>
        
    </div>
  )
}

export default Product