import React from 'react';
import { useNavigate } from 'react-router-dom';
import Home1 from '../images/home.webp'
const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/customizeThali');
    };

    return (

        <div style={{textAlign:"center"}} >

            <h1 >
                Dear Customer, Welcome to our website!
            </h1>

            <p >
                “We welcome you to a delicious feast of exquisite dishes in our restaurant.
                With a wide range of dishes to choose from, <br />we guarantee you
                a sumptuous feast experience in our restaurant.”
            </p>

              <div style={{ marginLeft:"190px"}}>
              <img src={Home1} className='d-block mx-auto' alt='thali' width={"700rem"} height={"300rem"} />
              </div>

            <div style={{textAlign:"center", backgroundColor:"lightgreen"}}>
            <button  style={{backgroundColor:"green", color:"white", width:"150px", height:"40px",borderRadius:"8px", fontWeight:"800", marginTop:"20px"}}onClick={handleNavigate}> Create Order </button>
            <p  style={{color:"darkpink",fontWeight:"900"}}>Have a Nice Day!</p>
            </div>
        </div>

    );

};


export default Home;