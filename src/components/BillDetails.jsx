//import { useState } from "react"
import { DELIVERY_FEE, DELIVERY_TIP, EXTRA_DISCOUNT, PLATFORM_FEE } from "../utils/constants";

export default function BillDetails({details}){

    const totalPrice = details.reduce((acc, item) => acc + (item.defaultPrice|| item.price)/100, 0) 

    console.log("Details inside BillDetails = ", details);

    const GST = totalPrice * 0.15 + 12;
    const totalBill = totalPrice + DELIVERY_FEE + DELIVERY_TIP - EXTRA_DISCOUNT + PLATFORM_FEE + GST;   
    

    return(
        <>
            <div className="w-1/2 h-auto mt-5 flex mx-auto bg-white border-2 border-gray-500 rounded-2xl">
                <div className="flex flex-col">
                    <p className="ml-4 mt-4 text-lg font-bold ">Bill Details</p>
                    <div className="ml-4 mt-2 flex">
                        <p>Item Total:</p>
                        <p className="ml-[14rem]">₹{totalPrice}</p>
                    </div>
                    <div className="ml-4 mt-2 flex">
                        <p>Delivery Fee:</p>
                        <p className="ml-[13rem]">₹{DELIVERY_FEE}</p>
                    </div>
                    <div className="ml-4 mt-2 flex">
                        <p>Extra Discount:</p>
                        <p className="ml-[11.5rem] text-green-600">-₹{EXTRA_DISCOUNT}</p>
                    </div>
                    <div className="ml-4 mt-2 flex">
                        <p>Delivery Tip:</p>
                        <p className="ml-[13rem]">₹{DELIVERY_TIP}</p>
                    </div>
                    <div className="ml-4 mt-2 flex">
                        <p>Platform Fee:</p>
                        <p className="ml-[13rem]">₹{PLATFORM_FEE}</p>
                    </div>  
                    <div className="ml-4 mt-2 flex">
                        <p className="text-sm">GST & Restaurant Charges:</p>
                        <p className="ml-[8rem]">₹{GST}</p>
                    </div>
                    <div className="w-[21rem] ml-4 mt-3 h-[2px] bg-black"></div>
                    <div className="ml-6 mt-2 mb-6 flex">
                        <p className="text-lg font-bold">TO PAY:</p>
                        <p className="ml-[13rem] text-blue-700 text-lg font-bold">₹{totalBill}</p>
                    </div>
                </div>
            </div>
        </>
        
    )
}