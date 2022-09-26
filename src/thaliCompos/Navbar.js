import React from 'react';
import { Link } from 'react-router-dom';
import  Logo from '../images/logo.png'

const Navbar = () => {

    return (

        <nav >
            <div style={{display:"flex", justifyContent:"center", backgroundColor:"darkblue",color:"white", fontWeight:"800", height:"150px"}}> 
            <img src= {Logo} alt="logo" height={"100px"}  />

                <h1 > Thali Building App</h1>
                {/* <div style={{}}> */}
                    <Link  to='/'> <h1  style={{ color:"white", fontWeight:"500",padding:"30px"}}>Home</h1></Link>
                    <Link to='/customizeThali'><h1 style={{color:"white", fontWeight:"500",padding:"30px"}}>Customize Your Thali</h1></Link>
                    <Link  to='/checkout'><h1 style={{color:"white", fontWeight:"500",padding:"30px",textDecoration:"none"}}>Checkout</h1> </Link>

                {/* </div> */}

            </div>

        </nav>

    );

};

export default Navbar;