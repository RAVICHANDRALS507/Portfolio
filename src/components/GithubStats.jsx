import React, { useEffect, useState } from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import GitHubCalendar from "react-github-calendar";

const GITHUB_USERNAME = "RAVICHANDRALS507";
const REPO = "Portfolio";

const GitHubStats = () => {
  const [commits, setCommits] = useState([]);
  const [loadingCommits, setLoadingCommits] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      setLoadingCommits(true);
      try {
        const res = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO}/commits?per_page=5`
        );
        const data = await res.json();
        setCommits(Array.isArray(data) ? data : []);
      } catch {
        setCommits([]);
      }
      setLoadingCommits(false);
    };
    fetchCommits();
  }, []);

  return (
    <section id="github" className="py-5 bg-[#18181b] text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title with theme pattern */}
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
            GitHub Profile Stats
          </h1>
        </div>

        {/* GitHub Streak Stats */}
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=radical&hide_border=true`}
          alt="GitHub Streak"
          className="w-full max-w-xl rounded-lg shadow-lg justify-center mx-auto mb-8"
          data-aos="fade-up"
        />

        {/* Stats Cards */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 w-full">
          {/* GitHub Stats */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=radical&hide_border=true&count_private=true`}
            alt="GitHub Stats"
            className="w-full md:w-1/2 max-w-xl rounded-lg shadow-lg"
            data-aos="fade-right"
          />
          {/* Top Languages */}
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=radical&hide_border=true`}
            alt="Top Languages"
            className="w-full md:w-1/2 max-w-xl rounded-lg shadow-lg"
            data-aos="fade-left"
          />
        </div>

        {/* GitHub Heatmap */}
        <div className="w-full flex flex-col items-center my-8" data-aos="zoom-in">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Contribution Heatmap
          </h2>
          <div className="bg-[#232526] rounded-xl p-4 shadow-lg w-full flex justify-center">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              blockSize={15}
              blockMargin={5}
              color="#facc15"
              fontSize={16}
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Recent Commits */}
        <div className="w-full flex flex-col items-center my-8" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            Recent Commits
          </h2>
          <div className="w-full max-w-2xl bg-[#232526] rounded-xl p-4 shadow-lg overflow-x-auto">
            {loadingCommits ? (
              <div className="text-center text-gray-400">
                Loading commits...
              </div>
            ) : commits.length === 0 ? (
              <div className="text-center text-red-400">Failed to fetch Data</div>
            ) : (
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left text-yellow-400">
                      Message
                    </th>
                    <th className="py-2 px-4 text-left text-yellow-400">
                      Date
                    </th>
                    <th className="py-2 px-4 text-left text-yellow-400">
                      Repo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commits.map((commit) => (
                    <tr key={commit.sha} className="border-t border-gray-700">
                      <td className="py-2 px-4">
                        <a
                          href={commit.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {commit.commit.message.split("\n")[0]}
                        </a>
                      </td>
                      <td className="py-2 px-4 text-gray-400">
                        {new Date(commit.commit.author.date).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 text-gray-400">
                        {commit.repository?.name || REPO}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
