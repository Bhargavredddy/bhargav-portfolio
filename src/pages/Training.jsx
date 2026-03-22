import { useState } from "react";
import { motion } from "framer-motion";

const Training = () => {
  const [selected, setSelected] = useState(null);

  const trainings = [
    {
      title: "Full Stack Development Training",
      org: "InternsElite",
      date: "2024",
      description: `
During this training, I gained strong foundational knowledge in full-stack web development.

I learned how to build complete web applications from frontend to backend. I worked with technologies like HTML, CSS, JavaScript, and basic backend concepts using Node.js.

Key learnings:
- Frontend development (HTML, CSS, JavaScript)
- Basics of backend development
- Understanding client-server architecture
- Building responsive web applications
- Working on mini-projects to apply concepts

This training helped me understand how web applications are structured and gave me confidence to start building real-world projects.
      `,
      cert: "https://drive.google.com/file/d/16nZN62ZYqhfNdYKDo7iuAaV1X-aWukQZ/preview",
    },

    {
      title: "AI Internship",
      org: "Vidhyashala",
      date: "Dec 2024 – Jan 2025",
      description: `
During my AI internship at Vidhyashala, I worked on building intelligent systems and automation workflows using modern AI tools and frameworks.

I gained hands-on experience in designing real-world AI applications and understanding how machine learning concepts are applied in practical scenarios.

Key learnings:
- Worked with AI tools like LangGraph
- Built automation pipelines
- Real-time data handling
- Applied AI concepts in mini-projects
- Improved problem-solving skills

This internship helped me bridge the gap between theory and real-world AI implementation.
      `,
      cert: "https://drive.google.com/file/d/1Ku-xFVn2Vz4_L9JpnoCI5ZiR9zUzi3Av/preview",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">

      <h1 className="text-4xl text-neonBlue font-bold glow text-center">
        Training
      </h1>

      {/* TRAINING LIST */}
      <div className="mt-10 max-w-2xl mx-auto space-y-6">
        {trainings.map((t, i) => (
          <div
            key={i}
            onClick={() => setSelected(t)}
            className="cursor-pointer p-5 border border-gray-700 rounded-lg 
                       hover:border-neonBlue hover:shadow-[0_0_15px_#00f0ff]
                       transition"
          >
            <h2 className="text-xl font-bold">
              {t.title} - {t.org}
            </h2>

            <p className="text-gray-400">{t.date}</p>

            <p className="text-gray-300 mt-2">
              Click to view details
            </p>
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
              {selected.title} - {selected.org}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mt-4 whitespace-pre-line">
              {selected.description}
            </p>

            {/* CERTIFICATE */}
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

          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Training;