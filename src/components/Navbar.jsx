import { useContext, useState } from 'react'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

export default function Navbar(){
	const [log, setLog] = useState("LogIn");

	//displaying user using useContext
	const {loggedInUser} = useContext(UserContext);
	

	function handleClick(){
		log === "LogIn" ? setLog("LogOut") : setLog("LogIn");
	}

	//Subscribing to the store using a selector which is a react-hook
	const cartItems = useSelector((store) => store.cart.items);

    return (
        <>
        <nav className="w-full h-[5rem] px-8 md:px-auto h-500 bg-white hadow-3xl">
	<div className="md:h-16 h-28 mt-2 md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
		<div className="text-orange-500 md:order-1">		
		</div>
		<Link to="/">
			<img src={logoImg} alt='logo' className="h-[50px] ml-[10rem]" />
		</Link>	
		<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
			<ul className="flex font-semibold justify-between">
			<Link to="/swiggycorporate">
				<li className="md:px-4 md:py-2 hover:text-orange-500">
				Swiggy Corporate</li>
			</Link>
			<Link to="/offers">
				<li className="md:px-4 md:py-2 hover:text-orange-500">
				Offers</li>
			</Link>
			<Link to="/about">
				<li className="md:px-4 md:py-2 hover:text-orange-500">
				About</li>
			</Link>
			<Link to="/help">
				<li className="md:px-4 md:py-2 hover:text-orange-500">
				Help</li>
			</Link>
			<Link to="/cart">
			<div className='flex '>
				{cartItems.length > 0 ?<div className='flex gap-4 text-lg font-bold'><svg className="h-8 w-8 text-black-500 mr-[-1rem]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  					<path  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
				</svg>
				({cartItems.length})</div> : <li className="md:px-4 md:py-2 font-bold hover:text-orange-500">
					Cart ({cartItems.length})
				</li> }
				{console.log("Cart Items = ", cartItems)}			
			</div>				
				
			</Link>
			</ul>
		</div>
		<div className="order-2 md:order-3 flex gap-4 ml-[-16rem]">
			<button className="px-4 py-2 bg-orange-500 hover:border hover:border-black text-gray-50 rounded-xl 
			flex items-center gap-2"
			onClick={handleClick}>
                <span>{log}</span>
            </button>
			{log === "LogIn"?<button className="px-4 py-2 bg-orange-500 hover:border hover:border-black text-gray-50 rounded-xl 
			flex items-center gap-2">
                <span>SignUp</span>
            </button>
			 : null}
			 <div className='mt-2'>
			 {log === "LogOut" ? <p className='text-md'>User:
				<span className="text-lg font-bold text-sky-600 ml-2">{loggedInUser}</span></p> : null} 
			 </div> 
			           
		</div>
		
	</div>
</nav>


        </>
    )
}

