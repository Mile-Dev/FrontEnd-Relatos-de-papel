import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = ({ cart = [] }) => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/books">
          <img
            src={logo}
            alt="Relatos de Papel Logo"
            style={{ width: '100px', height: 'auto', filter: 'invert(1)', }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Carrito
                {totalItems > 0 && (
                  <span className="badge bg-danger ms-1">{totalItems}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                💳 Proceso de Pago
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
