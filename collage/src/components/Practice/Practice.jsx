// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   FaLaptopCode,
//   FaChartLine,
//   FaUserTie,
//   FaFlask,
//   FaMobileAlt,
//   FaDatabase,
//   FaShieldAlt,
//   FaPencilAlt,
// } from 'react-icons/fa';

// const Practice = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');

//   const categories = [
//     {
//       id: 'software',
//       title: 'Software Engineering',
//       icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
//       count: 28,
//       popular: true,
//     },
//     {
//       id: 'data',
//       title: 'Data Science',
//       icon: <FaChartLine className="text-purple-400 text-2xl" />,
//       count: 15,
//       popular: true,
//     },
//     {
//       id: 'product',
//       title: 'Product Management',
//       icon: <FaUserTie className="text-green-400 text-2xl" />,
//       count: 12,
//     },
//     {
//       id: 'research',
//       title: 'Research Science',
//       icon: <FaFlask className="text-red-400 text-2xl" />,
//       count: 8,
//     },
//     {
//       id: 'mobile',
//       title: 'Mobile Development',
//       icon: <FaMobileAlt className="text-yellow-400 text-2xl" />,
//       count: 10,
//     },
//     {
//       id: 'database',
//       title: 'Database Engineering',
//       icon: <FaDatabase className="text-indigo-400 text-2xl" />,
//       count: 7,
//     },
//     {
//       id: 'security',
//       title: 'Cybersecurity',
//       icon: <FaShieldAlt className="text-teal-400 text-2xl" />,
//       count: 9,
//     },
//     {
//       id: 'design',
//       title: 'UX/UI Design',
//       icon: <FaPencilAlt className="text-pink-400 text-2xl" />,
//       count: 11,
//     },
//   ];

//   const filteredCategories = categories.filter((category) => {
//     const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase());
//     if (activeTab === 'all') return matchesSearch;
//     if (activeTab === 'popular') return category.popular && matchesSearch;
//     return matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold mb-4">Practice Mock Interviews</h1>
//             <p className="text-xl max-w-3xl mx-auto text-gray-300">
//               Prepare for your dream job with realistic interview simulations across various domains
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Search and Filter */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//             <div className="relative w-full md:w-96">
//               <input
//                 type="text"
//                 placeholder="Search interview categories..."
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <div className="absolute left-3 top-2.5 text-gray-400">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setActiveTab('all')}
//                 className={`px-4 py-2 rounded-lg ${
//                   activeTab === 'all'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
//                 }`}
//               >
//                 All Categories
//               </button>
//               <button
//                 onClick={() => setActiveTab('popular')}
//                 className={`px-4 py-2 rounded-lg ${
//                   activeTab === 'popular'
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
//                 }`}
//               >
//                 Most Popular
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredCategories.map((category) => (
//             <Link
//               to={`/practice/${category.id}`}
//               key={category.id}
//               className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-700"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="mr-4">{category.icon}</div>
//                   <h3 className="text-lg font-semibold text-white">{category.title}</h3>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-400">{category.count} interview sets</span>
//                   {category.popular && (
//                     <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">
//                       Popular
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredCategories.length === 0 && (
//           <div className="text-center py-12 text-gray-400">
//             <div className="mx-auto h-24 w-24">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1}
//                   d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//             </div>
//             <h3 className="mt-2 text-lg font-medium text-white">No categories found</h3>
//             <p className="mt-1 text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
//           </div>
//         )}

//         {/* Featured Interview Track */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-white mb-6">Featured Interview Tracks</h2>
//           <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-700">
//             <div className="p-6">
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="h-16 w-16 rounded-full bg-blue-900 flex items-center justify-center">
//                     <FaLaptopCode className="text-blue-400 text-2xl" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-white">Full Stack Developer Track</h3>
//                   <p className="text-gray-300 mt-1">
//                     Comprehensive interview preparation covering frontend, backend, and system design concepts.
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {['JavaScript', 'React', 'Node.js', 'System Design'].map((tag) => (
//                       <span
//                         key={tag}
//                         className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="w-full md:w-auto">
//                   <Link
//                     to="/tracks/fullstack"
//                     className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                   >
//                     Start Track
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practice;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLaptopCode,
  FaChartLine,
  FaUserTie,
  FaFlask,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaPencilAlt,
} from 'react-icons/fa';

const Practice = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'software',
      title: 'Software Engineering',
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      count: 28,
      popular: true,
    },
    {
      id: 'data',
      title: 'Data Science',
      icon: <FaChartLine className="text-purple-400 text-2xl" />,
      count: 15,
      popular: true,
    },
    {
      id: 'product',
      title: 'Product Management',
      icon: <FaUserTie className="text-green-400 text-2xl" />,
      count: 12,
    },
    {
      id: 'research',
      title: 'Research Science',
      icon: <FaFlask className="text-red-400 text-2xl" />,
      count: 8,
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <FaMobileAlt className="text-yellow-400 text-2xl" />,
      count: 10,
    },
    {
      id: 'database',
      title: 'Database Engineering',
      icon: <FaDatabase className="text-indigo-400 text-2xl" />,
      count: 7,
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: <FaShieldAlt className="text-teal-400 text-2xl" />,
      count: 9,
    },
    {
      id: 'design',
      title: 'UX/UI Design',
      icon: <FaPencilAlt className="text-pink-400 text-2xl" />,
      count: 11,
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase());
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'popular') return category.popular && matchesSearch;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Practice Mock Interviews</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Prepare for your dream job with realistic interview simulations across various domains
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search interview categories..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setActiveTab('popular')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'popular'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
                }`}
              >
                Most Popular
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <Link
              to={`/practice/${category.id}`}
              key={category.id}
              className="bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{category.count} interview sets</span>
                  {category.popular && (
                    <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <div className="mx-auto h-24 w-24">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-white">No categories found</h3>
            <p className="mt-1 text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}

        {/* Featured Interview Track */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Interview Tracks</h2>
          <div className="bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-700">
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-blue-900 flex items-center justify-center">
                    <FaLaptopCode className="text-blue-400 text-2xl" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Full Stack Developer Track</h3>
                  <p className="text-gray-300 mt-1">
                    Comprehensive interview preparation covering frontend, backend, and system design concepts.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'Node.js', 'System Design'].map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <Link
                    to="/tracks/fullstack"
                    className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Start Track
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;

