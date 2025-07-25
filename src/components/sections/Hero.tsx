/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Background Image with Gradient Overlay */}
			<div className='absolute inset-0 z-0'>
				<div
					className='w-full h-full'
					style={{
						backgroundImage:
							'url("https://i.postimg.cc/R03t6kP5/Cover-Solid-Gedan.png")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundAttachment: "fixed",
					}}
				/>
				<div className='absolute inset-0 bg-primary/90 backdrop-blur-sm'></div>
			</div>

			{/* Content */}
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-relaxed'>
						Transforming Textile Waste
						<span className='text-secondary block'>Into Opportunity</span>
					</h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className='text-white text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed'>
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
							className='group bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all transform hover:scale-105'>
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
						{ number: "100+", label: "Tons of Waste Recycled" },
						{ number: "4+", label: "Products Created" },
						{ number: "15+", label: "Partners Joined" },
					].map((stat, index) => (
						<div
							key={index}
							className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
							<div className='text-3xl md:text-4xl font-bold text-secondary mb-2'>
								{stat.number}
							</div>
							<div className='text-white text-sm md:text-base'>
								{stat.label}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Scroll Indicator (optional) */}
		</section>
	);
};

export default Hero;
