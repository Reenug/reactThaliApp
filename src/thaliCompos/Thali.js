import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCheckedItems } from '../ReduxForThali/thaliSlice';
import ItemThali from './itemThali';


const Thali = () => {

    const dispatch = useDispatch();
    const initialData = useSelector((state) => state.checkout.initialData);
    const checkedItems = useSelector((state) => state.checkout.checkedItems);
    const navigate = useNavigate();
    const [warning, setWarning] = useState(false);


    useEffect(() => {
        dispatch(clearCheckedItems());
    }, [dispatch]);
    const handleCheckout = () => {

        if (checkedItems.length < 2) {
            setWarning(true);
        }
        else {
            setWarning(false);
            navigate('/checkout');
        }
    };

    return (

        <div style={{backgroundImage:"linear-gradient(lightblue,grey)", padding:"50px"}} >
            <h3 > Dear Customer, Customize Your Thali !</h3>
            <div style={{backgroundColor:"pink", padding:"10px",display:"flex", flexWrap:"wrap"}}>
            <h2>Selected items</h2>
                {    
                    checkedItems.map((item, index) => {
                        return ( <>
                            <h2 style={{color:"green", padding:"15px"}} key={index}>{item.itemName}</h2>
                             <img
                                key={index}
                                src={item.itemImage}
                                alt={item.itemName}
                                width='180px'
                                height='180px'
                            />
                            </>
                        );
                    })
                }
            </div>
            <div  style={{display:"flex"}}>
                {initialData.map((item, index) =>
                    <ItemThali key={index} item={item} />
                )}
            </div>
            {
                warning ?
                    <div style={{color:"red"}}>
                        <h4 className='m-0 text-center'>Please select minimum two items before checkout</h4>
                    </div>
                    :
                    null
            }
            <button style={{backgroundColor:"blue", color:"white", width:"150px", height:"40px",borderRadius:"8px", fontWeight:"800", marginTop:"20px"}}
                onClick={handleCheckout}>Checkout</button>

        </div>

    );

};


export default Thali;