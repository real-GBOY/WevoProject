/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
	Recycle,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className='bg-primary-850 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Brand */}
					<div className='space-y-4'>
						<div className='flex items-center space-x-2'>
							<img
								src='https://i.postimg.cc/QxrqLdfB/Icon.png'
								alt='Logo'
								className='h-8 w-8'
							/>
							<span className='text-xl font-bold text-secondary uppercase'>
								Weavolution
							</span>
						</div>
						<p className='text-gray-400 text-sm leading-relaxed'>
							Transforming Egypt's textile waste into sustainable products for a
							greener future.
						</p>
						<div className='flex space-x-4'>
							<a
								href='https://www.facebook.com/profile.php?id=61578153764822'
								target='_blank'
								rel='noopener noreferrer'>
								<Facebook className='h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors' />
							</a>

							<a
								href='https://www.instagram.com/weavolution4?igsh=Y3dsdTY5MmtxMjJn&utm_source=qr&fbclid=IwY2xjawLwsM9leHRuA2FlbQIxMABicmlkETE1VXZyd1dpUlIzMHNhV1pjAR6YPBvwF_SPUN4VoIwUCOzKeiRCA81Uy6CkBSdmVPmAG8P0hQg6Gdg-kIQe4g_aem_w6I5fniPZ4IogxuESUSacQ'
								target='_blank'
								rel='noopener noreferrer'>
								<Instagram className='h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Quick Links</h3>
						<div className='space-y-2'>
							<Link
								to='/products'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								Products
							</Link>
							<Link
								to='/impact'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								Impact
							</Link>
							<Link
								to='/about'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								About Us
							</Link>
							<Link
								to='/campaigns'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								Campaigns
							</Link>
						</div>
					</div>

					{/* Products */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Products</h3>
						<div className='space-y-2'>
							<Link
								to='/products/3d-filament'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								3D Printing Filament
							</Link>
							<Link
								to='/products/recycled-yarn'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								Recycled Yarn
							</Link>
							<Link
								to='/products/mdf-boards'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								MDF Boards
							</Link>
							<Link
								to='/products/eco-furniture'
								className='block text-gray-400 hover:text-primary-500 transition-colors'>
								Eco Furniture
							</Link>
						</div>
					</div>

					{/* Contact */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold'>Contact</h3>
						<div className='space-y-2'>
							<div className='flex items-center space-x-2'>
								<Mail className='h-4 w-4 text-primary-500' />
								<span className='text-gray-400 text-sm'>
									enactusmenoufia@gmail.com
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Phone className='h-4 w-4 text-primary-500' />
								<span className='text-gray-400 text-sm'>01026597474</span>
							</div>
							<div className='flex items-center space-x-2'>
								<MapPin className='h-4 w-4 text-primary-500' />
								<span className='text-gray-400 text-sm'>Cairo, Egypt</span>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8 text-center'>
					<p className='text-gray-400 text-sm'>
						© 2025 Weavolution. All rights reserved. | A project by Enactus
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
