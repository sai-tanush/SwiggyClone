import { useState } from 'react'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom';
export default function Navbar(){
	const [log, setLog] = useState("LogIn");

	function handleClick(){
		log === "LogIn" ? setLog("LogOut") : setLog("LogIn");
	}
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
				<li className="md:px-4 md:py-2 hover:text-orange-500">
				Cart</li>
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
		</div>
	</div>
</nav>


        </>
    )
}

