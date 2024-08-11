
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'


import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/Authentication'
import { clearCart } from '../store/BooKslice'

const Header = () => {

  const user = localStorage.getItem('isLoggin')
  console.log(user)

  const navigate =  useNavigate()

   const dispatch =  useDispatch()

   const handallogout =() => {
      dispatch(logout())
      dispatch(clearCart())
      
      // reload window
      navigate("/login")
      window.location.reload()
   }
 

   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
     setCartItems(cart);
   }, []);
 
   console.log(cartItems);


  return (
    <div className='bg-white shadow-md h-20    z-50  fixed inset-y-0  left-0 right-0 w-min-h-screen' >
     

     <div className=' p-5 mx-auto flex justify-between items-center h-full w-full '>
        <h1 className='text-1xl font-bold'>My App using Redux</h1>
        <div>
         

         {
          user  ? (
            <>
              <ul className='flex items-center gap-x-3 '>
            <Link to='/'><li className='inline-block mr-4'>Home</li></Link> 
              
                <Link to='/about'><li className='inline-block mr-4'>About</li></Link> 
                  <Link to='/new'><li className='inline-block mr-4'>New Book</li></Link> 
                  <Link to='/profile'><li className='inline-block mr-4'>Profile</li></Link> 
                  <div className='relative'>
                    <Link to='/cart'><li className='inline-block mr-4'>Cart</li></Link> 
                    <div className='absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full'>{cartItems.length}</div>
                  </div>

          
                  <Link to ="" 

                  onClick={handallogout}
                  
                  
                  > <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Log Out </button> </Link>
                  

                 
                </ul>
            </>
          )
          :
          (
            <>
             <Link to ="/login" > <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign In</button>
                  </Link>
                
                <Link to ="/signup" > <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Sign Up</button>
                </Link>
            </>
          )
         }

        
          
          
                
         
        </div>

      
     </div>
    </div>
  )
}

export default Header