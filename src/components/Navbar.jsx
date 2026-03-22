import { Link } from "react-scroll";

const Navbar = () => {
  const linkClass =
    "cursor-pointer hover:text-neonBlue transition duration-300";

  const activeClass = "text-neonBlue glow";

  return (
    <div className="fixed top-0 w-full bg-black/50 backdrop-blur-md border-b border-gray-800 z-50">
      
      <div className="flex justify-between items-center px-8 py-4">
        
        <h1 className="text-xl font-bold text-neonBlue glow">
          Bhargav Portfolio
        </h1>

        <div className="flex gap-6 text-gray-300">

          <Link to="about" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            About
          </Link>

          <Link to="skills" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Skills
          </Link>

          <Link to="projects" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Projects
          </Link>

          <Link to="training" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Training
          </Link>

          <Link to="certificates" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Certificates
          </Link>

          <Link to="resume" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Resume
          </Link>

          <Link to="achievements" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Achievements
          </Link>

          <Link to="contact" smooth duration={500} spy activeClass={activeClass} className={linkClass}>
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;