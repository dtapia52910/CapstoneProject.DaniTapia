import React, { useState, useEffect } from 'react';
import { useGetAllCartsQuery, useGetSingleCartQuery, useUpdateCartMutation, useCheckoutCartMutation } from '../redux/api';
import FakeCheckout from './FakeCheckout'; 

function Cart() {
  const [cart, setCart] = useState([]);

  const {data}=useGetAllCartsQuery ()
//   setCart(data.products);
   console.log (data)

  const handleQuantityChange = async (productId, newQuantity) => {
//     try {
//       const updatedCart = cart.map(item =>
//         item.productId === productId ? { ...item, quantity: newQuantity } : item
//       );
//       await updateCart(updatedCart);
//       setCart(updatedCart);
//     } catch (error) {
//       console.error('Error updating cart:', error);
//     }
  };

  const handleRemoveItem = async productId => {
    // try {
    //   const updatedCart = cart.filter(item => item.productId !== productId);
    //   await updateCart(updatedCart);
    //   setCart(updatedCart);
    // } catch (error) {
    //   console.error('Error removing item from cart:', error);
    // }
  };

  const handleCheckout = async () => {
    // try {
    //   await checkoutCart();
    //   console.log('Checkout successful');
    // } catch (error) {
    //   console.error('Error during checkout:', error);
    // }
  };

  return (
    // <div>
      <h2>Cart</h2>
    //   <ul>
    //     {cart.map(item => (
    //       <li key={item.productId}>
    //         <span>{item.name}</span>
    //         <input
    //           type="number"
    //           value={item.quantity}
    //           onChange={e => handleQuantityChange(item.productId, e.target.value)}
    //         />
    //         <button onClick={() => handleRemoveItem(item.productId)}>Remove</button>
    //       </li>
    //     ))}
    //   </ul>
    //   <button onClick={handleCheckout}>Checkout</button>
    //   <FakeCheckout /> 
    // </div>
  );
}

export default Cart;
