import React from 'react'

const About = () => {
  const highlights = [
    {
      title: "Our Mission",
      desc: "To connect brands with the right influencers and foster authentic, impactful collaborations that drive growth.",
      icon: "🎯",
    },
    {
      title: "Our Vision",
      desc: "A world where every brand, big or small, can leverage influencer marketing to reach their perfect audience.",
      icon: "🌍",
    },
    {
      title: "Our Values",
      desc: "Transparency, trust, and quality form the backbone of every project we undertake.",
      icon: "🤝",
    },
  ];
  return (
    // <div>
    //   <h1>about</h1>
    // </div>

     <section className="bg-gradient-to-r from-red-300 to-purple-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-indigo-600">Us</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          We are a passionate team dedicated to bridging the gap between brands
          and influencers. Our platform makes it easy to discover, connect, and
          collaborate with the right voices for your brand. Whether you are a
          startup or an established business, we help you grow with influencer
          marketing.
        </p>
      </div>

      {/* Highlights */}
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-[15px]">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-indigo-50  flex flex-col items-center justify-center p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Founded in 2025, InfluencerConnect started as a small initiative to
          help local brands collaborate with social media creators. Over time,
          we expanded globally, partnering with thousands of influencers across
          niches like fashion, tech, travel, and more. Our journey has been
          fueled by the belief that authentic marketing can change the way
          brands connect with people.
        </p>
      </div>
    </section>
    
  )
}

export default About
