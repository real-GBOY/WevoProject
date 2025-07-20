/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Award, Globe } from "lucide-react";

const About = () => {
	const teamMembers = [
		{
			name: "Ahmed Hassan",
			role: "Project Director",
			image:
				"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
			description:
				"Environmental Engineering student passionate about sustainable solutions.",
		},
		{
			name: "Fatima Al-Zahra",
			role: "Operations Manager",
			image:
				"https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
			description:
				"Business Administration graduate specializing in sustainable operations.",
		},
		{
			name: "Omar Mahmoud",
			role: "Technical Lead",
			image:
				"https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
			description:
				"Materials Science researcher focused on textile recycling innovations.",
		},
		{
			name: "Yasmin Ibrahim",
			role: "Community Outreach",
			image:
				"https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300",
			description:
				"Social Sciences student dedicated to community engagement and education.",
		},
	];

	const values = [
		{
			icon: Globe,
			title: "Environmental Stewardship",
			description:
				"We are committed to protecting our planet by transforming waste into valuable resources.",
		},
		{
			icon: Users,
			title: "Community Impact",
			description:
				"Creating opportunities and raising awareness in Egyptian communities about sustainability.",
		},
		{
			icon: Award,
			title: "Innovation Excellence",
			description:
				"Pioneering new technologies and processes for textile waste transformation.",
		},
		{
			icon: Heart,
			title: "Social Responsibility",
			description:
				"Building a more equitable future through sustainable business practices.",
		},
	];

	return (
		<div className='pt-16'>
			{/* Hero Section */}
			<section className='bg-gradient-to-r from-emerald-purple-600 to-emerald-purple-700 text-white py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-center'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6'>
							About Weavolution
						</h1>
						<p className='text-xl md:text-2xl text-emerald-purple-100 max-w-3xl mx-auto'>
							An Enactus project transforming Egypt's textile waste crisis into
							sustainable opportunities for communities and the environment.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='space-y-8'>
							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0'>
									<Target className='h-8 w-8 text-emerald-purple-600' />
								</div>
								<div>
									<h2 className='text-3xl font-bold text-gray-900 mb-4'>
										Our Mission
									</h2>
									<p className='text-lg text-gray-600 leading-relaxed'>
										To tackle Egypt's growing textile waste problem by
										transforming discarded fabrics into eco-friendly products,
										creating sustainable solutions that benefit both the
										environment and local communities while promoting circular
										economy practices.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='flex-shrink-0'>
									<Eye className='h-8 w-8 text-emerald-purple-600' />
								</div>
								<div>
									<h2 className='text-3xl font-bold text-gray-900 mb-4'>
										Our Vision
									</h2>
									<p className='text-lg text-gray-600 leading-relaxed'>
										To become the leading sustainable textile recycling
										initiative in the Middle East, inspiring a generation of
										environmentally conscious entrepreneurs and creating a model
										for circular economy implementation across developing
										nations.
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative'>
							<img
								src='https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800'
								alt='Our mission in action'
								className='w-full h-96 object-cover rounded-2xl'
							/>
							<div className='absolute inset-0 bg-emerald-purple-600 bg-opacity-20 rounded-2xl' />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Our Story
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							From university students to environmental changemakers - the
							journey of Weavolution.
						</p>
					</motion.div>

					<div className='space-y-12'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='bg-white rounded-2xl p-8 shadow-lg'>
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>
								The Problem We Discovered
							</h3>
							<p className='text-gray-600 leading-relaxed mb-6'>
								As Enactus students, we were shocked to learn that Egypt
								generates nearly 3 million tons of textile waste annually, with
								most of it ending up in landfills or polluting our environment.
								The fashion industry's linear model of "take, make, dispose" was
								creating an environmental crisis right in our backyard.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								<div className='text-center'>
									<div className='text-3xl font-bold text-red-600 mb-2'>
										3M+
									</div>
									<div className='text-gray-600'>
										Tons of textile waste per year
									</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-bold text-red-600 mb-2'>
										85%
									</div>
									<div className='text-gray-600'>Ends up in landfills</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-bold text-red-600 mb-2'>
										200
									</div>
									<div className='text-gray-600'>Years to decompose</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='bg-white rounded-2xl p-8 shadow-lg'>
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>
								Our Innovative Solution
							</h3>
							<p className='text-gray-600 leading-relaxed mb-6'>
								We developed a comprehensive recycling process that transforms
								textile waste into valuable products: 3D printing filament,
								yarn, MDF boards, and furniture. Our approach not only addresses
								environmental concerns but also creates economic opportunities
								and promotes sustainable practices throughout Egypt.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
								{[
									"3D Filament",
									"Recycled Yarn",
									"MDF Boards",
									"Eco Furniture",
								].map((product, index) => (
									<div
										key={index}
										className='bg-emerald-purple-50 rounded-lg p-4 text-center'>
										<div className='text-emerald-purple-600 font-semibold'>
											{product}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Our Values */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Our Values
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							The principles that guide everything we do at Weavolution.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{values.map((value, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-gray-50 rounded-2xl p-8 hover:bg-emerald-purple-50 transition-colors group'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										<div className='w-12 h-12 bg-emerald-purple-100 rounded-full flex items-center justify-center group-hover:bg-emerald-purple-200 transition-colors'>
											<value.icon className='h-6 w-6 text-emerald-purple-600' />
										</div>
									</div>
									<div>
										<h3 className='text-xl font-semibold text-gray-900 mb-2'>
											{value.title}
										</h3>
										<p className='text-gray-600 leading-relaxed'>
											{value.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Our Team */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Meet Our Team
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							Passionate students and young professionals dedicated to creating
							positive environmental and social impact.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
								<div className='aspect-square overflow-hidden'>
									<img
										src={member.image}
										alt={member.name}
										className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
									/>
								</div>
								<div className='p-6 text-center'>
									<h3 className='text-xl font-semibold text-gray-900 mb-1'>
										{member.name}
									</h3>
									<p className='text-emerald-purple-600 font-medium mb-3'>
										{member.role}
									</p>
									<p className='text-gray-600 text-sm leading-relaxed'>
										{member.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-20 bg-gradient-to-r from-emerald-purple-600 to-emerald-purple-700 text-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Join Our Mission
						</h2>
						<p className='text-xl text-emerald-purple-100 mb-8 max-w-3xl mx-auto'>
							Be part of Egypt's sustainable future. Whether as a partner,
							customer, or supporter, you can help us create positive change.
						</p>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<motion.a
								href='/partner'
								whileHover={{ scale: 1.05 }}
								className='bg-white text-emerald-purple-700 hover:bg-emerald-purple-50 px-8 py-3 rounded-full font-semibold text-lg transition-colors'>
								Partner With Us
							</motion.a>
							<motion.a
								href='/contact'
								whileHover={{ scale: 1.05 }}
								className='border-2 border-white text-white hover:bg-white hover:text-emerald-purple-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors'>
								Get in Touch
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default About;
