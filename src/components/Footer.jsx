import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white dark:bg-[#1e1e1e] dark:text-[#e0e0e0]">
      <div className="container mx-auto px-2 lg:px-6">
        <div className="flex flex-col items-center justify-between space-y-4 border-b border-[#e0e0e0] py-12 md:flex-row md:space-y-0 md:py-20">
          <div className="text-center md:w-3/4 md:text-left lg:w-1/2">
            <h3 className="text-xl font-bold">KONRADS DONAYRE</h3>
            <p className="mt-4 text-sm">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">SOCIAL</h3>
            <ul className="mt-4 flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/george-allen-donayre-570085316/"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedin
                    className="text-white dark:text-[#e0e0e0]"
                    size={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dfntlygeorge"
                  aria-label="GitHub"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub
                    className="text-white dark:text-[#e0e0e0]"
                    size={24}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/george-allen-donayre-570085316/"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebook
                    className="text-white dark:text-[#e0e0e0]"
                    size={24}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="py-10 text-center text-xs">
            &copy; {year} Konrads Donayre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
