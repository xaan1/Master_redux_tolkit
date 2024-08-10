import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Addproduct from './components/Addproduct'
import {deletedBlog, handleChangeInput, setblogs, setCurrentEdit } from './store/blogSlice'

const App = () => {


  const blogs = useSelector(state => state.blog)
  console.log(blogs)

  const dispatch = useDispatch()

    useEffect(() => {

      dispatch(setblogs({
        blogs : JSON.parse(localStorage.getItem("blogs")) || []
      }))

    },[])


    function deleted(id) {

      dispatch(deletedBlog(id))

    }




    function onEdit(id) {

      dispatch(setCurrentEdit({
        currentEdit : id
      }))


      dispatch(handleChangeInput({
        title : blogs.blogs.find(blog => blog.id === id).title,
        description : blogs.blogs.find(blog => blog.id === id).description,
        image : blogs.blogs.find(blog => blog.id === id).image
      }))
      
    }

   

  return (
    <div>
     <h1  className='text-center text-2xl text-gray-400'>Mange application with redux</h1>
     <Addproduct  />


      <div className='max-w-lg mx-auto bg-white shadow-md p-2 mt-10'>
      {blogs.length === 0 && (
          <h1 className="text-center text-2xl">No blogs found</h1>
        )}

{blogs.blogs.map((blog) => (
          <div key={blog.id} className="border-b border-gray-200 p-3">
            <h1 className="text-xl">{blog.title}</h1>
            <p className="text-gray-500">{blog.description}</p>
            <img src={blog.image} alt={blog.title} className="w-full mt-2" />
            <div className='flex gap-x-2'>
            <button 

onClick={() => deleted(blog.id)}



className="bg-red-500 text-white px-3 py-1 mt-2">Delete</button>


            <button
    
    onClick={() => onEdit(blog.id)}

            
            
            className="bg-blue-500 text-white px-3 py-1 mt-2">Edit</button>
              </div>
          
          </div>
        ))}
          
        
      </div>


    </div>
  )
}

export default App