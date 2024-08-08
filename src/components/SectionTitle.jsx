import PropTypes from "prop-types";

const SectionTitle = ({ title, desc, className }) => {
  return (
    <section
      className={`mx-auto w-11/12 py-10 text-center sm:w-10/12 md:w-3/4 md:px-6 ${className}`}
      aria-labelledby="section-title"
    >
      <header>
        <h2
          id="section-title"
          className="text-2xl font-bold tracking-wide text-[#111111] dark:text-[#f5f5f5] sm:text-3xl md:text-4xl"
          role="heading"
          aria-level="2"
        >
          {title}
        </h2>
      </header>
      <span
        className="my-4 inline-block h-1.5 w-8 rounded bg-teal-600 dark:bg-teal-700"
        aria-hidden="true"
      ></span>
      <p className="lg:text-lg">{desc}</p>
    </section>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string,
};
