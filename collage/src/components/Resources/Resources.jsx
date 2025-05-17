import React, { useState } from 'react';
import { FiSearch, FiBookmark, FiExternalLink } from 'react-icons/fi';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [bookmarked, setBookmarked] = useState([]);

  // Sample resources data
  const resources = [
    {
      id: 1,
      title: "System Design Primer",
      description: "Learn how to design scalable systems with this comprehensive guide.",
      category: "system design",
      difficulty: "intermediate",
      type: "article",
      url: "https://github.com/donnemartin/system-design-primer"
    },
    {
      id: 2,
      title: "LeetCode Patterns",
      description: "Common patterns for solving algorithm problems efficiently.",
      category: "algorithms",
      difficulty: "advanced",
      type: "cheatsheet",
      url: "https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns"
    },
    {
      id: 3,
      title: "Behavioral Questions Guide",
      description: "Master your answers to common behavioral interview questions.",
      category: "behavioral",
      difficulty: "beginner",
      type: "article",
      url: "https://example.com/behavioral-guide"
    },
    {
      id: 4,
      title: "Data Structures Explained",
      description: "Video course covering all essential data structures.",
      category: "data structures",
      difficulty: "intermediate",
      type: "video",
      url: "https://example.com/data-structures-course"
    }
  ];

  // Filter resources based on search term and active filter
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Toggle bookmark status
  const toggleBookmark = (id) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(item => item !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Interview Resources
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600">
            Curated collection of resources to help you ace your next interview
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {['all', 'algorithms', 'data structures', 'system design', 'behavioral'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        resource.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800' 
                          : resource.difficulty === 'intermediate' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {resource.difficulty}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {resource.type}
                      </span>
                    </div>
                    <button 
                      onClick={() => toggleBookmark(resource.id)}
                      className="text-gray-400 hover:text-yellow-500"
                    >
                      <FiBookmark className={`h-5 w-5 ${bookmarked.includes(resource.id) ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                    </button>
                  </div>
                  
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{resource.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 capitalize">{resource.category}</span>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      Visit
                      <FiExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;