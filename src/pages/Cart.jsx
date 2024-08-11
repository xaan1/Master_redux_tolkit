import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  console.log(cartItems);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) =>
      total + (item.price * item.quantity), 0
    );
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // sax localStorage update
    window.location.reload()
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4 p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center">
                <img src={item.imagUrl} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">By {item.author}</p>
                  <p className="text-gray-600 mt-1">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <input 
                  type="number" 
               
                  value={item.quantity} 
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  className="w-16 p-2 border rounded-md text-center mr-4"
                />

                <p className="text-lg font-bold">${item.price * item.quantity}</p>
               
              </div>
              <button className="bg-red-500 text-white rounded-md p-2" onClick={() => handleRemoveItem(item.id)}>Delete</button>
            </div>
          ))}
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
