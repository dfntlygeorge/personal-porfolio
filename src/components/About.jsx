import Button from "./Button";
import SkillBox from "./SkillBox";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto scroll-mt-16 bg-[#f0f0f0] px-4 py-20 dark:bg-[#232323] md:px-8"
      aria-labelledby="about-heading"
    >
      <SectionTitle
        title="ABOUT ME"
        desc="Learn about my background, work, and current programming skills."
      />
      <div className="container mx-auto mt-2 flex flex-col gap-12 text-center md:mt-8 md:flex-row md:gap-8 md:text-left">
        <div className="flex-[1.3] md:ml-16 lg:flex-1">
          <h3
            id="about-heading"
            className="text-3xl font-bold tracking-wide text-teal-600"
          >
            I build web applications
          </h3>
          <p className="mt-4 text-sm md:text-[16px]">
            I am a <strong>dedicated Frontend Web Developer</strong> currently
            pursuing a college degree. I focus on building and enhancing the{" "}
            <strong>front-end of websites and web applications</strong>,
            specializing in <strong>intuitive, user-friendly interfaces</strong>{" "}
            that drive project success.
          </p>
          <p className="mt-4 text-sm md:text-[16px]">
            With a strong foundation in <strong>frontend technologies</strong>{" "}
            and effective communication skills in English, I am keen to explore{" "}
            <strong>job opportunities</strong> where I can leverage my
            expertise, learn new techniques, and grow professionally.
          </p>
          <p className="mb-6 mt-4 text-sm md:text-[16px] lg:mb-8">
            Check out my <strong>Projects section</strong> for examples of my
            work. If you have opportunities that match my skills, I’d love to
            connect.
          </p>
          <Button buttonName="SEE MY WORKS" href={"#projects"} />
        </div>
        <div className="flex-1">
          <h3 className="mb-4 text-3xl font-bold tracking-wide text-teal-600">
            My Skills
          </h3>
          <SkillBox />
        </div>
      </div>
    </section>
  );
};

export default About;
