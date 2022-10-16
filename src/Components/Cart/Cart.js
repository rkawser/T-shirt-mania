import React, { useContext } from 'react';
import { RingContext } from '../Shops/Shops';

const Cart = ({cart , handleremovefromCart}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>select product :{cart.length}</h2>
            {
                cart.map(product=> <p>
                    {product.name} 
                    <button onClick={()=>handleremovefromCart(product)}>X</button>
                    </p>)
            }
            <p>{ring}</p>
        </div>
    );
};

export default Cart;