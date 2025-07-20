/** @format */

import React from "react";
import { motion } from "framer-motion";
import { TreePine, Droplets, Factory, Users } from "lucide-react";

const ImpactStats = () => {
	const stats = [
		{
			icon: TreePine,
			number: "50,000",
			label: "Trees Saved",
			description: "Equivalent trees saved through our recycling process",
			color: "text-emerald-purple-600",
			bgColor: "bg-emerald-purple-100",
		},
		{
			icon: Droplets,
			number: "2.5M",
			label: "Liters Water Saved",
			description: "Water conservation through textile recycling",
			color: "text-blue-600",
			bgColor: "bg-blue-100",
		},
		{
			icon: Factory,
			number: "75%",
			label: "CO2 Reduction",
			description: "Carbon footprint reduction compared to new production",
			color: "text-purple-600",
			bgColor: "bg-purple-100",
		},
		{
			icon: Users,
			number: "200+",
			label: "Jobs Created",
			description: "Employment opportunities in sustainable manufacturing",
			color: "text-orange-600",
			bgColor: "bg-orange-100",
		},
	];

	return (
		<section className='py-20 bg-gradient-to-b from-white via-emerald-50 to-emerald-100'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-emerald-900 mb-4'>
						Our Environmental Impact
					</h2>
					<p className='text-xl text-emerald-800 max-w-3xl mx-auto'>
						Every piece of textile waste we recycle creates a positive ripple
						effect on our environment and communities.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='text-center group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
							<div className='relative'>
								<div
									className={`inline-flex items-center justify-center w-20 h-20 ${stat.bgColor} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<stat.icon className={`h-10 w-10 ${stat.color}`} />
								</div>

								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: index * 0.2,
										type: "spring",
										stiffness: 100,
									}}
									className='text-4xl md:text-5xl font-bold text-emerald-900 mb-2'>
									{stat.number}
								</motion.div>

								<h3 className='text-xl font-semibold text-emerald-800 mb-2'>
									{stat.label}
								</h3>

								<p className='text-emerald-700 text-sm leading-relaxed'>
									{stat.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Impact Visualization */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mt-16 bg-gradient-to-r from-emerald-500/10 via-emerald-400/10 to-emerald-300/10 rounded-2xl p-8 text-center backdrop-blur-sm'>
					<h3 className='text-2xl font-bold text-emerald-900 mb-4'>
						Together, We're Making a Difference
					</h3>
					<p className='text-emerald-800 max-w-2xl mx-auto'>
						Join thousands of partners and customers who are already part of the
						sustainable revolution. Every purchase supports Egypt's circular
						economy and environmental protection.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default ImpactStats;
