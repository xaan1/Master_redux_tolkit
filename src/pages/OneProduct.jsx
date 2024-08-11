import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, handledetedBook } from '../store/BooKslice';

const OneProduct = () => {
  const { id } = useParams();
  const { Book } = useSelector((state) => state.book);

  const selfproduct = Book.find((book) => book.id === id);
  console.log(selfproduct ,"selfproduct");

  if (!selfproduct) {
    return <div>Product not found</div>;
  }

   const dispatch =  useDispatch()


   const addproduct = ()=> {
      dispatch(addToCart(selfproduct))
      window.location.reload()
   }


  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex items-center">
        {/* Qaybta Sawirka */}
        <div className="w-1/2">
          <img src={selfproduct.imagUrl} alt="product" className="w-full h-auto object-cover" />
        </div>

        {/* Qaybta Macluumaadka */}
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            {selfproduct.title}
          </h2>
          <p className="text-gray-600 mt-2">By {selfproduct.author}</p>
          <p className="text-gray-600 mt-4">{selfproduct.content}</p>
          <p className="text-xl font-bold text-gray-800 mt-4">
            ${selfproduct.price}
          </p>
          <button
        onClick={addproduct}
          
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
