import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaRegStar, FaBriefcase, FaGraduationCap, FaCode, FaChartLine, FaUserTie } from 'react-icons/fa';

const Interviewer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Mock interviewer data
  const interviewers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Software Engineer',
      company: 'Google',
      domain: 'software',
      level: 'senior',
      rating: 4.9,
      reviews: 128,
      experience: '8 years',
      education: 'MIT, Computer Science',
      available: true,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Data Science Manager',
      company: 'Amazon',
      domain: 'data',
      level: 'manager',
      rating: 4.8,
      reviews: 95,
      experience: '10 years',
      education: 'Stanford, Statistics',
      available: false,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      title: 'Product Lead',
      company: 'Microsoft',
      domain: 'product',
      level: 'lead',
      rating: 4.7,
      reviews: 76,
      experience: '12 years',
      education: 'Harvard, Business',
      available: true,
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      title: 'Frontend Architect',
      company: 'Facebook',
      domain: 'software',
      level: 'senior',
      rating: 4.9,
      reviews: 112,
      experience: '7 years',
      education: 'Berkeley, Computer Science',
      available: true,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 5,
      name: 'James Kim',
      title: 'Machine Learning Engineer',
      company: 'Apple',
      domain: 'data',
      level: 'mid',
      rating: 4.6,
      reviews: 64,
      experience: '5 years',
      education: 'CMU, Machine Learning',
      available: true,
      image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
    {
      id: 6,
      name: 'Priya Patel',
      title: 'UX Design Director',
      company: 'Adobe',
      domain: 'design',
      level: 'director',
      rating: 4.8,
      reviews: 88,
      experience: '9 years',
      education: 'RISD, Design',
      available: false,
      image: 'https://randomuser.me/api/portraits/women/90.jpg'
    }
  ];

  // Filter interviewers based on search and filters
  const filteredInterviewers = interviewers.filter(interviewer => {
    const matchesSearch = interviewer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         interviewer.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === 'all' || interviewer.domain === selectedDomain;
    const matchesLevel = selectedLevel === 'all' || interviewer.level === selectedLevel;
    
    return matchesSearch && matchesDomain && matchesLevel;
  });

  // Domain options for filter
  const domainOptions = [
    { value: 'all', label: 'All Domains' },
    { value: 'software', label: 'Software Engineering', icon: <FaCode className="mr-2" /> },
    { value: 'data', label: 'Data Science', icon: <FaChartLine className="mr-2" /> },
    { value: 'product', label: 'Product Management', icon: <FaUserTie className="mr-2" /> },
    { value: 'design', label: 'UX/Design', icon: <FaUserTie className="mr-2" /> }
  ];

  // Experience level options
  const levelOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'junior', label: 'Junior' },
    { value: 'mid', label: 'Mid-Level' },
    { value: 'senior', label: 'Senior' },
    { value: 'lead', label: 'Lead' },
    { value: 'manager', label: 'Manager' },
    { value: 'director', label: 'Director+' }
  ];

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Connect with Expert Interviewers</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Practice with experienced professionals from top tech companies
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search interviewers by name or company..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
              <select
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                {domainOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.icon}{option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
              <select
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Interviewers Grid */}
        {filteredInterviewers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInterviewers.map(interviewer => (
              <div key={interviewer.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <img 
                      src={interviewer.image} 
                      alt={interviewer.name}
                      className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-indigo-100"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{interviewer.name}</h3>
                      <p className="text-gray-600">{interviewer.title} at {interviewer.company}</p>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {renderStars(interviewer.rating)}
                        </div>
                        <span className="text-sm text-gray-500">({interviewer.reviews})</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <FaBriefcase className="mr-2 text-indigo-500" />
                      <span>{interviewer.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaGraduationCap className="mr-2 text-indigo-500" />
                      <span>{interviewer.education}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      interviewer.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {interviewer.available ? 'Available Now' : 'Booked'}
                    </span>
                    <Link
                      to={`/interviewers/${interviewer.id}`}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">No interviewers found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedDomain('all');
                setSelectedLevel('all');
              }}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-sm font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Interviewer</h3>
              <p className="text-gray-600">
                Browse our network of experienced professionals from top companies.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Your Session</h3>
              <p className="text-gray-600">
                Select a convenient time slot that works for your schedule.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice & Get Feedback</h3>
              <p className="text-gray-600">
                Conduct a realistic interview and receive detailed feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviewer;