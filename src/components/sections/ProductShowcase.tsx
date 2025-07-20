/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductShowcase = () => {
	const products = [
		{
			id: "3d-filament",
			title: "3D Printing Filament",
			description:
				"High-quality filament made from recycled textile fibers, perfect for 3D printing projects.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			color: "from-emerald-purple-500 to-emerald-purple-600",
		},
		{
			id: "recycled-yarn",
			title: "Recycled Yarn",
			description:
				"Soft, durable yarn crafted from upcycled textiles for sustainable fashion and crafts.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			color: "from-emerald-purple-500 to-emerald-purple-600",
		},
		{
			id: "mdf-boards",
			title: "MDF Boards",
			description:
				"Eco-friendly medium-density fiberboard made from compressed textile waste.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			color: "from-emerald-purple-500 to-emerald-purple-600",
		},
		{
			id: "eco-furniture",
			title: "Eco Furniture",
			description:
				"Beautiful, sustainable furniture pieces created from our recycled materials.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			color: "from-emerald-purple-500 to-emerald-purple-600",
		},
	];

	return (
		<section className='py-20 bg-gradient-to-b from-emerald-900/50 via-emerald-50 to-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-emerald-900 mb-4'>
						Our Sustainable Products
					</h2>
					<p className='text-xl text-emerald-800 max-w-3xl mx-auto'>
						Discover how we transform textile waste into innovative,
						eco-friendly products that benefit both the environment and your
						business.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{products.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='group cursor-pointer'>
							<Link to={`/products/${product.id}`}>
								<div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2'>
									<div className='relative h-48 overflow-hidden'>
										<img
											src={product.image}
											alt={product.title}
											className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
										/>
										<div
											className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
										/>
									</div>

									<div className='p-6'>
										<h3 className='text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-purple-600 transition-colors'>
											{product.title}
										</h3>
										<p className='text-gray-600 mb-4 leading-relaxed'>
											{product.description}
										</p>

										<div className='flex items-center text-emerald-purple-600 font-medium group-hover:text-emerald-purple-700 transition-colors'>
											<span>Learn More</span>
											<ArrowRight className='h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform' />
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mt-12'>
					<Link
						to='/products'
						className='inline-flex items-center bg-emerald-purple-600 hover:bg-emerald-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105'>
						View All Products
						<ArrowRight className='h-5 w-5 ml-2' />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default ProductShowcase;
