import { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Real-Time Geolocation Tracker",
      short: "Live location tracking using Socket.IO + Leaflet",
      description: `
This project is a real-time geolocation tracking system that enables users to share and visualize live location data dynamically on a map.

It is built using a full-stack architecture where the frontend is developed with HTML, CSS, and JavaScript, and the backend uses Node.js with Express. Real-time communication between clients is achieved using Socket.IO, which allows continuous bidirectional data flow without refreshing the page.

The application integrates Leaflet.js for rendering interactive maps, where each user’s position is updated in real time. As users move, their coordinates are captured using the browser’s Geolocation API and transmitted to the server via WebSockets. The server then broadcasts these updates to all connected clients instantly.

Key features include:
- Real-time location updates without page reload
- Multiple user tracking on a shared map
- Dynamic marker updates using Leaflet
- Efficient event-driven architecture using Socket.IO

This project demonstrates strong understanding of real-time systems, WebSocket communication, and full-stack development.
      `,
      github:
        "https://github.com/Bhargavredddy/Real-Time-Geolocation-Tracking-",
      live: "https://real-time-tracker-82qx.onrender.com/",
      tech: ["Node.js", "Express", "Socket.IO", "Leaflet", "WebSockets"],
    },

   {
  title: "AI Directory Management System",
  short: "AI-powered intelligent directory search system",
  description: `
This project is an AI-powered directory management system designed to provide intelligent and efficient data retrieval using modern web technologies and machine learning concepts.

The system is built using a full-stack architecture where the frontend is developed with React for a responsive and dynamic user interface, while the backend is powered by Node.js and Express. MongoDB is used as the database to store structured directory data.

One of the key features of this system is the integration of AI-based search capabilities using NLP (Natural Language Processing) techniques. Instead of traditional keyword-based search, users can perform smart queries, and the system retrieves the most relevant results intelligently.

Authentication is implemented using JWT (JSON Web Tokens), ensuring secure user login and access control. The system supports CRUD operations, allowing users to create, update, and manage directory entries efficiently.

Key features include:
- AI-powered intelligent search using NLP concepts
- Secure authentication using JWT
- Full CRUD functionality for directory management
- Responsive frontend built with React
- Scalable backend using Node.js and Express
- Efficient data handling using MongoDB

This project demonstrates strong understanding of full-stack development, authentication systems, database management, and the integration of AI concepts into real-world applications. It can be extended for enterprise directory systems, smart search platforms, and organizational data management solutions.
  `,
  github:
    "https://github.com/Bhargavredddy/Ai-powerd-directory-management-system",
  live: "#",
  tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "NLP"],
},

    {
  title: "Hand Gesture Arpeggiator",
  short: "Generate music using real-time hand gestures",
  description: `
This project is an interactive web-based music system that generates arpeggios and drum patterns in real time using hand gesture recognition.

The application leverages MediaPipe for accurate hand tracking and gesture detection directly through the browser using a webcam. The detected hand movements are mapped to musical parameters such as pitch, rhythm, and tempo.

Three.js is used to create dynamic 3D audio-reactive visualizations, providing an immersive visual experience synchronized with the generated music. Tone.js is integrated for real-time audio synthesis and playback, enabling users to produce complex musical patterns without any physical instruments.

The system processes gesture inputs in real time and converts them into musical signals, allowing users to interact with sound through intuitive hand movements.

Key features include:
- Real-time hand tracking using MediaPipe
- Gesture-based control of musical notes and rhythms
- Audio synthesis using Tone.js
- Interactive 3D visualizations using Three.js
- Fully browser-based performance system

This project demonstrates strong skills in computer vision, real-time processing, audio programming, and interactive UI development. It can be extended for virtual instruments, music education tools, and immersive digital performances.
  `,
  github: "https://github.com/Bhargavredddy/Hand-Gesture-Arpeggiator",
  live: "https://arpeggiator-two.vercel.app/",
  tech: ["MediaPipe", "Three.js", "Tone.js", "JavaScript", "Web Audio API"],
},
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      
      <h1 className="text-4xl text-neonBlue font-bold glow text-center">
        Projects
      </h1>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(p)}
            className="cursor-pointer p-6 rounded-xl border border-gray-800 
                       hover:border-neonBlue hover:shadow-[0_0_25px_#00f0ff]
                       hover:-translate-y-2 transition"
          >
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p className="text-gray-400 mt-3">{p.short}</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          
          <motion.div
            className="bg-black border border-gray-700 rounded-xl p-8 max-w-2xl w-full overflow-y-auto max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-neonBlue">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 mt-4 whitespace-pre-line">
              {selectedProject.description}
            </p>

            {/* TECH STACK */}
            {selectedProject.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-neonBlue rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-6 flex gap-4">

              {selectedProject.github !== "#" && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="px-6 py-2 border border-neonBlue rounded-lg 
                             hover:bg-neonBlue hover:text-black transition"
                >
                  GitHub
                </a>
              )}

              {selectedProject.live !== "#" && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  className="px-6 py-2 border border-neonBlue rounded-lg 
                             hover:bg-neonBlue hover:text-black transition"
                >
                  Live Demo
                </a>
              )}

            </div>

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 text-red-400 hover:text-red-600"
            >
              Close
            </button>

          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Projects;