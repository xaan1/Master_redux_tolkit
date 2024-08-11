import React, { useEffect } from 'react'
import Header from './components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Cart from './pages/Cart'
import Footer from './components/Footer'

const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('isLoggin')
    console.log(user)

    if (!user) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <div className='mt-20 p-3'>
      <Header />
   
      {/* <h1>app</h1> */}
      <Outlet />
      <Footer  />
    </div>
  )
}

export default App
