import React, { useState } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Cart from '../Cart/Cart';
import'./navbar.css'
//import { useSelector } from "react-redux";
const Navbar = () => {
    const [open,setOpen] = useState(false)
    //const products = useSelector((state) => state.cart.products);
  return (
    <nav className="navbar">

   <a href="/" className="logo nav-link " style={{ fontSize: "1.2rem",color: "#28fe2b" }}>RUE</a>

   <div className="nav-actions justify-end">
            <div className="search-wrap">
                <button className="search-btn" aria-label="search-btn">
                    <svg className="nav-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM9.00488 11.9997H7.00488V9.99966H9.00488V11.9997ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966ZM11 18C7.1325 18 4 14.8675 4 11C4 7.1325 7.1325 4 11 4C14.8675 4 18 7.1325 18 11C18 13.124 17.263 15.0769 15.8748 16.6168L16.0247 16.7667L16.8748 17.6168L22.3137 22.8995L20.8995 24.3137L18.3137 21.7279L13.3912 16.8054C12.6482 17.4553 11.6482 17.9997 10.5 17.9997C9.83578 17.9997 9.20555 17.8027 8.64813 17.4461L8.46169 17.3163C7.48799 16.6558 6.74279 15.8333 6.29289 14.8995C6.03224 14.3811 5.98084 13.7446 6.14953 13.1595L6.29289 12.6005L6.29289 12.5995L6.29289 12.599L6.29288 12.5986L6.29288 12.5977L6.29288 12.5968L6.29288 12.5953C6.42639 12.1072 6.6942 11.6867 7.05797 11.3748L7.3069 11.1465L7.55948 10.9328C7.93464 10.656 8.3408 10.4439 8.76814 10.3155L8.88869 10.2778C9.08869 10.2195 9.29289 10.1638 9.5 10.1106V10.0997C10.0203 10.0163 10.5529 9.99966 11 9.99966C11.6482 9.99966 12.2791 10.0537 12.8842 10.1628C13.731 10.298 14.5158 10.5392 15.2202 10.8795C15.7069 11.0899 16.2079 11.3438 16.7079 11.6513C17.4463 12.0489 17.9997 12.7381 17.9997 13.4997C17.9997 15.6764 16.175 17.9997 11 17.9997Z" fill="currentColor"></path>
                    </svg>
                </button>
                <input className="search-input" type="search" placeholder="Search"/>
            </div>
            <div className='flex justify-center items-center'>
            <PermIdentityIcon />
          <a href="/login" className='text-sm' >LOGIN</a>  
            </div>
          {/*Cart number goes here <span>{products.length}</span> */}
     <a href="#" className="nav-link nav-cart">
     <span> CART (0)</span> 
                <span className="cart-icon-wrapper">
                    <svg className="nav-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.00488 7.99966V5.99966C7.00488 3.23824 9.24346 0.999664 12.0049 0.999664C14.7663 0.999664 17.0049 3.23824 17.0049 5.99966V7.99966H20.0049C20.5572 7.99966 21.0049 8.44738 21.0049 8.99966V20.9997C21.0049 21.5519 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.5519 3.00488 20.9997V8.99966C3.00488 8.44738 3.4526 7.99966 4.00488 7.99966H7.00488ZM7.00488 9.99966H5.00488V19.9997H19.0049V9.99966H17.0049V11.9997H15.0049V9.99966H9.00488V11.9997H7.00488V9.99966ZM9.00488 7.99966H15.0049V5.99966C15.0049 4.34281 13.6617 2.99966 12.0049 2.99966C10.348 2.99966 9.00488 4.34281 9.00488 5.99966V7.99966Z"></path>
                    </svg>
                </span>
            </a>
            <FavoriteBorderOutlinedIcon/>
        </div>
</nav>
  )
}

export default Navbar