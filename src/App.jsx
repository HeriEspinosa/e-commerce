import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import RegisterPage from './pages/RegisterPage'
import { getAllProductsThunk } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
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

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/purchase' element={<PurchasesPage />}></Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
