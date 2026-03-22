import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl text-neonBlue font-bold glow">
        About Me
      </h1>

      <p className="mt-4 text-gray-400 max-w-xl">
  I am Bhargav Reddy, an AI/ML student from Lovely Professional University, passionate about building intelligent systems, real-time applications, and automation workflows.
</p>
    </motion.div>
  );
};

export default About;