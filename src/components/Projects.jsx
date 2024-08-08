import SampleProject from "./SampleProject";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  const projects = [
    {
      title: "Samsung Landing Page Clone",
      description:
        "I crafted this Samsung landing page clone to showcase my skills in creating responsive, visually accurate web designs.",
      imgSrc: "/public/assets/samsung.png",
    },
    {
      title: "News App with Real-Time Updates",
      description:
        "I developed this news app using NewsAPI to demonstrate my ability to integrate and display live news data effectively.",
      imgSrc: "/public/assets/newsapp.png",
    },
    {
      title: "Enhanced Vivamax Landing Page",
      description:
        "I improved this Vivamax landing page to exhibit my skills in modern web design and responsive layouts.",
      imgSrc: "/public/assets/vivamax.png",
    },
    {
      title: "Starbucks Landing Page Clone",
      description:
        "I recreated this Starbucks landing page to highlight my proficiency in mimicking complex, brand-centric web designs.",
      imgSrc: "/public/assets/starbucks.png",
    },
  ];

  // Add more project objects as needed

  return (
    <section
      className="container mx-auto scroll-mt-36"
      aria-labelledby="projects-section"
      id="projects"
    >
      <SectionTitle
        title="PROJECTS"
        desc="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
        className={"my-0 mt-20 sm:mt-24"}
      />
      {projects.map((project, index) => (
        <SampleProject key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
