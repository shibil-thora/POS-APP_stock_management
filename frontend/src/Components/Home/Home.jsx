import React, { useEffect, useState } from 'react'
import { getProductList } from '../../ApiServices/services'
import Sale from '../Sale/Sale'

function Home() { 

    const [showSaleInput, setShowSaleInput] = useState(false); 
    const [showHome, setShowHome] = useState(true); 

    useEffect(() => {
        getProductList().then((res) => {
            console.log(res)
        })
    }, [])  

    function backToNorm() {
      setShowHome(false); 
      setShowSaleInput(false); 
    }
    


  return ( 
    <>
    {showHome && 
    <div className="flex sm:flex-row flex-col h-96 ">
       
        <button 
        onClick={() => {
          backToNorm() 
          setShowSaleInput(true); 
        }}
        className="h-1/3 w-52 text-xl text-gray-400
        hover:bg-opacity-45 active:bg-opacity-55
        m-3 bg-opacity-50 bg-pink-700 rounded-sm">
        Sale <i className="fa fa-shopping-cart"></i>
        </button> 

        <button className="h-1/3 w-52 text-xl text-gray-400
        hover:bg-opacity-45 active:bg-opacity-55
        m-3 bg-opacity-50 bg-lime-700 rounded-sm">
        Purchase <i className="fa fa-store"></i>
        </button>
       
    </div> 
    } 

    {showSaleInput && 
   <Sale />
    }
    </>
  )
}

export default Home