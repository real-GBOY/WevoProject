/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden att'>
			{/* Background Image with Gradient Overlay */}
			<div className='absolute inset-0 z-0'>
				<div
					className='w-full h-full'
					style={{
						backgroundImage:
							'url("https://images.pexels.com/photos/9324593/pexels-photo-9324593.jpeg?auto=compress&cs=tinysrgb&w=1920")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
					}}
				/>
				<div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-emerald-900/50'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
						Transforming
						<span className='text-green-400 block'>Textile Waste</span>
						Into Opportunity
					</h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
						Join us in revolutionizing Egypt's textile industry by converting 3
						million tons of waste into sustainable products for a greener
						future.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<Link
							to='/products'
							className='group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all transform hover:scale-105'>
							<span>Explore Products</span>
							<ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
						</Link>

						<button className='group bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all'>
							<Play className='h-5 w-5' />
							<span>Watch Our Story</span>
						</button>
					</motion.div>
				</motion.div>

				{/* Floating Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
					{[
						{ number: "3M+", label: "Tons of Waste Recycled" },
						{ number: "500+", label: "Products Created" },
						{ number: "100+", label: "Partners Joined" },
					].map((stat, index) => (
						<div
							key={index}
							className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
							<div className='text-3xl md:text-4xl font-bold text-green-400 mb-2'>
								{stat.number}
							</div>
							<div className='text-white text-sm md:text-base'>
								{stat.label}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.8 }}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
						className='w-1 h-3 bg-white rounded-full mt-2'
					/>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
