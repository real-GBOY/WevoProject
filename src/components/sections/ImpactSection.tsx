/** @format */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Leaf, Factory, Globe, LucideIcon } from "lucide-react";

type CounterKeys =
	| "wasteProcessed"
	| "co2Reduced"
	| "productsCreated"
	| "partnersJoined";

interface CounterState {
	wasteProcessed: number;
	co2Reduced: number;
	productsCreated: number;
	partnersJoined: number;
}

interface ImpactStat {
	icon: LucideIcon;
	value: string;
	label: string;
	color: string;
	bgColor: string;
}

const Impact = () => {
	const [counters, setCounters] = useState<CounterState>({
		wasteProcessed: 0,
		co2Reduced: 0,
		productsCreated: 0,
		partnersJoined: 0,
	});

	const targetValues: CounterState = {
		wasteProcessed: 50000,
		co2Reduced: 25000,
		productsCreated: 10000,
		partnersJoined: 150,
	};

	useEffect(() => {
		const duration = 2000;
		const intervals: Record<CounterKeys, number> = {} as Record<
			CounterKeys,
			number
		>;

		(Object.keys(targetValues) as CounterKeys[]).forEach((key) => {
			const increment = targetValues[key] / (duration / 50);
			intervals[key] = setInterval(() => {
				setCounters((prev) => {
					const newValue = prev[key] + increment;
					if (newValue >= targetValues[key]) {
						clearInterval(intervals[key]);
						return { ...prev, [key]: targetValues[key] };
					}
					return { ...prev, [key]: Math.floor(newValue) };
				});
			}, 50);
		});

		return () => {
			Object.values(intervals).forEach((interval) => clearInterval(interval));
		};
	}, []);

	const impactStats: ImpactStat[] = [
		{
			icon: Trash2,
			value: counters.wasteProcessed.toLocaleString(),
			label: "Tons of Textile Waste Processed",
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		{
			icon: Leaf,
			value: counters.co2Reduced.toLocaleString(),
			label: "Tons of CO2 Emissions Reduced",
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		{
			icon: Factory,
			value: counters.productsCreated.toLocaleString(),
			label: "Eco-Friendly Products Created",
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		{
			icon: Globe,
			value: counters.partnersJoined.toLocaleString(),
			label: "Partners Joined Our Mission",
			color: "text-purple-500",
			bgColor: "bg-purple-100",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const statCardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: index * 0.1 },
		}),
	};

	return (
		<section
			id='impact'
			className='py-20 bg-gradient-to-b from-emerald-50 to-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='text-center mb-16'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-800 mb-6'>
						Our <span className='text-emerald-600'>Impact</span>
					</h2>
					<p className='text-lg text-emerald-700 max-w-3xl mx-auto'>
						Measuring our contribution to a sustainable future through concrete
						actions and measurable results in the fight against textile waste.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{impactStats.map((stat, index) => (
						<motion.div
							key={stat.label}
							className='text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100'
							variants={statCardVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							custom={index}>
							<div
								className={`${stat.bgColor} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
								<stat.icon className={`w-8 h-8 ${stat.color}`} />
							</div>
							<div className='text-3xl lg:text-4xl font-bold text-emerald-800 mb-2'>
								{stat.value}
							</div>
							<div className='text-emerald-600 font-medium'>{stat.label}</div>
						</motion.div>
					))}
				</div>

				{/* Environmental Impact Visualization */}
				<motion.div
					className='bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-white shadow-xl'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
						<div>
							<h3 className='text-2xl lg:text-3xl font-bold mb-6'>
								Transforming Egypt's Textile Waste Crisis
							</h3>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-emerald-200 rounded-full'></div>
									<span className='text-lg'>
										Nearly 3 million tons of textile waste generated annually in
										Egypt
									</span>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-emerald-200 rounded-full'></div>
									<span className='text-lg'>
										95% currently ends up polluting the environment
									</span>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-emerald-200 rounded-full'></div>
									<span className='text-lg'>
										Our solution can process and recycle up to 80% of this waste
									</span>
								</div>
							</div>
						</div>
						<div className='text-center lg:text-right'>
							<div className='text-6xl lg:text-8xl font-bold mb-4'>3M</div>
							<div className='text-xl lg:text-2xl font-medium'>
								Tons of Waste
							</div>
							<div className='text-lg opacity-90 mt-2'>
								Transformed into Opportunity
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Impact;
