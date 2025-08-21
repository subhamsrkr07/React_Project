import React from 'react'

const Ourpolicy = () => {

    const policies = [
    {
      title: "Transparency First",
      desc: "We believe in complete transparency between influencers and brands. All terms are clearly stated before collaboration.",
      icon: "📜",
    },
    {
      title: "Data Privacy",
      desc: "Your personal data is secure with us. We never share your information without consent.",
      icon: "🔒",
    },
    {
      title: "Fair Payment Policy",
      desc: "Payments are processed only after both parties are satisfied with the work delivered.",
      icon: "💰",
    },
    {
      title: "Authenticity Guarantee",
      desc: "We ensure that all influencers are real and have genuine followers, avoiding fake engagement.",
      icon: "✅",
    },
    {
      title: "24/7 Support",
      desc: "Our support team is available around the clock to assist you with any concerns.",
      icon: "📞",
    },
  ];

  return (
    //   <div className=' h-[20vh] w-[100%] flex  flex-col items-center justify-center bg-pink-900'>
    //   <h1 className='text-[40px] text-black'>This is the Influncer page</h1>
    //   <p className='text-[20px] text-yellow-400'>we have colleect the influncer for better exprience and good improvment</p>
    // </div>

     <section className="bg-gradient-to-r from-red-300 to-purple-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-indigo-600">Policies</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We’ve built our policies to create trust, protect privacy, and ensure fair business practices for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{policy.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600">{policy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ourpolicy
