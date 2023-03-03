import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import Login from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import RegisterPage from './pages/RegisterPage'
import { getCartThunk } from './store/slices/cart.slice'
import { getAllProductsThunk } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/product/:id' element={<ProductPage />}></Route>
        <Route path='/user'>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='login' element={<Login />}></Route>
        </Route>

        {/* Protected Routes*/}
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/purchase' element={<PurchasesPage />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div >
  )
}

export default App
