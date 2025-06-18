import React, { useEffect, useState } from "react";
import fallbackProfile from "../assets/pic.png";
import theme_pattern from "../assets/theme_pattern.svg";

const LEETCODE_USERNAME = "ravichandra_ls";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`
        );
        const data = await response.json();
        setStats(data);
      } catch (e) {
        setStats(null);
      }
      setLoading(false);
    };

    fetchStats();
  }, []);

  if (loading)
    return <div className="text-center py-5">Loading LeetCode stats...</div>;
  if (!stats)
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load stats.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#161513] to-[#232526] text-white">
      <section id="leetcode" className="py-5 bg-[#18181b] text-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title with theme pattern behind */}
          <div
            className="relative flex justify-center sm:justify-start mb-10 items-center pl-1"
            data-aos="fade-down"
          >
            <span className="absolute left-1/2 sm:left-12 top-1/3 -translate-x-1/2 sm:-translate-x-0 -translate-y-1/3 z-0 pointer-events-none">
              <img
                src={theme_pattern}
                alt="Theme Pattern"
                className="w-36 h-11 md:w-44 md:h-16 opacity-40"
                style={{ objectFit: "contain" }}
              />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold relative z-10 px-4 bg-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-center sm:text-left">
              LeetCode Profile
            </h1>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center gap-6 mb-8"
            data-aos="fade-up"
          >
            <img
              src={
                stats.avatar && stats.avatar !== ""
                  ? stats.avatar
                  : fallbackProfile
              }
              alt={stats.username}
              className="w-20 h-20 rounded-full border-4 border-yellow-400 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackProfile;
              }}
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">
                {stats.name || stats.username}
              </h1>
              <p className="text-yellow-400 pb-4">
                Ranking: {stats.ranking ?? "N/A"}
              </p>
              <div className="grid grid-cols-2 w-full max-w-3xl mx-auto gap-x-8 gap-y-2">
                {/* Left column */}
                <div>
                  <p className="text-gray-400">
                    Country:{" "}
                    <span className="font-normal">{stats.country || "N/A"}</span>
                  </p>
                  <p className="text-gray-400">
                    Contribution Points:{" "}
                    <span className="font-normal">
                      {stats.contributionPoints ?? "N/A"}
                    </span>
                  </p>
                </div>
                {/* Right column */}
                <div className="text-right">
                  <p className="text-gray-400">
                    Reputation:{" "}
                    <span className="font-normal">{stats.reputation ?? "N/A"}</span>
                  </p>
                  <p className="text-gray-400">
                    Acceptance Rate:{" "}
                    <span className="font-normal">
                      {stats.acceptanceRate !== undefined &&
                      stats.acceptanceRate !== null &&
                      stats.acceptanceRate !== ""
                        ? `${stats.acceptanceRate}%`
                        : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-yellow-400 pt-10 text-center mt-6 sm:pt-4 sm:mt-0 sm:text-left">
                Total Solved:{" "}
                <span className="font-normal">
                  {stats.totalSolved ?? "N/A"} / {stats.totalQuestions ?? "N/A"}
                </span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center mb-8">
            <div
              className="bg-[#232526] rounded-xl p-6 shadow-lg"
              data-aos="fade-right"
            >
              <h2 className="text-xl font-bold text-yellow-400">Easy</h2>
              <p className="text-3xl font-bold">{stats.easySolved}</p>
              <p className="text-gray-400">/ {stats.totalEasy}</p>
            </div>
            <div
              className="bg-[#232526] rounded-xl p-6 shadow-lg"
              data-aos="fade-up"
            >
              <h2 className="text-xl font-bold text-yellow-400">Medium</h2>
              <p className="text-3xl font-bold">{stats.mediumSolved}</p>
              <p className="text-gray-400">/ {stats.totalMedium}</p>
            </div>
            <div
              className="bg-[#232526] rounded-xl p-6 shadow-lg"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-yellow-400">Hard</h2>
              <p className="text-3xl font-bold">{stats.hardSolved}</p>
              <p className="text-gray-400">/ {stats.totalHard}</p>
            </div>
          </div>
          <div className="my-8" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              LeetCode Stats & Heatmap
            </h2>
            <div className="bg-[#232526] rounded-xl p-4 shadow-lg w-full flex justify-center">
              <img
                src="https://leetcard.jacoblin.cool/ravichandra_ls?theme=dark&ext=heatmap"
                alt="LeetCode Stats Card"
                className="w-full max-w-2xl sm:max-w-3xl mx-auto rounded-lg object-contain sm:max-h-64"
              />
            </div>
          </div>
          <div className="mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">
              Recent Submissions
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-[#232526] rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-yellow-400">Title</th>
                    <th className="py-2 px-4 text-left text-yellow-400">
                      Status
                    </th>
                    <th className="py-2 px-4 text-left text-yellow-400">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentSubmissions?.slice(0, 5).map((sub, idx) => (
                    <tr key={idx} className="border-t border-gray-700">
                      <td className="py-2 px-4">
                        <a
                          href={`https://leetcode.com/problems/${sub.titleSlug}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {sub.title}
                        </a>
                      </td>
                      <td className="py-2 px-4 text-gray-400">
                        {sub.statusDisplay}
                      </td>
                      <td className="py-2 px-4 text-gray-400">
                        {new Date(sub.timestamp * 1000).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeetCodeStats;
