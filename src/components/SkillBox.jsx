const SkillBox = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Git",
    "Responsive Design",
    "GitHub",
    "SEO",
    "Terminal",
    "SASS",
    "MongoDB",
    "Testing",
    "TypeScript",
    "Node",
    "Express",
    "Next",
    "Prisma",
  ];

  return (
    <ul
      className="flex list-none flex-wrap justify-center gap-3 md:justify-normal"
      role="list"
      aria-label="Skills"
    >
      {skills.map((skill, index) => (
        <li
          key={index}
          className="inline-block rounded bg-[#e7e7e7] px-3 py-2 font-bold dark:bg-[#333333]"
          role="listitem"
          aria-label={`Skill: ${skill}`}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};

export default SkillBox;
