import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice";
import BillDetails from "./BillDetails"

export default function Cart(){
    
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    function handleClearCart(){
        dispatch(clearCart());
    }    
    return(
        <>
            <div className="w-6/12 min-h-screen flex flex-col mx-auto bg-slate-200">
                <h1 className="text-3xl font-bold mt-2 mb-5 mx-auto">Cart</h1>
                {cartItems.length > 0 && <div>
                <button type="button" 
                className="text-red-700 w-[10rem] hover:text-white border border-red-700 hover:bg-red-800 
                 font-medium rounded-lg text-sm px-5 py-2.5 ml-[40%] text-center me-2 mb-2 dark:border-red-500
                 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={handleClearCart} 
                 >
                Clear Cart</button>
                <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} info={item} />
                ))}
                </div>
                
                    <div className="ml-[7rem]">
                        <div>
                            <input type="text" className="bg-gray-100 border m-4 border-gray-600 text-gray-700
                            text-md rounded-lg block w-3/4 p-2.5" 
                            placeholder="Any Suggestion? We'll pass it on..."  />
                        </div>
                        <div>
                            <input type="text" className="relative bg-gray-100 border mx-4 border-gray-600 text-gray-700
                            text-md rounded-lg block w-3/4 p-2.5"  
                            placeholder="Apply Coupon"  />
                        </div>
                    </div>
                    <BillDetails details={cartItems} />

                </div>}
                                
                
                 
                
            </div>
        </>
    )
}