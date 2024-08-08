import Button from "./Button";
import PropTypes from "prop-types";

const SampleProject = ({ project }) => {
  return (
    <div className="my-12 flex flex-col items-center gap-4 p-6 text-center md:my-16 md:flex-row md:p-8 md:text-left">
      <div className="flex-1 md:flex-[1.2]">
        <img
          src={project.imgSrc}
          alt={`Screenshot of ${project.title}`}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex-1 md:flex-[0.8] md:pr-2 lg:pr-12">
        <h3 className="text-xl font-bold text-[#111111] dark:text-[#f5f5f5] md:text-xl lg:text-2xl">
          {project.title}
        </h3>
        <p className="my-3 md:my-2 lg:my-4">{project.description}</p>
        <Button
          buttonName="VIEW PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          href={project.href}
        />
      </div>
    </div>
  );
};

SampleProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default SampleProject;
