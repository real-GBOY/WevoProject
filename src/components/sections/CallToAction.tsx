/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const CallToAction = () => {
	return (
		<section className='py-20 bg-gradient-to-b from-primary-100 via-primary-600 to-primary-800 relative overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-10'>
				<svg
					className='w-full h-full'
					viewBox='0 0 100 100'
					preserveAspectRatio='none'>
					<defs>
						<pattern
							id='grid'
							width='10'
							height='10'
							patternUnits='userSpaceOnUse'>
							<path
								d='M 10 0 L 0 0 0 10'
								fill='none'
								stroke='white'
								strokeWidth='0.5'
							/>
						</pattern>
					</defs>
					<rect width='100' height='100' fill='url(#grid)' />
				</svg>
			</div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='max-w-4xl mx-auto'>
					<motion.div
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
						className='hidden md:inline-flex items-center justify-center w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full mb-6 transition-colors duration-300'>
						<Heart className='h-8 w-8 text-white' />
					</motion.div>

					<h2 className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'>
						Ready to Join the
						<span className='block text-primary-800'>
							Sustainable Revolution?
						</span>
					</h2>

					<p className='text-xl text-white mb-8 leading-relaxed'>
						Partner with us to transform textile waste into opportunity.
						Together, we can create a cleaner, more sustainable future for Egypt
						and beyond.
					</p>

					<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/partner'
								className='group bg-white text-primary-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all shadow-lg'>
								<span>Become a Partner</span>
								<ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
							</Link>
						</motion.div>

						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/contact'
								className='group bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transition-all'>
								<span>Get in Touch</span>
								<ArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform' />
							</Link>
						</motion.div>
					</div>
				</motion.div>

				{/* Floating Elements */}
				<div
					className='hidden lg:block absolute top-10 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full animate-bounce'
					style={{ animationDelay: "0s" }}
				/>
				<div
					className='hidden lg:block absolute bottom-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-bounce'
					style={{ animationDelay: "1s" }}
				/>
				<div
					className='hidden lg:block absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full animate-bounce'
					style={{ animationDelay: "2s" }}
				/>
			</div>
		</section>
	);
};

export default CallToAction;
