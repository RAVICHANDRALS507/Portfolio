import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";

const Certification = () => {
  return (
    <section id="certificate" className="py-20 bg-[#161513] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-3xl font-bold">My Achievements</h1>
          <img src={theme_pattern} alt="" className="h-8" />
        </div>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center bg-[#232526] rounded-xl p-6 shadow-lg gap-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png"
              alt=""
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">
                Research Paper on Optimized Processing to detect Breast Cancer
              </h2>
              <small className="text-yellow-400">2025</small>
              <p className="text-gray-300 mt-2">
                Presented at the 5th International Conference on Smart Data
                Intelligence (ICSMDI-2025) organised by Kongunadu College of
                Engineering and Technology, Trichy, Tamil Nadu, India on January
                9-10, 2025.
              </p>
              <a
                className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                href="https://drive.google.com/file/d/15H89jz716wAxXgwTNKiGK4NrKY3P0c16/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-[#232526] rounded-xl p-6 shadow-lg gap-6">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png"
              alt=""
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">Problem Solving (Basic)</h2>
              <small className="text-yellow-400">2025</small>
              <p className="text-gray-300 mt-2">
                Gained a Certificate in Problem Solving Basic Java(DSA) in
                HackerRank.
              </p>
              <a
                className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                href="https://www.hackerrank.com/certificates/4718d83138a7"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-[#232526] rounded-xl p-6 shadow-lg gap-6">
            <img
              src="https://cdn.dribbble.com/users/2410782/screenshots/8192199/media/a152b89721e1b17597aff54afbdef152.jpg?compress=1&resize=1600x1200&vertical=top"
              alt=""
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">HacktoberFest contributor</h2>
              <small className="text-yellow-400">2024</small>
              <p className="text-gray-300 mt-2">
                Participated in HacktoberFest 2024 Open Source contribution
                which was conducted in the month of October 1-30, contributed to
                open source and created 4 Merge Requests successfully and
                completed the target.
              </p>
              <a
                className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                href="https://www.holopin.io/@ravichandrals507#badges"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-[#232526] rounded-xl p-6 shadow-lg gap-6">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.GX2bulWXKWnH05DT0SWfDwHaHa&pid=Api&P=0&h=180"
              alt=""
              className="w-20 h-20 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold">CodSoft Internship</h2>
              <small className="text-yellow-400">July-August 2024</small>
              <p className="text-gray-300 mt-2">
                Did an Internship at CodSoft which was 4 weeks, created a
                responsive design portfolio.
              </p>
              <a
                className="inline-block mt-2 px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
