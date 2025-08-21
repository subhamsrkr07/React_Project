import React from 'react'
import bhuvan from "../assets/bhuvan.jpeg"

const Section1 = () => {
  return (
    // <div className=' h-[70vh] w-[100%] flex  flex-col items-center justify-center bg-red-900'>
    //   <h1 className='text-[40px] text-black'>This is the Influncer page</h1>
    //   <p className='text-[20px] text-yellow-400'>we have colleect the influncer for better exprience and good improvment</p>
    // </div>
     <section className="bg-gradient-to-r from-red-300 to-purple-50 min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-40">
      
      {/* Left Content */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Connect with <span className="text-indigo-600">Top Influencers</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          We bring you a curated list of influencers to boost your brand’s reach and engagement with authentic collaborations.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700 transition-all">
            Explore Influencers
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg text-lg hover:bg-indigo-50 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img
          src={bhuvan}
          alt="Influencers"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Section1
