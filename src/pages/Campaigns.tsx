import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Target, ArrowRight, Heart, Recycle } from 'lucide-react';

const Campaigns = () => {
  const activeCampaigns = [
    {
      id: 1,
      title: 'Green Schools Initiative',
      description: 'Educating students about textile waste and sustainability through interactive workshops and competitions.',
      image: 'https://images.pexels.com/photos/8926552/pexels-photo-8926552.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      location: 'Cairo & Giza Schools',
      participants: 5000,
      goal: 'Reach 10,000 students',
      progress: 50,
      category: 'Education',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Community Collection Drive',
      description: 'Neighborhood textile collection events to gather materials for recycling while building community awareness.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2024-03-01',
      endDate: '2024-06-30',
      location: 'Alexandria Communities',
      participants: 1200,
      goal: 'Collect 50 tons of textiles',
      progress: 75,
      category: 'Community',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Fashion Forward Sustainability',
      description: 'Partnering with fashion designers to create awareness about sustainable fashion and textile recycling.',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2024-02-01',
      endDate: '2024-08-31',
      location: 'Cairo Fashion Week',
      participants: 800,
      goal: 'Engage 50 designers',
      progress: 60,
      category: 'Industry',
      status: 'Active',
    },
  ];

  const upcomingCampaigns = [
    {
      id: 4,
      title: 'University Sustainability Challenge',
      description: 'Student competition to develop innovative textile recycling solutions and business models.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2024-09-01',
      location: 'Major Egyptian Universities',
      category: 'Education',
      status: 'Upcoming',
    },
    {
      id: 5,
      title: 'Textile Waste Awareness Week',
      description: 'National campaign to raise awareness about textile waste impact and promote recycling solutions.',
      image: 'https://images.pexels.com/photos/6647022/pexels-photo-6647022.jpeg?auto=compress&cs=tinysrgb&w=800',
      startDate: '2024-10-15',
      location: 'Nationwide',
      category: 'Awareness',
      status: 'Upcoming',
    },
  ];

  const completedCampaigns = [
    {
      id: 6,
      title: 'Zero Waste Factory Initiative',
      description: 'Helped 20 textile factories implement zero-waste policies and recycling programs.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2023-12-31',
      location: '10th of Ramadan City',
      impact: '2,000 tons diverted from landfills',
      participants: 300,
      category: 'Industry',
      status: 'Completed',
    },
  ];

  const campaignStats = [
    { number: '25+', label: 'Active Campaigns', icon: Target },
    { number: '15,000+', label: 'People Reached', icon: Users },
    { number: '500+', label: 'Tons Collected', icon: Recycle },
    { number: '50+', label: 'Partners Engaged', icon: Heart },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Campaigns
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Join our community-driven initiatives to create awareness, collect textile waste, and build a more sustainable Egypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {campaignStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Active Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current initiatives making a real impact across Egypt. Join us and be part of the change!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {campaign.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {campaign.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {campaign.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      <span>{new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span>{campaign.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      <span>{campaign.participants.toLocaleString()} participants</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${campaign.progress}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Goal: {campaign.goal}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                    <span>Join Campaign</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Campaigns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get ready for these exciting initiatives launching soon. Sign up to be notified!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-colors"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {campaign.status}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {campaign.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {campaign.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                        <span>Starts {new Date(campaign.startDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{campaign.location}</span>
                      </div>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Get Notified
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the impact of our completed campaigns and the communities that made them successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {completedCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {campaign.status}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {campaign.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {campaign.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {campaign.participants}
                        </div>
                        <div className="text-sm text-gray-600">Participants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {campaign.impact.split(' ')[0]}
                        </div>
                        <div className="text-sm text-gray-600">Tons Diverted</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Completed</div>
                        <div className="font-medium text-gray-900">
                          {new Date(campaign.completedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      <span>{campaign.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Own Campaign
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Have an idea for a sustainability campaign? We'd love to support your initiative and help you make a difference in your community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                Propose a Campaign
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                Volunteer With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;