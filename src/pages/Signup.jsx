
import React, { useState } from 'react'



import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../store/Authentication'
import { useNavigate } from 'react-router-dom'
const Signup = () => {





  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate =  useNavigate()


  const {
    users
    } =  useSelector(state => state.auth)
  console.log(users)


  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(username, email, password)
    dispatch(addUser({
      username,
      email,
      password
    }))



     navigate('/login')

  }




  return (
  
    <div className='max-w-lg mx-auto bg-white shadow-md p-2 mt-10'>

      <div className='flex flex-col'>
        <h1 className='text-center text-2xl'>SignUp</h1>

        <form

        onSubmit={handleSubmit}
        
        >
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              UserName
            </label>
            <input

            onChange={(e) => setUsername(e.target.value)}
              type='username'
              name='username'
              id='username'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'  />
              </div>
              <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'

              onChange={(e) => setEmail(e.target.value)}
              className='mt-
              1 p-2 border border-gray-300 rounded-md w-full'  />
              </div>
              <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              name='password'
              id='password'
              className='mt-1 p-2 border border-gray-300 rounded-md w-full'  />
              </div>
           
   <button className='bg-blue-600 p-2 text-white  rounded-sm'> Signup </button>
        
        </form>
      </div>

    </div>
  )
}

export default Signup