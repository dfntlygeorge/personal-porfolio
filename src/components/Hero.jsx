import Button from "./Button";
const Hero = () => {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-screen flex-col items-center justify-center bg-hero-light px-4 text-center dark:bg-hero-dark md:flex-row"
    >
      <div className="container flex flex-col gap-4 pt-24 text-[#111111] dark:text-[#f5f5f5] lg:w-2/3">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          HEY, I&apos;M KONRADS DONAYRE
        </h1>
        <p className="text-xl md:px-12">
          Building websites by day, dreaming about pasta and cats by night. I
          turn code into sleek, user-friendly designs that even my cat would
          approve of.
        </p>
        <div className="flex justify-center">
          <Button buttonName="SEE MY WORKS" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
