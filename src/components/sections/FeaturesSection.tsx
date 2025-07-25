/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Recycle, Leaf, Users, Globe } from "lucide-react";

// Features data
const features = [
	{
		icon: Recycle,
		title: "Waste Transformation",
		description:
			"Converting textile waste into valuable resources through innovative recycling processes and sustainable practices.",
	},
	{
		icon: Leaf,
		title: "Environmental Impact",
		description:
			"Reducing environmental footprint by diverting textile waste from landfills and creating eco-friendly solutions.",
	},
	{
		icon: Users,
		title: "Community Engagement",
		description:
			"Empowering local communities through job creation and sustainable development initiatives.",
	},
	{
		icon: Globe,
		title: "Global Sustainability",
		description:
			"Contributing to worldwide sustainability goals while addressing Egypt's unique environmental challenges.",
	},
];

interface FeaturesSectionProps {
	backgroundImage?: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
	backgroundImage = "https://i.postimg.cc/KjCPs9kg/Whats-App-Image-2025-07-20-at-19-19-34-21f357db.jpg",
}) => {
	const sectionStyle = backgroundImage
		? {
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "fixed",
		  }
		: {};

	return (
		<section className='py-20 bg-white' style={sectionStyle}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
						Why Choose Weavolution?
					</h2>
					<p className='text-xl text-white max-w-3xl mx-auto'>
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
							className='text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors group'>
							<div className='inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors'>
								<feature.icon className='h-8 w-8 text-primary-600' />
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
	);
};

export default FeaturesSection;
