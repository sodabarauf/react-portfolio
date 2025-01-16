import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, liveLink, sourceCode }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-3">{description}</p>
        <div className="flex mt-5 gap-5">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red text-white py-2 px-4 rounded hover:bg-dark-red transition"
          >
            Live Demo
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white py-2 px-4 rounded hover:bg-dark-blue transition"
          >
            Source Code
          </a>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have completed over 30 projects in web development. Here are some of
          my best projects. Click on the images to view more details.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            description="a advanced Next.js application that demonstrates the capabilities of Next.js, using API and its key for fetching, also this app show recent weather of cities."
            liveLink="https://weather-ricj7gwx4-sodabaraufs-projects.vercel.app/"
            sourceCode="https://github.com/sodabarauf/weather-app"
          />
          <Project
            title="Project 2"
            description="web application built with react and redux and spaceXAPI. Users can view rockets and missions and create resrvations."
            liveLink="https://space-travelers-hub-1shn-242g807sm-sodabaraufs-projects.vercel.app/"
            sourceCode="https://github.com/sodabarauf/space-travelers-hub"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            description="Hi guys welcome to my first react app. i make this project because of implementing HTML CSS and js as jsx components in thus html and js in root component of app.js."
            liveLink="https://random-quote-machine-4yjl0ra4z-sodabaraufs-projects.vercel.app/"
            sourceCode="https://github.com/sodabarauf/random-quote-machine"
          />
          <Project
            title="Project 4"
            description=" i make this project because of implementing HTML CSS and Js by using figma design and it was so interesting this was new thing for me i never do that before, cause UI/UX designer create this design and i implement it."
            liveLink="https://sodabarauf.github.io/js-main-portfolio/"
            sourceCode="https://github.com/sodabarauf/js-main-portfolio"
          />
          <Project
            title="Project 5"
            description="That is a roman numeral converter. that change the arabic number to romal number worked in a interval, also has good responsive design."
            liveLink="https://sodabarauf.github.io/numerial-roman/"
            sourceCode="https://github.com/sodabarauf/numerial-roman"
          />

          {/* ROW 3 */}
          <Project
            title="Project 6"
            description="Book system a simple Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user and course collections stored in a MongoDB database in its compass. The API interacts with a Mongoose model to manage course data."
            liveLink="https://book-system-lemon.vercel.app/"
            sourceCode="https://github.com/sodabarauf/book-system"
          />
          <Project
            title="Project 7"
            description="LMS system a simple Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user and course collections stored in a MongoDB database in its compass. The API interacts with a Mongoose model to manage course data."
            liveLink="https://lms-system-po5w-phpogrxzk-sodabaraufs-projects.vercel.app/courses"
            sourceCode="https://github.com/sodabarauf/LMS-system"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
