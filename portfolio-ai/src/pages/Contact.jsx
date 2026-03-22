import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-4xl text-neonBlue font-bold glow">
        Contact
      </h1>

      <p className="mt-4 text-gray-400">
        Let's connect and build something amazing 🚀
      </p>

      <div className="mt-8 space-y-6 text-lg">

        {/* EMAIL */}
        <a
          href="mailto:bhargavreddyy23@gmail.com"
          className="flex items-center gap-3 justify-center hover:text-neonBlue transition"
        >
          <FaEnvelope />
          bhargavreddyy23@gmail.com
        </a>

        {/* PHONE */}
        <div className="flex items-center gap-3 justify-center">
          <FaPhone />
          +91 8074383288
        </div>

        {/* GITHUB */}
        <a
          href="https://github.com/Bhargavredddy"
          target="_blank"
          className="flex items-center gap-3 justify-center hover:text-neonBlue transition"
        >
          <FaGithub />
          github.com/Bhargavredddy
        </a>

        {/* LINKEDIN */}
        {/* LINKEDIN */}
<a
  href="https://www.linkedin.com/in/bhargav-reddyy/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 justify-center hover:text-neonBlue transition"
>
  <FaLinkedin />
  linkedin.com/in/bhargav-reddyy
</a>

      </div>
    </motion.div>
  );
};

export default Contact;