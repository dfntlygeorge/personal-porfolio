import SocialBox from "./SocialBox";

const SideSocials = () => {
  return (
    <aside
      className="fixed left-1 top-[40%] hidden flex-col items-center rounded-lg bg-teal-600 px-3 py-8 transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-[#282828] md:flex"
      aria-label="Social Media Links"
    >
      <SocialBox className="flex-col gap-5" />
    </aside>
  );
};

export default SideSocials;
