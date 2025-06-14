import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Factory, ShoppingBag, Truck, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Partner = () => {
  const partnerTypes = [
    {
      icon: Factory,
      title: 'Textile Manufacturers',
      description: 'Transform your textile waste into revenue streams while reducing disposal costs.',
      benefits: [
        'Zero disposal fees for textile waste',
        'Revenue sharing from recycled products',
        'Enhanced sustainability credentials',
        'Regulatory compliance support'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: ShoppingBag,
      title: 'Retail Partners',
      description: 'Stock our sustainable products and attract eco-conscious customers.',
      benefits: [
        'Exclusive product distribution rights',
        'Marketing and promotional support',
        'Competitive wholesale pricing',
        'Custom branding opportunities'
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Truck,
      title: 'Logistics Partners',
      description: 'Join our collection and distribution network across Egypt.',
      benefits: [
        'Steady income from collection routes',
        'Flexible scheduling options',
        'Equipment and training provided',
        'Growth opportunities nationwide'
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Community Partners',
      description: 'Help us educate and engage communities in sustainable practices.',
      benefits: [
        'Educational program resources',
        'Community event support',
        'Volunteer coordination assistance',
        'Impact measurement tools'
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Initial Contact',
      description: 'Reach out to us through our partnership form or contact information.',
    },
    {
      number: '02',
      title: 'Assessment',
      description: 'We evaluate your needs and determine the best partnership model.',
    },
    {
      number: '03',
      title: 'Agreement',
      description: 'Finalize partnership terms and sign collaboration agreement.',
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Begin partnership activities with our full support and guidance.',
    },
  ];

  const currentPartners = [
    {
      name: 'Egyptian Cotton Co.',
      type: 'Textile Manufacturer',
      impact: '500 tons waste processed',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Green Store Egypt',
      type: 'Retail Partner',
      impact: '50+ products distributed',
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Cairo University',
      type: 'Educational Partner',
      impact: '10,000 students reached',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'EcoLogistics',
      type: 'Transport Partner',
      impact: '25 collection routes',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Handshake className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Join Egypt's largest textile recycling network and be part of the sustainable revolution transforming our environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Weavolution?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a network of forward-thinking organizations creating positive environmental and economic impact across Egypt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                title: 'Industry Leadership',
                description: 'Be recognized as a sustainability leader in your sector',
              },
              {
                icon: Users,
                title: 'Network Access',
                description: 'Connect with like-minded organizations and experts',
              },
              {
                icon: CheckCircle,
                title: 'Proven Impact',
                description: 'Measurable environmental and social benefits',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your organization's goals and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${partner.color} p-6 text-white`}>
                  <partner.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{partner.title}</h3>
                  <p className="text-white/90">{partner.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Partnership Benefits:</h4>
                  <ul className="space-y-3">
                    {partner.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined partnership process makes it easy to join our sustainable network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-green-200 z-0">
                    <ArrowRight className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 h-4 w-4 text-green-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join leading organizations already making a difference with Weavolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {partner.type}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {partner.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your organization name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+20 XXX XXX XXXX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select partnership type</option>
                  <option value="textile-manufacturer">Textile Manufacturer</option>
                  <option value="retail-partner">Retail Partner</option>
                  <option value="logistics-partner">Logistics Partner</option>
                  <option value="community-partner">Community Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                ></textarea>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <span>Submit Partnership Request</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Partner;