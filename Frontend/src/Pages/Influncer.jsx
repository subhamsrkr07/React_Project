
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Influncer = () => {
  const [influncers, setInfluncers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/data/", { withCredentials: true })
      .then(res => setInfluncers(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="bg-amber-800 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Influencer Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {influncers.map((inf, index) => {
          // Find highest follower count (YouTube > Instagram if available)
          const ytFollowers = inf.platforms?.youtube?.followers || 0;
          const igFollowers = inf.platforms?.instagram?.followers || 0;
          const totalFollowers = ytFollowers || igFollowers || "N/A";

          return (
            <div
              key={inf.id || index}
              className="bg-amber-600 rounded-lg p-4 text-center shadow-lg cursor-pointer"
              onClick={() => navigate(`/influncer/${inf.id}`)}
            >
              {/* Profile Pic (placeholder if none) */}
              {inf.profilePic ? (
                <img
                  src={inf.profilePic}
                  alt={inf.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-white"
                />
              ) : (
                <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-3 border-2 border-white bg-amber-900 text-xl font-bold">
                  {inf.name.charAt(0)}
                </div>
              )}

              <h3 className="text-xl font-semibold">{inf.name}</h3>
              <p className="text-sm">{Array.isArray(inf.category) ? inf.category.join(", ") : inf.category}</p>
              <p className="font-bold">{totalFollowers.toLocaleString()} followers</p>
              <p className="text-xs italic">{inf.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Influncer;
