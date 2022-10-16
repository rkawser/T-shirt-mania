import React from 'react';
import './Shop.css'
const Shop = ({shop ,handleaddtoCart}) => {
    
    const { name, picture, price } = shop
    return (
        <div className='shop-container'>
            <div className='shopCard-style'>
                <img src={picture} alt="shop-picture" />
                <h4>name: {name}</h4>
                <h5>price: {price}</h5>
                <button onClick={()=> handleaddtoCart(shop)} className='shop-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Shop;