// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';

// const InfluncerDetails = () => {
//   const { index } = useParams();
//   const [influencer, setInfluencer] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/data/${index}`, { withCredentials: true })
//       .then(res => setInfluencer(res.data))
//       .catch(err => console.error("Error fetching influencer:", err));
//   }, [index]);

//   if (!influencer) {
//     return <div className="text-center text-white p-6">Loading influencer details...</div>;
//   }

//   return (
//     <div className="bg-amber-800 min-h-screen p-6 text-white">
//       <div className="max-w-md mx-auto bg-amber-600 rounded-lg p-6 shadow-lg text-center">
//         <img
//           src={influencer.profilePic}
//           alt={influencer.name}
//           className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
//         />
//         <h2 className="text-2xl font-bold mb-2">{influencer.name}</h2>
//         <p className="text-lg">{influencer.category}</p>
//         <p className="mt-2 font-bold">{influencer.followers.toLocaleString()} followers</p>

//         <div className="mt-4">
//           <a href={influencer.socialLinks.instagram} target="_blank" rel="noreferrer" className="block text-blue-200 hover:underline">Instagram</a>
//           <a href={influencer.socialLinks.youtube} target="_blank" rel="noreferrer" className="block text-red-200 hover:underline">YouTube</a>
//           <a href={influencer.socialLinks.twitter} target="_blank" rel="noreferrer" className="block text-sky-200 hover:underline">Twitter</a>
//         </div>

//         <Link to="/influncer" className="mt-6 inline-block bg-white text-amber-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-200">
//           Back to List
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default InfluncerDetails;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const InfluncerDetails = () => {
  const { id } = useParams(); // using id (not index)
  const [influencer, setInfluencer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://react-project-backend-5s0n.onrender.com/api/data/${id}`, { withCredentials: true })
      .then(res => setInfluencer(res.data))
      .catch(err => console.error("Error fetching influencer:", err));
  }, [id]);

  if (!influencer) {
    return <div className="text-center text-white p-6">Loading influencer details...</div>;
  }

  // Followers priority: YouTube > Instagram
  const ytFollowers = influencer.platforms?.youtube?.followers || 0;
  const igFollowers = influencer.platforms?.instagram?.followers || 0;
  const totalFollowers = ytFollowers || igFollowers || "N/A";

  return (
    <div className="bg-amber-800 min-h-screen p-6 text-white">
      <div className="max-w-md mx-auto bg-amber-600 rounded-lg p-6 shadow-lg text-center">
        
        {/* Profile pic or fallback */}
        {influencer.profilePic ? (
          <img
            src={influencer.profilePic}
            alt={influencer.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center rounded-full mx-auto mb-4 border-4 border-white bg-amber-900 text-3xl font-bold">
            {influencer.name.charAt(0)}
          </div>
        )}

        <h2 className="text-2xl font-bold mb-2">{influencer.name}</h2>
        <p className="text-lg">
          {Array.isArray(influencer.category) ? influencer.category.join(", ") : influencer.category}
        </p>
        <p className="mt-2 font-bold">{totalFollowers.toLocaleString()} followers</p>
        <p className="text-sm italic">{influencer.location}</p>

        {/* Social Links */} 
        <div className="mt-4 space-y-2">
          {influencer.platforms?.instagram?.url && (
            <a href={influencer.platforms.instagram.url} target="_blank" rel="noreferrer" className="block text-pink-200 hover:underline">
              Instagram ({influencer.platforms.instagram.followers?.toLocaleString() || "N/A"})
            </a>
          )}
          {influencer.platforms?.youtube?.url && (
            <a href={influencer.platforms.youtube.url} target="_blank" rel="noreferrer" className="block text-red-200 hover:underline">
              YouTube ({influencer.platforms.youtube.followers?.toLocaleString() || "N/A"})
            </a>
          )}
          {influencer.platforms?.twitter?.url && (
            <a href={influencer.platforms.twitter.url} target="_blank" rel="noreferrer" className="block text-sky-200 hover:underline">
              Twitter ({influencer.platforms.twitter.followers?.toLocaleString() || "N/A"})
            </a>
          )}
        </div>

        {/* Back button */}
        <Link 
          to="/influncer" 
          className="mt-6 inline-block bg-white text-amber-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-200"
        >
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default InfluncerDetails;
