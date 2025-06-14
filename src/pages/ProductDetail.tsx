import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, Truck, Shield, Recycle } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();

  const products = {
    '3d-filament': {
      title: '3D Printing Filament',
      description: 'Premium quality 3D printing filament made from 100% recycled textile fibers. Our innovative process transforms discarded textiles into high-performance filament that delivers exceptional print quality while supporting environmental sustainability.',
      image: 'https://images.pexels.com/photos/3846332/pexels-photo-3846332.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 'Starting at $25/kg',
      features: [
        'Made from 100% recycled textile fibers',
        'Compatible with most FDM 3D printers',
        'Available in 15+ colors',
        'Biodegradable and eco-friendly',
        'Consistent diameter tolerance (±0.02mm)',
        'Excellent layer adhesion',
        'Low warping and shrinkage',
        'Food-safe certified options available'
      ],
      specifications: [
        { label: 'Material', value: 'Recycled PLA/Textile Composite' },
        { label: 'Diameter', value: '1.75mm / 2.85mm' },
        { label: 'Print Temperature', value: '190-210°C' },
        { label: 'Bed Temperature', value: '50-60°C' },
        { label: 'Storage', value: 'Cool, dry place' },
        { label: 'Shelf Life', value: '2 years unopened' }
      ],
      applications: [
        'Prototyping and product development',
        'Educational projects',
        'Art and creative applications',
        'Sustainable manufacturing',
        'Custom tooling and fixtures'
      ]
    },
    'recycled-yarn': {
      title: 'Recycled Yarn',
      description: 'High-quality yarn produced from carefully selected and processed textile waste. Our advanced recycling technology maintains fiber integrity while creating versatile yarn suitable for various textile applications.',
      image: 'https://images.pexels.com/photos/7796687/pexels-photo-7796687.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 'Starting at $15/kg',
      features: [
        'Premium recycled cotton and polyester blend',
        'Multiple weights available (DK, Worsted, Chunky)',
        'Chemical-free processing',
        'Consistent twist and tension',
        'Excellent color retention',
        'Soft hand feel',
        'Suitable for machine and hand knitting',
        'Certified by Global Recycled Standard (GRS)'
      ],
      specifications: [
        { label: 'Composition', value: '60% Recycled Cotton, 40% Recycled Polyester' },
        { label: 'Weight Range', value: '50g - 500g skeins' },
        { label: 'Yarn Weight', value: 'DK (3), Worsted (4), Chunky (5)' },
        { label: 'Twist', value: 'Medium twist, balanced' },
        { label: 'Care', value: 'Machine wash cold, tumble dry low' },
        { label: 'Color Fastness', value: 'Grade 4-5' }
      ],
      applications: [
        'Sustainable fashion production',
        'Home textiles and accessories',
        'Handicrafts and DIY projects',
        'Educational institutions',
        'Eco-conscious retail brands'
      ]
    },
    'mdf-boards': {
      title: 'MDF Boards',
      description: 'Innovative medium-density fiberboard manufactured from compressed textile waste. Our MDF boards offer superior strength and stability while providing an eco-friendly alternative to traditional wood-based products.',
      image: 'https://images.pexels.com/photos/5974056/pexels-photo-5974056.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 'Starting at $30/m²',
      features: [
        'Made from 100% recycled textile fibers',
        'Superior strength and dimensional stability',
        'Moisture resistant coating available',
        'Easy to cut, drill, and shape',
        'Consistent density throughout',
        'Low formaldehyde emissions',
        'Fire retardant options available',
        'Custom sizes and thicknesses'
      ],
      specifications: [
        { label: 'Density', value: '720-750 kg/m³' },
        { label: 'Thickness Range', value: '6mm - 30mm' },
        { label: 'Standard Sizes', value: '1220x2440mm, 1525x3050mm' },
        { label: 'Moisture Content', value: '6-8%' },
        { label: 'Bending Strength', value: '≥22 MPa' },
        { label: 'Screw Holding', value: '≥800 N' }
      ],
      applications: [
        'Furniture manufacturing',
        'Interior construction',
        'Shelving and storage solutions',
        'Decorative panels',
        'Exhibition stands',
        'Sustainable building projects'
      ]
    },
    'eco-furniture': {
      title: 'Eco Furniture',
      description: 'Beautifully crafted furniture pieces made entirely from our recycled materials. Each piece combines modern design with environmental responsibility, creating unique furniture that tells a story of sustainability.',
      image: 'https://images.pexels.com/photos/6480214/pexels-photo-6480214.jpeg?auto=compress&cs=tinysrgb&w=1200',
      price: 'Custom pricing',
      features: [
        'Handcrafted from recycled materials',
        'Modern and timeless designs',
        'Custom sizing and finishes',
        'Durable construction',
        'Zero waste production process',
        'Local artisan craftsmanship',
        'Modular design options',
        'Lifetime sustainability guarantee'
      ],
      specifications: [
        { label: 'Materials', value: 'Recycled MDF, Textile Composites' },
        { label: 'Finishes', value: 'Natural oils, water-based lacquers' },
        { label: 'Assembly', value: 'Easy assembly with included hardware' },
        { label: 'Warranty', value: '5 years structural, 2 years finish' },
        { label: 'Care', value: 'Clean with damp cloth, avoid harsh chemicals' },
        { label: 'Lead Time', value: '4-6 weeks for custom orders' }
      ],
      applications: [
        'Residential furniture',
        'Office environments',
        'Hotels and hospitality',
        'Educational institutions',
        'Retail spaces',
        'Sustainable architecture projects'
      ]
    }
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/products" className="text-green-600 hover:text-green-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-green-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-green-600">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Sustainability Badge */}
              <div className="bg-green-50 rounded-xl p-4 flex items-center space-x-3">
                <Recycle className="h-6 w-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">100% Sustainable</p>
                  <p className="text-sm text-green-600">Made from recycled textile waste</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(4.8/5 from 127 reviews)</span>
                </div>
                <p className="text-2xl font-bold text-green-600 mb-6">
                  {product.price}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Benefits */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                <div className="text-center">
                  <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Quality Guarantee</p>
                </div>
                <div className="text-center">
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Recycle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">100% Recycled</p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold text-lg text-center block transition-colors"
                >
                  Request Quote
                </Link>
                <Link
                  to="/contact"
                  className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-full font-semibold text-lg text-center block transition-colors"
                >
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
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span className="text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
              <div className="space-y-3">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-2">Environmental Impact</h4>
                <p className="text-green-700 text-sm">
                  By choosing this product, you're helping divert textile waste from landfills and supporting Egypt's circular economy. Each kilogram of our recycled material prevents approximately 2.5kg of textile waste from polluting the environment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h3>
            <div className="text-center">
              <Link
                to="/products"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
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