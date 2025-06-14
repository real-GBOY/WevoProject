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
import FeaturesSection from "../components/sections/FeaturesSection";

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
		<FeaturesSection/>
			<ProductShowcase />
			<ImpactStats />
			<CallToAction />
		</div>
	);
};

export default Home;
