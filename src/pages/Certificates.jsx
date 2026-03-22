import { useState } from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Workshop on Data Visualization - LetsUpgrade",
      link: "https://drive.google.com/file/d/17E9f7WAXxR7L_q4f8orSB7HdPJ3LeesE/preview",
    },
    {
      title: "Responsive Web Design - FreeCodeCamp",
      link: "https://drive.google.com/file/d/1ag51lJTQCE8dxSC6ot9WXe04M_wvqoxD/preview",
    },
    {
      title: "Computer Networking - Coursera",
      link: "https://drive.google.com/file/d/1wWbVO_1sueys5CcPOP2SRX11DcPaK-s9/preview",
    },
    {
      title: "Full Stack Internship - InternsElite",
      link: "https://drive.google.com/file/d/1SSzC31EejROxtsO7tCiQvsnb2E0Bg2Gr/preview",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      
      <h1 className="text-4xl text-neonBlue font-bold glow text-center">
        Certificates
      </h1>

      {/* CERTIFICATE CARDS */}
      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {certificates.map((cert, i) => (
          <div
            key={i}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer p-6 border border-gray-700 rounded-xl text-center 
                       hover:border-neonBlue hover:shadow-[0_0_20px_#00f0ff]
                       hover:scale-105 transition duration-300"
          >
            <h2 className="text-lg text-white">{cert.title}</h2>
            <p className="text-gray-400 mt-2">Click to view</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <motion.div
            className="bg-black border border-gray-700 rounded-xl p-4 w-[90%] max-w-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="text-red-400 hover:text-red-600"
              >
                ✖
              </button>
            </div>

            {/* EMBED CERTIFICATE */}
            <iframe
              src={selectedCert.link}
              title="Certificate"
              className="w-full h-[500px] rounded-lg"
            ></iframe>

          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Certificates;