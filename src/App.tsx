/** @format */

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Impact from "./pages/Impact";
import Partner from "./pages/Partner";
import About from "./pages/About";
import Contact from "./pages/Contact";

// ScrollToTop component that scrolls to top on route change
const ScrollToTop = () => {
	const { pathname } = useLocation();

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function App() {
	return (
		<Router>
			<div className='min-h-screen bg-gray-50'>
				<Navbar />
				<ScrollToTop />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/products' element={<Products />} />
						<Route path='/products/:id' element={<ProductDetail />} />
						<Route path='/impact' element={<Impact />} />
						<Route path='/partner' element={<Partner />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
