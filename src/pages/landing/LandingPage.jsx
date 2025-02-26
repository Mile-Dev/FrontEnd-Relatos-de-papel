import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
import { motion } from 'framer-motion'
import logo from '../../assets/images/logo.png'
const LandingPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/books')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="text">
      <h1>Bienvenido</h1>
      <p>Redirigiendo en 5 segundos...</p>
      <motion.img
        src={logo}
        alt="Relatos de Papel Logo"
        className="logo"
        animate={{
          rotateY: [0, 20, -20, 0]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      />
    </div>
  )
}

export default LandingPage
