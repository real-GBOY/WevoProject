/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Clock,
	Send,
	MessageCircle,
	Users,
	Award,
} from "lucide-react";

const Contact = () => {
	const contactInfo = [
		{
			icon: Mail,
			title: "Email Us",
			details: "enactusmenoufia@gmail.com",
			description: "Send us an email and we'll respond within 24 hours",
			color: "text-blue-600",
			bgColor: "bg-blue-100",
		},
		{
			icon: Phone,
			title: "Call Us",
			details: "01026597474",
			description: "Available Monday to Friday, 9 AM to 6 PM",
			color: "text-green-600",
			bgColor: "bg-green-100",
		},
		{
			icon: MapPin,
			title: "Visit Us",
			details: "Cairo, Egypt",
			description: "Schedule a visit to our facilities and see our process",
			color: "text-emerald-600",
			bgColor: "bg-emerald-100",
		},
		{
			icon: Clock,
			title: "Business Hours",
			details: "Mon - Fri: 9 AM - 6 PM",
			description: "Saturday: 10 AM - 4 PM, Sunday: Closed",
			color: "text-orange-600",
			bgColor: "bg-orange-100",
		},
	];

	const departments = [
		{
			name: "General Inquiries",
			email: "enactusmenoufia@gmail.com",
			description: "Questions about our mission, products, or services",
		},
		{
			name: "Partnerships",
			email: "enactusmenoufia@gmail.com",
			description: "Collaboration opportunities and business partnerships",
		},
		{
			name: "Sales & Orders",
			email: "enactusmenoufia@gmail.com",
			description: "Product orders, quotes, and sales support",
		},
		{
			name: "Media & Press",
			email: "enactusmenoufia@gmail.com",
			description: "Press inquiries and media relations",
		},
	];

	const faqs = [
		{
			question: "What types of textile waste do you accept?",
			answer:
				"We accept various types of textile waste including cotton, polyester, wool, and blended fabrics from manufacturing processes, post-consumer textiles, and fabric scraps.",
		},
		{
			question: "How can my company partner with Weavolution?",
			answer:
				"We offer several partnership models including waste collection services, product distribution, and collaborative sustainability programs. Contact our partnerships team to discuss options.",
		},
		{
			question: "Do you offer educational programs for schools?",
			answer:
				"Yes! Our Green Schools Initiative provides educational workshops, materials, and activities to teach students about sustainability and textile recycling.",
		},
		{
			question: "What is the minimum order quantity for your products?",
			answer:
				"Minimum order quantities vary by product. Contact our sales team for specific requirements and bulk pricing options.",
		},
	];

	return (
		<div className='pt-16'>
			{/* Hero Section */}
			<section className='bg-primary text-white py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						className='text-center'>
						<MessageCircle className='h-16 w-16 mx-auto mb-6 text-secondary' />
						<h1 className='text-4xl md:text-6xl font-bold mb-6 text-secondary'>
							Get in Touch
						</h1>
						<p className='text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto'>
							Ready to join the sustainable revolution? We'd love to hear from
							you and explore how we can work together.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Form */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>
							Send Us a Message
						</h2>
						<p className='text-xl text-gray-900'>
							Fill out the form below and we'll get back to you as soon as
							possible.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='bg-white rounded-2xl shadow-lg p-8'>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										First Name *
									</label>
									<input
										type='text'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
										placeholder='Your first name'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Last Name *
									</label>
									<input
										type='text'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
										placeholder='Your last name'
									/>
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Email Address *
									</label>
									<input
										type='email'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
										placeholder='your@email.com'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Phone Number
									</label>
									<input
										type='tel'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
										placeholder='01026597474'
									/>
								</div>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Subject *
								</label>
								<select className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'>
									<option value=''>Select a subject</option>
									<option value='general'>General Inquiry</option>
									<option value='partnership'>Partnership Opportunity</option>
									<option value='products'>Product Information</option>
									<option value='sales'>Sales & Orders</option>
									<option value='media'>Media & Press</option>
									<option value='other'>Other</option>
								</select>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Organization (Optional)
								</label>
								<input
									type='text'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
									placeholder='Your organization name'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Message *
								</label>
								<textarea
									rows={6}
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
									placeholder='Tell us about your inquiry, project, or how we can help you...'></textarea>
							</div>

							<div className='flex items-start space-x-3'>
								<input
									type='checkbox'
									id='newsletter'
									className='mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded'
								/>
								<label htmlFor='newsletter' className='text-sm text-gray-600'>
									I would like to receive updates about Weavolution's campaigns
									and initiatives
								</label>
							</div>

							<div className='text-center'>
								<button
									type='submit'
									className='bg-primary hover:bg-primary-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-flex items-center space-x-2'>
									<Send className='h-5 w-5' />
									<span>Send Message</span>
								</button>
							</div>
						</form>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							Frequently Asked Questions
						</h2>
						<p className='text-xl text-gray-600'>
							Quick answers to common questions about Weavolution and our
							services.
						</p>
					</motion.div>

					<div className='space-y-6'>
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-white rounded-xl p-6 shadow-sm'>
								<h3 className='text-lg font-semibold text-gray-900 mb-3'>
									{faq.question}
								</h3>
								<p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className='py-20 bg-gradient-to-r from-primary to-primary text-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}>
						<Users className='h-16 w-16 mx-auto mb-6 text-emerald-200' />
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Join Our Community
						</h2>
						<p className='text-xl text-emerald-100 mb-8 max-w-3xl mx-auto'>
							Follow us on social media to stay updated on our latest campaigns,
							products, and sustainability initiatives.
						</p>
						<div className='flex justify-center space-x-6'>
							<motion.a
								key='Facebook'
								href='https://www.facebook.com/profile.php?id=61578153764822'
								whileHover={{ scale: 1.1 }}
								className='bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-medium transition-all'>
								Facebook
							</motion.a>
							<motion.a
								key='Instagram'
								href='https://www.instagram.com/weavolution4?igsh=Y3dsdTY5MmtxMjJn&utm_source=qr&fbclid=IwY2xjawLwsM9leHRuA2FlbQIxMABicmlkETE1VXZyd1dpUlIzMHNhV1pjAR6YPBvwF_SPUN4VoIwUCOzKeiRCA81Uy6CkBSdmVPmAG8P0hQg6Gdg-kIQe4g_aem_w6I5fniPZ4IogxuESUSacQ'
								whileHover={{ scale: 1.1 }}
								className='bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-medium transition-all'>
								Instagram
							</motion.a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
