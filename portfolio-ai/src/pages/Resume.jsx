import { motion } from "framer-motion";

const Resume = () => {
  const viewLink =
    "https://drive.google.com/file/d/1f4Sahep0yzuA7VefVVLkpE30aR1772qm/view";

  const downloadLink =
    "https://drive.google.com/uc?export=download&id=1f4Sahep0yzuA7VefVVLkpE30aR1772qm";

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl text-neonBlue font-bold glow">
        Resume
      </h1>

      <p className="mt-4 text-gray-400">
        View or download my resume
      </p>

      <div className="mt-8 flex gap-6">

        <a
          href={viewLink}
          target="_blank"
          className="px-6 py-3 border border-neonBlue rounded-lg 
                     hover:bg-neonBlue hover:text-black 
                     hover:scale-105 transition duration-300"
        >
          View Resume
        </a>

        <a
          href={downloadLink}
          className="px-6 py-3 border border-neonBlue rounded-lg 
                     hover:bg-neonBlue hover:text-black 
                     hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>

      </div>
    </motion.div>
  );
};

export default Resume;