import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, handledetedBook } from '../store/BooKslice';
import { useNavigate } from 'react-router-dom';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagUrl, setImagUrl] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const edit = useSelector((state) => state.book.CurrentEdit);
  const currentUser = useSelector((state) => state.auth.
  CarrentUser
  
);

 const {users} = useSelector((state) => state.auth)
 console.log(users[0].username);

  const { Book } = useSelector((state) => state.book);

  console.log(Book);

  const Editvalebook = Book.find((book) => book.id === edit);

  console.log(Editvalebook);

  const {CarrentUser
  } = useSelector((state) => state.auth.auth);

  console.log(CarrentUser.
    username
     , "CarrentUser");


  useEffect(() => {
    if (edit && Editvalebook) {
      setTitle(Editvalebook.title);
      setContent(Editvalebook.content);
      setImagUrl(Editvalebook.imagUrl);
      setPrice(Editvalebook.price);
    }
  }, [edit, Editvalebook]);


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, content, imagUrl, price);

    {
      edit ? (
        <>
        {
          dispatch(handledetedBook({
            id: edit,
            title,
            content,
            imagUrl,
            price,
          }))
        }

     
        </>
      )

      : 

      (
        <>
        {
          dispatch(addBook({
            id: new Date().getTime().toString(),
            author :   CarrentUser && CarrentUser?.username,
            title,
            content,
            imagUrl,
            price,
          }))
        }
        
        
        </>
      )
    }
    

    navigate('/');
    window.location.reload();

  };





  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-2 mt-10">
      <div className="flex flex-col">
        <h1 className="text-center text-2xl">
          {edit ? 'Edit Book' : 'New Book'}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              value={title}
              id="title"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <input
              type="text"
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              ImageUrl
            </label>
            <input
              value={imagUrl}
              type="text"
              onChange={(e) => setImagUrl(e.target.value)}
              name="image"
              id="image"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              id="price"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <button className="bg-blue-600 p-2 text-white rounded-sm">
            {edit ? 'Edit Book' : 'Publish'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBook;