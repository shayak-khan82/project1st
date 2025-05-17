import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode, FaUsers, FaChartLine, FaRegCalendarAlt } from 'react-icons/fa';
import { BsFillPersonCheckFill } from 'react-icons/bs';


function Home() {
  return (
    <>
     {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ace Your Next <span className="text-indigo-600">Technical Interview</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Practice with real interview questions, get instant feedback, and track your progress with our AI-powered mock interview platform.
              </p>
              <div className="flex space-x-4">
                <Link to="/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
                  Get Started - It's Free
                </Link>
                <Link to="/demo" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium transition duration-300">
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://tse4.mm.bing.net/th?id=OIP.y_LBSmxwyZqHztSONEihDwHaEO&pid=Api&P=0&h=180" 
                alt="Mock interview illustration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Users Practiced</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Interview Questions</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform helps you prepare for technical interviews at top tech companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaLaptopCode className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Practice Coding</h3>
              <p className="text-gray-600">
                Solve real interview questions with our coding environment that supports multiple languages.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <BsFillPersonCheckFill className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mock Interviews</h3>
              <p className="text-gray-600">
                Schedule mock interviews with experienced engineers or use our AI interviewer.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl hover:shadow-md transition duration-300">
              <div className="bg-indigo-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Get detailed feedback and track your improvement over time with analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Practice For Any Interview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUsers className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Behavioral Interviews</h3>
              <p className="text-gray-600 mb-4">
                Practice answering common behavioral questions with our AI evaluation system.
              </p>
              <Link to="/behavioral" className="text-blue-600 hover:underline">Start Practicing →</Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaLaptopCode className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Interviews</h3>
              <p className="text-gray-600 mb-4">
                Solve coding challenges in our IDE with auto-complete and syntax highlighting.
              </p>
              <Link to="/technical" className="text-green-600 hover:underline">Start Practicing →</Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaRegCalendarAlt className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">System Design</h3>
              <p className="text-gray-600 mb-4">
                Practice designing large-scale systems with our interactive whiteboard.
              </p>
              <Link to="/system-design" className="text-purple-600 hover:underline">Start Practicing →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-gray-600 text-sm">Software Engineer @ Google</p>
                </div>
              </div>
              <p className="text-gray-700">
                "MockMaster helped me land my dream job at Google. The realistic interview simulations were exactly what I needed to build confidence."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">AP</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alice Park</h4>
                  <p className="text-gray-600 text-sm">Frontend Developer @ Meta</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The behavioral interview practice was a game-changer. I learned how to structure my answers effectively."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-semibold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Miguel Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Backend Engineer @ Amazon</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Practicing system design questions on this platform prepared me perfectly for my Amazon interview loop."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ace Your Interview?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of candidates who have successfully prepared for their dream jobs with MockMaster.
          </p>
          <Link to="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 inline-block">
            Start Free Trial
          </Link>
        </div>
      </section>
      </>
  )
}

export default Home