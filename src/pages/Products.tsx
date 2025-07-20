/** @format */

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Award, Truck } from "lucide-react";

const Products = () => {
	const products = [
		{
			id: "3d-filament",
			title: "3D Printing Filament",
			description:
				"High-quality filament made from recycled textile fibers, perfect for sustainable 3D printing projects and prototyping.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			price: "Starting at $25/kg",
			features: [
				"Made from 100% recycled textiles",
				"Compatible with most 3D printers",
				"Available in multiple colors",
				"Biodegradable material",
			],
			category: "Manufacturing",
		},
		{
			id: "recycled-yarn",
			title: "Recycled Yarn",
			description:
				"Soft, durable yarn crafted from upcycled textiles, ideal for sustainable fashion and textile manufacturing.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			price: "Starting at $15/kg",
			features: [
				"Premium quality fibers",
				"Various weights available",
				"Chemical-free processing",
				"Excellent durability",
			],
			category: "Textiles",
		},
		{
			id: "mdf-boards",
			title: "MDF Boards",
			description:
				"Eco-friendly medium-density fiberboard made from compressed textile waste, perfect for furniture and construction.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			price: "Starting at $30/m²",
			features: [
				"Superior strength and stability",
				"Moisture resistant",
				"Easy to work with",
				"Sustainable alternative",
			],
			category: "Construction",
		},
		{
			id: "eco-furniture",
			title: "Eco Furniture",
			description:
				"Beautiful, sustainable furniture pieces created from our recycled materials, combining style with environmental responsibility.",
			image: "https://i.postimg.cc/vHtTgfRc/com-wallpaper.jpg",
			price: "Custom pricing",
			features: [
				"Custom designs available",
				"Handcrafted quality",
				"Modern aesthetics",
				"Zero waste production",
			],
			category: "Furniture",
		},
		{
			id: "insulation-panels",
			title: "Insulation Panels",
			description:
				"Thermal and acoustic insulation panels made from recycled textile fibers for energy-efficient buildings.",
			image:
				"https://images.pexels.com/photos/8092337/pexels-photo-8092337.jpeg?auto=compress&cs=tinysrgb&w=800",
			price: "Starting at $20/m²",
			features: [
				"Excellent thermal properties",
				"Sound absorption",
				"Fire resistant",
				"Easy installation",
			],
			category: "Construction",
		},
		{
			id: "composite-materials",
			title: "Composite Materials",
			description:
				"Advanced composite materials combining recycled textiles with bio-based resins for industrial applications.",
			image:
				"https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg?auto=compress&cs=tinysrgb&w=800",
			price: "Contact for pricing",
			features: [
				"High strength-to-weight ratio",
				"Corrosion resistant",
				"Customizable properties",
				"Sustainable solution",
			],
			category: "Manufacturing",
		},
	];

	const categories = [
		"All",
		"Manufacturing",
		"Textiles",
		"Construction",
		"Furniture",
	];
	const [selectedCategory, setSelectedCategory] = React.useState("All");

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);

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
							Sustainable Products
						</h1>
						<p className='text-xl md:text-2xl text-emerald-purple-100 max-w-3xl mx-auto'>
							Discover our range of innovative products made from recycled
							textile waste, designed for a sustainable future.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Product Benefits */}
			<section className='py-16 bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								icon: Recycle,
								title: "100% Recycled",
								description: "All products made from recycled textile waste",
							},
							{
								icon: Award,
								title: "Premium Quality",
								description: "Rigorous testing ensures top-tier performance",
							},
							{
								icon: Truck,
								title: "Fast Delivery",
								description: "Quick and reliable shipping across Egypt",
							},
						].map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='text-center'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-emerald-purple-100 rounded-full mb-4'>
									<benefit.icon className='h-8 w-8 text-emerald-purple-600' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{benefit.title}
								</h3>
								<p className='text-gray-600'>{benefit.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className='py-8 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-wrap justify-center gap-4'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-6 py-2 rounded-full font-medium transition-all ${
									selectedCategory === category
										? "bg-emerald-purple-600 text-white"
										: "bg-white text-gray-700 hover:bg-emerald-purple-50 hover:text-emerald-purple-600"
								}`}>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Products Grid */}
			<section className='py-16 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{filteredProducts.map((product, index) => (
							<motion.div
								key={product.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'>
								<div className='relative h-48 overflow-hidden'>
									<img
										src={product.image}
										alt={product.title}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
									/>
									<div className='absolute top-4 left-4'>
										<span className='bg-emerald-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
											{product.category}
										</span>
									</div>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										{product.title}
									</h3>
									<p className='text-gray-600 mb-4 leading-relaxed'>
										{product.description}
									</p>

									<div className='mb-4'>
										<p className='text-lg font-semibold text-emerald-purple-600 mb-2'>
											{product.price}
										</p>
										<ul className='space-y-1'>
											{product.features.slice(0, 2).map((feature, idx) => (
												<li
													key={idx}
													className='text-sm text-gray-600 flex items-center'>
													<div className='w-1.5 h-1.5 bg-emerald-purple-500 rounded-full mr-2' />
													{feature}
												</li>
											))}
										</ul>
									</div>

									<Link
										to={`/products/${product.id}`}
										className='group/link inline-flex items-center text-emerald-purple-600 hover:text-emerald-purple-700 font-medium transition-colors'>
										<span>Learn More</span>
										<ArrowRight className='h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform' />
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Products;
