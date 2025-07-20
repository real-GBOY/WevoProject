/** @format */

import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Star, Truck, Shield, Recycle } from "lucide-react";

const ProductDetail = () => {
	const { id } = useParams();

	const products = {
		"3d-filament": {
			title: " 3D Printing Filament – Impact Overview",
			description:
				"Our filament is made by transforming textile waste into high-quality 3D printing spools. Compatible with FDM printers (PLA, PET, ABS), our filament offers strong, glossy, and flexible material — reducing both waste and plastic pollution.",
			image:
				"https://images.pexels.com/photos/3846332/pexels-photo-3846332.jpeg?auto=compress&cs=tinysrgb&w=1200",
			price: "Contact for pricing",
			features: [
				"High flexibility",
				"Enhanced glossy finish",
				"Strong mechanical bearing",
				"Fully compatible with PLA, PET, ABS printers",
				"90% conversion rate from textile waste to filament",
				"720 rolls produced annually",
				"15 direct jobs created",
			],
			specifications: [
				{
					label: "Conversion Rate",
					value: "90% from textile waste to filament",
				},
				{ label: "Filament Rolls Produced Annually", value: "720 rolls" },
				{ label: "Jobs Created", value: "15 direct jobs" },
				{ label: "Trained Individuals", value: "30 people trained" },
			],
			applications: [
				"Educational Institutions",
				"Design Studios",
				"Makerspaces & Innovation Labs",
				"50+ partners across Egypt",
				"Schools, labs, and studios",
			],
		},
		"recycled-yarn": {
			title: " Recycled Yarn – Impact Overview",
			description:
				"Our yarn is produced by upcycling discarded textiles into high-quality yarn rolls used by artisans, sewing businesses, and knitting groups — promoting sustainability while supporting local economies.",
			image:
				"https://images.pexels.com/photos/7796687/pexels-photo-7796687.jpeg?auto=compress&cs=tinysrgb&w=1200",
			price: "Contact for pricing",
			features: [
				"Affordable and sustainable",
				"Strong, consistent quality",
				"Perfect for weaving, knitting, and tailoring applications",
				"Ideal for social enterprises and local artisans",
				"70,000 kg textile waste recycled annually",
				"0.85 kg yarn per kg of fabric efficiency",
				"7,500 yarn rolls produced annually",
				"35 jobs created per spinning facility",
			],
			specifications: [
				{ label: "Textile Waste Recycled", value: "70,000 kg (70 tons)" },
				{
					label: "Yarn Output Efficiency",
					value: "0.85 kg yarn per kg of fabric",
				},
				{ label: "Yarn Rolls Produced Annually", value: "7,500 units" },
				{ label: "Jobs Created", value: "35 jobs per spinning facility" },
				{
					label: "Trained Individuals",
					value: "50 people trained in yarn processing",
				},
				{
					label: "Businesses Engaged",
					value: "120 tailoring/sewing businesses",
				},
				{ label: "Monthly Demand", value: "300–500 kg across artisan groups" },
			],
			applications: [
				"Tailoring centers",
				"Sewing businesses",
				"Handcraft cooperatives",
				"Artisan and women-led initiatives",
				"Local craft communities",
			],
		},
		"mdf-boards": {
			title: " Recycled MDF Boards – Impact Overview",
			description:
				"Our MDF boards are created by converting textile waste into durable, high-quality Medium Density Fiberboard (MDF). These boards are perfect for furniture and construction, offering a sustainable alternative to traditional wood-based products.",
			image:
				"https://images.pexels.com/photos/5974056/pexels-photo-5974056.jpeg?auto=compress&cs=tinysrgb&w=1200",
			price: "Contact for pricing",
			features: [
				"Strong, reliable structural performance",
				"Moisture-resistant and smooth finish",
				"Easy to cut, shape, and paint",
				"Ideal for eco-conscious furniture production",
				"95% conversion efficiency from textile waste to MDF",
				"2,500 MDF boards produced annually",
				"5,000 kg textile waste recycled annually",
				"25 jobs created in MDF production",
			],
			specifications: [
				{
					label: "Conversion Efficiency",
					value: "95% from textile waste to MDF",
				},
				{ label: "MDF Units Produced Annually", value: "2,500 boards" },
				{ label: "Textile Waste Recycled", value: "5,000 kg (5 tons)" },
				{ label: "Jobs Created", value: "25 jobs in MDF production" },
				{
					label: "Trained Individuals",
					value: "120 carpenters and furniture makers trained",
				},
				{
					label: "Workshops Using MDF",
					value: "15 workshops using our recycled MDF",
				},
				{
					label: "Manufacturer Buyers",
					value: "70 furniture manufacturers as active buyers",
				},
			],
			applications: [
				"Furniture manufacturers",
				"Local carpenters and technicians",
				"Interior designers and green architects",
				"Workshops, vocational schools, and cooperatives",
				"Sustainable building projects",
			],
		},
		"eco-furniture": {
			title: "Eco-Friendly Furniture – Impact Overview",
			description:
				"Our eco furniture is made by transforming textile waste into durable and stylish furniture items like chairs, tables, and shelves. This sustainable innovation supports circular design, reduces landfill waste, and empowers local artisans.",
			image:
				"https://images.pexels.com/photos/6480214/pexels-photo-6480214.jpeg?auto=compress&cs=tinysrgb&w=1200",
			price: "Contact for pricing",
			features: [
				"Moisture-resistant and long-lasting",
				"Smooth finishing and modern designs",
				"Easy to transport and assemble",
				"Made from fully recycled, non-toxic materials",
				"91% conversion efficiency from textile waste to usable furniture materials",
				"320 furniture pieces produced annually",
				"2,560 kg textile waste recycled annually",
				"45 jobs created in furniture production",
			],
			specifications: [
				{
					label: "Conversion Efficiency",
					value: "91% from textile waste to usable furniture materials",
				},
				{ label: "Furniture Units Produced Annually", value: "320 pieces" },
				{ label: "Textile Waste Recycled", value: "2,560 kg (2.56 tons)" },
				{ label: "Jobs Created", value: "45 jobs in furniture production" },
				{
					label: "Trained Designers",
					value: "50 trained furniture designers and technicians",
				},
				{ label: "Local Carpenters", value: "35 local carpenters involved" },
				{ label: "Monthly Production Capacity", value: "250 units" },
			],
			applications: [
				"Families looking for affordable, sustainable options",
				"Offices seeking green interior solutions",
				"Students in need of functional furniture",
				"Workshops and green brands looking to collaborate",
				"Sustainable living spaces",
				"Green building projects",
			],
		},
	};

	const product = products[id as keyof typeof products];

	if (!product) {
		return (
			<div className='pt-16 min-h-screen flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
						Product not found
					</h1>
					<Link
						to='/products'
						className='text-emerald-purple-600 hover:text-emerald-purple-700'>
						Back to Products
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='pt-16'>
			{/* Breadcrumb */}
			<div className='bg-emerald-purple-50 py-4'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center space-x-2 text-sm'>
						<Link
							to='/'
							className='text-gray-500 hover:text-emerald-purple-600'>
							Home
						</Link>
						<span className='text-gray-400'>/</span>
						<Link
							to='/products'
							className='text-gray-500 hover:text-emerald-purple-600'>
							Products
						</Link>
						<span className='text-gray-400'>/</span>
						<span className='text-gray-900'>{product.title}</span>
					</div>
				</div>
			</div>

			{/* Product Detail */}
			<section className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{/* Product Image */}
						<div className='space-y-4'>
							<div className='aspect-square rounded-2xl overflow-hidden'>
								<img
									src={product.image}
									alt={product.title}
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Sustainability Badge */}
							<div className='bg-emerald-purple-50 rounded-xl p-4 flex items-center space-x-3'>
								<Recycle className='h-6 w-6 text-emerald-purple-600' />
								<div>
									<p className='font-semibold text-emerald-purple-800'>
										100% Sustainable
									</p>
									<p className='text-sm text-emerald-purple-600'>
										Made from recycled textile waste
									</p>
								</div>
							</div>
						</div>

						{/* Product Info */}
						<div className='space-y-6'>
							<div>
								<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
									{product.title}
								</h1>
								<div className='flex items-center space-x-4 mb-4'>
									<div className='flex items-center'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-5 w-5 text-yellow-400 fill-current'
											/>
										))}
									</div>
									<span className='text-gray-600'>
										(4.8/5 from 127 reviews)
									</span>
								</div>
								<p className='text-2xl font-bold text-emerald-purple-600 mb-6'>
									{product.price}
								</p>
								<p className='text-gray-600 leading-relaxed'>
									{product.description}
								</p>
							</div>

							{/* Key Features */}
							<div>
								<h3 className='text-xl font-semibold text-gray-900 mb-4'>
									Key Features
								</h3>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
									{product.features.map((feature, index) => (
										<div key={index} className='flex items-start space-x-2'>
											<Check className='h-5 w-5 text-emerald-purple-600 flex-shrink-0 mt-0.5' />
											<span className='text-gray-700 text-sm'>{feature}</span>
										</div>
									))}
								</div>
							</div>

							{/* Service Benefits */}
							<div className='grid grid-cols-3 gap-4 py-6 border-t border-gray-200'>
								<div className='text-center'>
									<Shield className='h-6 w-6 text-emerald-purple-600 mx-auto mb-2' />
									<p className='text-sm font-medium text-gray-900'>
										Quality Guarantee
									</p>
								</div>
								<div className='text-center'>
									<Truck className='h-6 w-6 text-emerald-purple-600 mx-auto mb-2' />
									<p className='text-sm font-medium text-gray-900'>
										Fast Delivery
									</p>
								</div>
								<div className='text-center'>
									<Recycle className='h-6 w-6 text-emerald-purple-600 mx-auto mb-2' />
									<p className='text-sm font-medium text-gray-900'>
										100% Recycled
									</p>
								</div>
							</div>

							{/* Call to Action */}
							<div className='space-y-4'>
								<Link
									to='/contact'
									className='w-full bg-emerald-purple-600 hover:bg-emerald-purple-700 text-white py-3 px-6 rounded-full font-semibold text-lg text-center block transition-colors'>
									Request Quote
								</Link>
								<Link
									to='/contact'
									className='w-full border-2 border-emerald-purple-600 text-emerald-purple-600 hover:bg-emerald-purple-50 py-3 px-6 rounded-full font-semibold text-lg text-center block transition-colors'>
									Get Sample
								</Link>
							</div>
						</div>
					</motion.div>

					{/* Technical Specifications */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<div>
							<h3 className='text-2xl font-bold text-gray-900 mb-6'>
								Technical Specifications
							</h3>
							<div className='space-y-4'>
								{product.specifications.map((spec, index) => (
									<div
										key={index}
										className='flex justify-between items-center py-3 border-b border-gray-200'>
										<span className='font-medium text-gray-700'>
											{spec.label}
										</span>
										<span className='text-gray-900'>{spec.value}</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3 className='text-2xl font-bold text-gray-900 mb-6'>
								Applications
							</h3>
							<div className='space-y-3'>
								{product.applications.map((application, index) => (
									<div key={index} className='flex items-center space-x-3'>
										<div className='w-2 h-2 bg-emerald-purple-600 rounded-full' />
										<span className='text-gray-700'>{application}</span>
									</div>
								))}
							</div>

							{id === "3d-filament" && (
								<div className='mt-8 bg-green-50 rounded-xl p-6'>
									<h4 className='font-semibold text-green-800 mb-4'>
										🌱 Environmental Impact
									</h4>
									<div className='space-y-3 text-sm text-green-700'>
										<div className='flex items-center space-x-2'>
											<span>♻️</span>
											<span>
												<strong>Textile Waste Recycled:</strong> ~800 kg (for
												720 rolls)
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🛑</span>
											<span>
												<strong>Plastic Avoided:</strong> 3,000 kg of
												traditional filament plastic replaced
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌍</span>
											<span>
												<strong>CO₂ Emissions Reduced:</strong> ~4 tons (based
												on textile waste conversion)
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🔁</span>
											<span>
												<strong>Supports Circular Economy:</strong> Converts
												non-recyclable fabric into usable, durable material
											</span>
										</div>
									</div>
								</div>
							)}
							{id === "recycled-yarn" && (
								<div className='mt-8 bg-green-50 rounded-xl p-6'>
									<h4 className='font-semibold text-green-800 mb-4'>
										🌱 Environmental Impact
									</h4>
									<div className='space-y-3 text-sm text-green-700'>
										<div className='flex items-center space-x-2'>
											<span>♻️</span>
											<span>
												<strong>70 tons of textile waste</strong> diverted from
												landfills
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌍</span>
											<span>
												<strong>Significant CO₂ emission reductions</strong> (up
												to 350 tons saved)
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🧵</span>
											<span>
												<strong>Supports reuse</strong> over fast fashion waste
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌾</span>
											<span>
												<strong>Promotes local, eco-friendly</strong> craft
												alternatives
											</span>
										</div>
									</div>
								</div>
							)}
							{id === "mdf-boards" && (
								<div className='mt-8 bg-green-50 rounded-xl p-6'>
									<h4 className='font-semibold text-green-800 mb-4'>
										🌱 Environmental Impact
									</h4>
									<div className='space-y-3 text-sm text-green-700'>
										<div className='flex items-center space-x-2'>
											<span>♻️</span>
											<span>
												<strong>5 tons of textile waste</strong> upcycled into
												usable boards
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌍</span>
											<span>
												<strong>25 tons of CO₂ emissions avoided</strong> (5
												tons waste × 5 tons CO₂ saved/ton)
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌳</span>
											<span>
												<strong>Reduces deforestation</strong> by replacing
												wood-based MDF
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>💧</span>
											<span>
												<strong>Minimizes water and chemical use</strong>{" "}
												typical in standard board production
											</span>
										</div>
									</div>
								</div>
							)}
							{id === "eco-furniture" && (
								<div className='mt-8 bg-green-50 rounded-xl p-6'>
									<h4 className='font-semibold text-green-800 mb-4'>
										🌱 Environmental Impact
									</h4>
									<div className='space-y-3 text-sm text-green-700'>
										<div className='flex items-center space-x-2'>
											<span>♻️</span>
											<span>
												<strong>2.56 tons of textile waste</strong> upcycled
												into functional furniture
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌍</span>
											<span>
												<strong>1,440 kg of CO₂ emissions reduced</strong> (320
												units × 4.5 kg CO₂ saved per unit)
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>🌿</span>
											<span>
												<strong>Helps reduce pressure</strong> on wood and
												plastic furniture production
											</span>
										</div>
										<div className='flex items-center space-x-2'>
											<span>💧</span>
											<span>
												<strong>Cleaner processing</strong> with less chemical
												and water usage
											</span>
										</div>
									</div>
								</div>
							)}
							{id !== "3d-filament" &&
								id !== "recycled-yarn" &&
								id !== "mdf-boards" &&
								id !== "eco-furniture" && (
									<div className='mt-8 bg-emerald-purple-50 rounded-xl p-6'>
										<h4 className='font-semibold text-emerald-purple-800 mb-2'>
											Environmental Impact
										</h4>
										<p className='text-emerald-purple-700 text-sm'>
											By choosing this product, you're helping divert textile
											waste from landfills and supporting Egypt's circular
											economy. Each kilogram of our recycled material prevents
											approximately 2.5kg of textile waste from polluting the
											environment.
										</p>
									</div>
								)}
						</div>
					</motion.div>

					{/* Special MDF Boards Impact Section */}
					{id === "mdf-boards" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										👥 Social Impact
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🛠️</span>
											<span className='text-gray-700'>
												<strong>25 jobs created</strong> in MDF production
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🎓</span>
											<span className='text-gray-700'>
												<strong>120 carpenters and furniture makers</strong>{" "}
												trained
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🏭</span>
											<span className='text-gray-700'>
												<strong>15 workshops</strong> using our recycled MDF
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🤝</span>
											<span className='text-gray-700'>
												<strong>70 furniture manufacturers</strong> as active
												buyers
											</span>
										</div>
									</div>
								</div>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										🎯 Target Market
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🛋️</span>
											<span className='text-gray-700'>
												Furniture manufacturers
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🧰</span>
											<span className='text-gray-700'>
												Local carpenters and technicians
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🏠</span>
											<span className='text-gray-700'>
												Interior designers and green architects
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🏫</span>
											<span className='text-gray-700'>
												Workshops, vocational schools, and cooperatives
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}

					{/* Special Eco Furniture Impact Section */}
					{id === "eco-furniture" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										👥 Social Impact
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🛠️</span>
											<span className='text-gray-700'>
												<strong>45 jobs created</strong> in furniture production
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🎓</span>
											<span className='text-gray-700'>
												<strong>50 trained furniture designers</strong> and
												technicians
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🧰</span>
											<span className='text-gray-700'>
												<strong>35 local carpenters</strong> involved
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>👨‍👩‍👧‍👦</span>
											<span className='text-gray-700'>
												<strong>Targeting impact</strong> for students,
												families, and offices
											</span>
										</div>
									</div>
								</div>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										🎯 Target Market
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🏠</span>
											<span className='text-gray-700'>
												Families looking for affordable, sustainable options
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🏢</span>
											<span className='text-gray-700'>
												Offices seeking green interior solutions
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🎓</span>
											<span className='text-gray-700'>
												Students in need of functional furniture
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🪚</span>
											<span className='text-gray-700'>
												Workshops and green brands looking to collaborate
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}

					{/* Special Recycled Yarn Impact Section */}
					{id === "recycled-yarn" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										👥 Social Impact
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>👷</span>
											<span className='text-gray-700'>
												<strong>35 jobs created</strong> per spinning facility
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🎓</span>
											<span className='text-gray-700'>
												<strong>50 individuals trained</strong> in yarn
												processing
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🤝</span>
											<span className='text-gray-700'>
												<strong>120 tailoring/sewing businesses</strong> engaged
												as buyers
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>📦</span>
											<span className='text-gray-700'>
												<strong>300–500 kg/month</strong> demand across artisan
												groups
											</span>
										</div>
									</div>
								</div>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										🎯 Target Market
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>👗</span>
											<span className='text-gray-700'>Tailoring centers</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🧵</span>
											<span className='text-gray-700'>Sewing businesses</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🤲</span>
											<span className='text-gray-700'>
												Handcraft cooperatives
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>👩‍🎨</span>
											<span className='text-gray-700'>
												Artisan and women-led initiatives
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}

					{/* Special 3D Filament Impact Section */}
					{id === "3d-filament" && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8'>
							<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										🎯 Target Users
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🎓</span>
											<span className='text-gray-700'>
												Educational Institutions
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🛠️</span>
											<span className='text-gray-700'>Design Studios</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>💡</span>
											<span className='text-gray-700'>
												Makerspaces & Innovation Labs
											</span>
										</div>
									</div>
								</div>
								<div>
									<h3 className='text-2xl font-bold text-gray-900 mb-6'>
										🤝 Our Reach
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>📍</span>
											<span className='text-gray-700'>
												<strong>50+ partners</strong> across Egypt: schools,
												labs, and studios
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>🔧</span>
											<span className='text-gray-700'>
												<strong>15 jobs created</strong> and growing
											</span>
										</div>
										<div className='flex items-center space-x-3'>
											<span className='text-2xl'>👩‍🏫</span>
											<span className='text-gray-700'>
												<strong>30 trained individuals</strong> now leading in
												green 3D production
											</span>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					)}

					{/* Related Products */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='mt-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-6'>
							Related Products
						</h3>
						<div className='text-center'>
							<Link
								to='/products'
								className='inline-flex items-center bg-emerald-purple-600 hover:bg-emerald-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors'>
								<ArrowLeft className='h-5 w-5 mr-2' />
								View All Products
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ProductDetail;
