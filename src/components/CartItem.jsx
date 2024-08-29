import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

export default function CartItem({ info }) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function handleAddItemQuantity(e) {
    e.preventDefault();
    setItemQuantity(itemQuantity + 1);
  }

  function handleReduceItemQuantity(e) {
    e.preventDefault();
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    } else {
      setItemQuantity(0);
    }
  }

  function handleRemoveItem(){
    console.log("handleRemoveItem called!");
    dispatch(removeItem(info));
    console.log("CartItems = ", cartItems);
  }

  return (
    <div className="relative m-4 flex gap-4 h-auto w-11/12 bg-slate-100">
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex">
            <div className="ml-4 mt-4 ">
              {info.isVeg ? (
                <div className="w-[19px] h-5 mt-1 border-2 border-green-500 rounded-md">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      className="border border-black"
                    />
                     
                    <circle cx="50" cy="50" r="30" fill="green" />
                  </svg>
                </div>
              ) : (
                <div className="w-[19px] h-5 mt-1 border-2 border-red-500 rounded-md">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="15" height="15" fill="white" /> 
                    <circle cx="50" cy="50" r="30" fill="red" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <p className="ml-2 text-md font-bold my-4">{info.name}</p>
              <button
                onClick={handleReduceItemQuantity}
                className=" w-[2rem] h-[1.65rem] mt-5 text-center 
                                border border-green-600 rounded-md hover:bg-green-600"
              >
                -
              </button>
              <div className="my-4">
                <p className="text-lg font-bold mt-1">{itemQuantity}</p>
              </div>
              <button
                onClick={handleAddItemQuantity}
                className=" w-[2rem] h-[1.65rem] mt-5 text-center 
                                border border-green-600 rounded-md hover:bg-green-600"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-5 ml-3 ">
            ₹{((info.price || info.defaultPrice) / 100) * itemQuantity}
          </p>
        </div>
      </div>

      <button className="absolute right-3 mt-4" 
      onClick={handleRemoveItem}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-6 text-red-500">
          <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
}
