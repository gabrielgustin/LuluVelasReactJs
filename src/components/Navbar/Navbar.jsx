
import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

const NavBar = () => {

  const navigate = useNavigate()

  const { totalQuantity } = useContext(CartContext)

  return (
    <nav className="NavBar" >
          <h3 onClick={() => navigate('/')}>LuluVelas</h3>
        <div className="Categories">
          <NavLink to={`/category/Velas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Velas</NavLink>
          <NavLink to={`/category/Difusores`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Difusores</NavLink>
        </div>
        <CartWidget totalQuantity={totalQuantity}/>
    </nav>
  )
}

export default NavBar