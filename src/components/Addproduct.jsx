
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlog, handleChangeInput, handleEditblog } from '../store/blogSlice'


const Addproduct = () => {

    const blogs = useSelector(state => state.blog)

    // console.log(blogs)
  
    const formData  =  useSelector(state => state.blog.formData)
    console.log(formData) 


       const dispatch =  useDispatch()


    function handlechange(e) {

        dispatch(handleChangeInput({


            [e.target.id] : e.target.value
        }))



    }



    function handlesubmit(e) {
            
            e.preventDefault()

    

            if(blogs.currentEdit !== null){
              dispatch(handleEditblog())
            } else {

                          
            dispatch(addBlog())

            }
            


            dispatch(handleChangeInput({
                title : "",
                description : "",
                image : ""
            }))


            // window.location.reload()
    
           
    }

   
  return (
    <div className='max-w-lg mx-auto bg-white shadow-md p-2 mt-10'>

        <h1  className='text-center text-2xl'>Add Blog</h1>

        <form 
          onSubmit={handlesubmit}
        
        
         className='mt-5'>
            <div className='mb-5'>
                <label htmlFor='title' className='block text-sm mb-2'>title</label>
                <input 
                value={formData.title}
                  
                  onChange={handlechange}
                
                
                type='text' id='title' className='w-full p-2 border border-gray-200 rounded' />
            </div>

            <div className='mb-5'>
                <label htmlFor='description' className='block text-sm mb-2'>description</label>
                <textarea
                value={formData.description}
                onChange={handlechange}
                
                
                type='description' id='description' className='w-full p-2 border border-gray-200 rounded' />
            </div>

           
            <div className='mb-5'>
                <label htmlFor='image' className='block text-sm mb-2'>image</label>
                <input
                value={formData.image}
                   onChange={handlechange}
               
                
                id='image' className='w-full p-2 border border-gray-200 rounded'></input>
            </div>


            <button className='bg-blue-500 text-white p-2 rounded'>
                  {
                    blogs.currentEdit
                    ? "Update" : "Published"
                  }
                
                </button>
        </form>

    </div>
  )
}

export default Addproduct