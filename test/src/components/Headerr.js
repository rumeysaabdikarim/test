 
import { Link } from "react-router-dom"
import {AiOutlineMenu} from "react-icons/ai"
import { useState, React } from "react"
import { AiOutlineClose } from "react-icons/ai"



function Headerr() {
   
const[isOpen, setIsOpen]= useState(false)

  const handleButton = () => {
    setIsOpen(!isOpen)
  }
  
    return <div className="headerr">
      <h1>Logo</h1>
      {isOpen ? (
        <AiOutlineMenu onClick={handleButton} className="btn" size="48px" color="blue" />

      ) : (
        <AiOutlineClose onClick={handleButton} className="btn" size="48px" color="blue" />
      )}
      <ul style={{ display: isOpen ? "none" : "flex" }}>   
      <li ><Link to="/home">Home </Link></li>
      <li><Link to="/service">Service</Link></li>
      <li><Link to="/features">Feautures</Link></li>
      <li><Link to="/blog">Blog</Link></li>
  
        </ul>
    </div>
}

export default Headerr