import React, { createContext, useState } from 'react';
import useProducts from '../../Hooks/UseProducts';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Shops.css'

export const RingContext = createContext('ring')

const Shops = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([]);
  
  
    

    const handleaddtoCart = (selectItem) => {
        const item = cart.find(product => product._id === selectItem._id)

        if (!item) {
            setCart([...cart, selectItem])
        } else {
            alert('already this product add')
        }

    }

    const handleremovefromCart = (cartData) => {
        const rest = cart.filter(data => data._id !== cartData._id)
        setCart(rest)
    }
    
    

    return (
        <RingContext.Provider value='check context'>
            <div className='main-container'>

                <div className='shops-container'>
                    {
                        products.map(product => <Shop
                            key={product._id}
                            shop={product}
                            handleaddtoCart={handleaddtoCart}
                        ></Shop>)
                    }
                </div>

                <div className='cart-container'>
                    <Cart cart={cart} handleremovefromCart={handleremovefromCart}></Cart>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default Shops;