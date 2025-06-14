/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Users, Globe, TrendingUp } from "lucide-react";
import Hero from "../components/sections/Hero";
import ProductShowcase from "../components/sections/ProductShowcase";
import ImpactStats from "../components/sections/ImpactStats";
import CallToAction from "../components/sections/CallToAction";
import Impact from "./Impact";
import ImpactSection from "../components/sections/ImpactSection";

const Home = () => {
	const features = [
		{
			icon: Recycle,
			title: "Sustainable Recycling",
			description:
				"Converting 3 million tons of textile waste into valuable products",
		},
		{
			icon: Globe,
			title: "Environmental Impact",
			description:
				"Reducing landfill waste and promoting circular economy practices",
		},
		{
			icon: Users,
			title: "Community Engagement",
			description:
				"Creating jobs and raising awareness about sustainable practices",
		},
		{
			icon: TrendingUp,
			title: "Innovation",
			description:
				"Pioneering new technologies for textile waste transformation",
		},
	];

	return (
		<div className='pt-16'>
			<Hero />
			{/* Impact section */}
			<ImpactSection />
			{/* Features Section */}
			<section className='py-20 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Why Choose Weavolution?
						</h2>
						<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
							We're transforming textile waste into opportunity, creating
							sustainable solutions for Egypt's environmental challenges.
						</p>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors group'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors'>
									<feature.icon className='h-8 w-8 text-green-600' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-600'>{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<ProductShowcase />
			<ImpactStats />
			<CallToAction />
		</div>
	);
};

export default Home;
