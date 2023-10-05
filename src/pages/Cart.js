import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {products.map((product) => (
          <div className='cartCard' key={product.id}>
            <img src={product.image} alt='' />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className='btn'>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
