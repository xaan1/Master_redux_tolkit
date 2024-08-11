
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { delteBook, setCurrentEdit } from '../store/BooKslice'

import { Link } from 'react-router-dom'

const SelfBook = ({book}) => {
    console.log(book)


    const naviagete = useNavigate()

    const edit =  useSelector(state => state.book.CurrentEdit)
    console.log(edit)
    const dispatch =  useDispatch()

    function deleteBookid(id) {
        console.log(id)

        if(!confirm('Are you sure you want to delete this book?')) {
            return
        }
       
        dispatch(delteBook(id))
    }


    function onEdit(id) {
      dispatch(setCurrentEdit(id))
      naviagete("/new")

    }


    
  const {CarrentUser
  } = useSelector((state) => state.auth.auth);

  const { Book } = useSelector((state) => state.book);
   
    return (
      <>
{/* 
        // <Link to={`/OneProduct/${book.id}`}> */}
            {
                book.length === 0 ? <div>loading...</div> : null
            }
          <div className="group hover:shadow-sm transition rounded-lg overflow-hidden cursor-pointer border p-3 h-full">
            <div className="relative w-full aspect-video rounded-md overflow-hidden ">
              <Link to={`/OneProduct/${book.id}`}>
           
               <img src={book.imagUrl} />
               </Link>

            </div>
            <div className="flex flex-col pt-2">
              <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                {book.title}
              </div>
              <p className="text-xs text-muted-foreground">{book.content}</p>
              <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <p className="text-xs text-muted-foreground">{book.price}</p>
          
                
              </div>
           

            
    
    
    
            
            
    
    
              
            </div>
            


{  CarrentUser &&
    CarrentUser.username === book.author ? (
      <>
       
       <div className='flex gap-x-2'>
                <button

                onClick={() => onEdit(book.id)}
                
                className='bg-sky-700 text-white py-1 px-2 rounded-md'>Edit</button>
                <button

   onClick={() => deleteBookid(book.id)}
                // onClick={deleteBookid(book.id)}
                
                className='bg-sky-700 text-white py-1 px-2 rounded-md'>Delete</button>
            </div>
      </>
    )  : 
    (
      <>
      {/* button addtocart */}

      <Link to={`/OneProduct/${book.id}`} ><button className='bg-sky-700 text-white py-1 px-2 rounded-md'>Add to cart</button></Link>
      </>
    )
}
           
          </div>
          </>
       
      )
}

export default SelfBook