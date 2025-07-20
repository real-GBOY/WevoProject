/** @format */

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Recycle } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "Products", path: "/products" },
		{ name: "Impact", path: "/impact" },
		{ name: "Partner", path: "/partner" },
		{ name: "About", path: "/about" },
		{ name: "Campaigns", path: "/campaigns" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className='fixed w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<Link to='/' className='flex items-center space-x-2'>
						<Recycle className='h-8 w-8 text-emerald-purple-600' />
						<span className='text-xl font-bold text-gray-900'>Weavolution</span>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								className={`relative px-3 py-2 text-sm font-medium transition-colors ${
									location.pathname === item.path
										? "text-emerald-purple-600"
										: "text-gray-700 hover:text-emerald-purple-600"
								}`}>
								{item.name}
								{location.pathname === item.path && (
									<motion.div
										layoutId='navbar-indicator'
										className='absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-purple-600'
									/>
								)}
							</Link>
						))}
					</div>

					{/* Mobile menu button */}
					<div className='md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors'>
							{isOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-white/90 backdrop-blur-md rounded-lg shadow-lg mt-2 py-4'>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								onClick={() => setIsOpen(false)}
								className={`block px-4 py-2 text-sm font-medium transition-colors ${
									location.pathname === item.path
										? "text-emerald-purple-600 bg-emerald-purple-50"
										: "text-gray-700 hover:text-emerald-purple-600 hover:bg-emerald-purple-50"
								}`}>
								{item.name}
							</Link>
						))}
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;
