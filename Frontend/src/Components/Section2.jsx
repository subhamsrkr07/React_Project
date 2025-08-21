import React from 'react'

const Section2 = () => {
     const features = [
    {
      title: "Verified Influencers",
      desc: "We verify every influencer to ensure real engagement and authentic audiences.",
      icon: "✅",
    },
    {
      title: "Smart Search Filters",
      desc: "Find influencers by niche, location, audience size, and engagement rate.",
      icon: "🔍",
    },
    {
      title: "Secure Payments",
      desc: "Pay safely through our platform with guaranteed project completion.",
      icon: "💳",
    },
  ];
  return (
    // <div>
    //    <div className=' h-[70vh] w-[100%] flex  flex-col items-center justify-center bg-green-900'>
    //   <h1 className='text-[40px] text-black'>This is the Influncer page</h1>
    //   <p className='text-[20px] text-yellow-400'>we have colleect the influncer for better exprience and good improvment</p>
    // </div>
    // </div>

     <section className="bg-gradient-to-r from-red-300 to-purple-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-indigo-600">Us?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We make influencer collaborations simple, transparent, and effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section2
