
import React from 'react'
import { useSelector } from 'react-redux'
import SelfBook from '../components/SelfBook'
import Hero from '../components/Hero'

const Home = () => {


  //  get localstorage from 
  
  //  get localstorage from



  const 
    {Book}
     =  useSelector(state => state.book)
  console.log(Book)

    // { {window.location.reload()}}

  return (
    <>

    <Hero />
     <div className='mt-10'>

      
<h1 className='text-2xl text-black text-center font-bold mb-10'>Books</h1>
   <div className='grid grid-cols-1 gap-x-3 md:grid-cols-2 lg:grid-cols-3'
 
>

    {
      Book.map((book, index) => (
        <SelfBook book ={book} />
      ))
    }
    </div>
</div>
    </>
   
  )
}

export default Home