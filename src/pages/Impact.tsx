/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
	TreePine,
	Droplets,
	Factory,
	Users,
	Globe,
	Recycle,
	Award,
	TrendingUp,
} from "lucide-react";

const Impact = () => {
	const impactStats = [
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
		{
			icon: Globe,
			number: "3M+",
			label: "Tons Recycled",
			description: "Total textile waste diverted from landfills",
			color: "text-indigo-600",
			bgColor: "bg-indigo-100",
		},
		{
			icon: Recycle,
			number: "95%",
			label: "Waste Reduction",
			description: "Reduction in textile waste sent to landfills",
			color: "text-teal-600",
			bgColor: "bg-teal-100",
		},
	];

	const milestones = [
		{
			year: "2022",
			title: "Project Launch",
			description:
				"Weavolution was founded as an Enactus project to tackle Egypt's textile waste crisis.",
			icon: Award,
		},
		{
			year: "2023",
			title: "First Production",
			description:
				"Successfully produced our first batch of recycled 3D printing filament.",
			icon: Factory,
		},
		{
			year: "2023",
			title: "Partnership Growth",
			description:
				"Established partnerships with 50+ textile manufacturers across Egypt.",
			icon: Users,
		},
		{
			year: "2024",
			title: "Scale Up",
			description:
				"Expanded operations to process 3 million tons of textile waste annually.",
			icon: TrendingUp,
		},
	];

	return (
		<div className='pt-16'>
			{/* Hero Section */}
			<section className='bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-center'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6'>
							Our Environmental Impact
						</h1>
						<p className='text-xl md:text-2xl text-green-100 max-w-3xl mx-auto'>
							Measuring our positive contribution to Egypt's environment and
							communities through sustainable textile recycling.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Impact Statistics */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Making a Real Difference
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Every piece of textile waste we process creates measurable
							positive impact on our planet and communities.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{impactStats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='text-center group'>
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
										className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>
										{stat.number}
									</motion.div>

									<h3 className='text-xl font-semibold text-gray-800 mb-2'>
										{stat.label}
									</h3>

									<p className='text-gray-600 text-sm leading-relaxed'>
										{stat.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Environmental Benefits */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div>
							<motion.div
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}>
								<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
									Environmental Benefits
								</h2>
								<p className='text-lg text-gray-600 mb-6'>
									Our textile recycling process creates significant
									environmental benefits compared to traditional disposal
									methods.
								</p>

								<div className='space-y-4'>
									{[
										"Reduces landfill waste by 95%",
										"Saves 2.5 million liters of water annually",
										"Prevents 50,000 tons of CO2 emissions",
										"Preserves natural resources for future generations",
										"Creates sustainable alternatives to virgin materials",
									].map((benefit, index) => (
										<div key={index} className='flex items-center space-x-3'>
											<div className='w-2 h-2 bg-green-600 rounded-full' />
											<span className='text-gray-700'>{benefit}</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative'>
							<img
								src='https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800'
								alt='Environmental impact'
								className='w-full h-64 object-cover rounded-2xl'
							/>
							<div className='absolute inset-0 bg-green-600 bg-opacity-20 rounded-2xl' />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Journey Timeline */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Our Journey
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							From a university project to a leading sustainable manufacturing
							initiative in Egypt.
						</p>
					</motion.div>

					<div className='relative'>
						{/* Timeline line */}
						<div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-green-200 h-full' />

						<div className='space-y-12'>
							{milestones.map((milestone, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 }}
									className={`flex items-center ${
										index % 2 === 0 ? "flex-row" : "flex-row-reverse"
									}`}>
									<div
										className={`w-1/2 ${
											index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
										}`}>
										<div className='bg-white p-6 rounded-xl shadow-lg'>
											<div className='text-green-600 font-bold text-lg mb-2'>
												{milestone.year}
											</div>
											<h3 className='text-xl font-semibold text-gray-900 mb-2'>
												{milestone.title}
											</h3>
											<p className='text-gray-600'>{milestone.description}</p>
										</div>
									</div>

									<div className='relative z-10 flex items-center justify-center w-12 h-12 bg-green-600 rounded-full'>
										<milestone.icon className='h-6 w-6 text-white' />
									</div>

									<div className='w-1/2' />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Be Part of the Solution
						</h2>
						<p className='text-xl text-green-100 mb-8 max-w-3xl mx-auto'>
							Join us in creating a more sustainable future for Egypt. Every
							partnership, every purchase, every action counts.
						</p>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<motion.a
								href='/partner'
								whileHover={{ scale: 1.05 }}
								className='bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-semibold text-lg transition-colors'>
								Partner With Us
							</motion.a>
							<motion.a
								href='/contact'
								whileHover={{ scale: 1.05 }}
								className='border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors'>
								Learn More
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Impact;
