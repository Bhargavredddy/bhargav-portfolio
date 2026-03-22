import { useState } from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  const achievements = [
    {
      title: "2nd Place - One India Cultural Event",
      desc: "Secured 2nd place at Lovely Professional University (April 2025).",
      details: `
Achieved 2nd place in the One India Cultural Event conducted at Lovely Professional University in April 2025.

This event focused on creativity, coordination, and performance skills. It helped me improve my confidence, teamwork, and ability to perform under competitive conditions.

This achievement reflects my ability to actively participate and excel in extracurricular activities along with technical growth.
      `,
      cert: null,
    },

    {
      title: "Code-A-Hunt Hackathon",
      desc: "Qualified for Round 2 in 24-hour hackathon by CodingBlocks LPU.",
      details: `
Participated in the Code-A-Hunt 24-hour Hackathon conducted by CodingBlocks at Lovely Professional University.

I successfully qualified for Round 2 by solving real-world problem statements under time constraints. This experience helped me enhance my problem-solving skills, logical thinking, and teamwork.

I worked on developing efficient solutions, debugging under pressure, and collaborating effectively with team members.
      `,
      cert: "https://drive.google.com/file/d/1pir_oR_wR8qFeDJJOEHoCcQYhjunkLV2/preview",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">

      <h1 className="text-4xl text-neonBlue font-bold glow text-center">
        Achievements
      </h1>

      {/* LIST */}
      <div className="mt-10 max-w-2xl mx-auto space-y-6">
        {achievements.map((a, i) => (
          <div
            key={i}
            onClick={() => setSelected(a)}
            className="cursor-pointer p-5 border border-gray-700 rounded-lg 
                       hover:border-neonBlue hover:shadow-[0_0_15px_#00f0ff]
                       transition"
          >
            <h2 className="text-xl font-bold">{a.title}</h2>
            <p className="text-gray-400 mt-2">{a.desc}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          
          <motion.div
            className="bg-black border border-gray-700 rounded-xl p-6 max-w-3xl w-full overflow-y-auto max-h-[85vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >

            {/* CLOSE */}
            <div className="flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="text-red-400 hover:text-red-600"
              >
                ✖
              </button>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-neonBlue">
              {selected.title}
            </h2>

            {/* DETAILS */}
            <p className="text-gray-400 mt-4 whitespace-pre-line">
              {selected.details}
            </p>

            {/* CERTIFICATE */}
            {selected.cert && (
              <div className="mt-6">
                <h3 className="text-lg text-neonBlue mb-2">
                  Certificate
                </h3>

                <iframe
                  src={selected.cert}
                  className="w-full h-[400px] rounded-lg"
                  title="Certificate"
                ></iframe>
              </div>
            )}

          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Achievements;