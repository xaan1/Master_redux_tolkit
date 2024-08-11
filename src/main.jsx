import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import NewBook from './pages/NewBook.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import OneProduct from './pages/OneProduct.jsx'
import Cart from './pages/Cart.jsx'
import Profile from './pages/Profile.jsx'


const router =  createBrowserRouter([


  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>,
        index : true
      },
      {
        path : "/OneProduct/:id",
        element : <OneProduct/>,
       
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/profile",
        element : <Profile/>,
      },
      
      {
        path : "/cart",
        element : <Cart/>,
      },
      {
        path : "/new",
        element : <NewBook/>,
      },
      {
        path : "/login",
        element : <Login/>,
      },
      {
        path : "/signup",
        element : <Signup/>,
      }

    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
 

  




   

     `  
   
   



    
  </StrictMode>,
)
