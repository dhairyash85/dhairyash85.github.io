import React from "react";
import pfp from "../pfp.jpg"
const Header = () => {
  return (
    <>
      <body>
        <section className="py-10 ">
          <div className="container mx-auto px-4 flex flex-col">
            <div className="flex flex-col  items-center justify-between">
              <div className="mb-8 lg:mb-0 lg:w-1/2">
                <h2 className="text-7xl font-bold mb-2 text-white">
                  Hi there! <br /> I am Dhairyash Jain
                </h2>
                <p className="text-3xl text-white font-semibold">
                  I am a developer!
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://www.linkedin.com/in/dhairyash-jain-9799831a3/"
                    className="dark:hover:text-blue-500 transition-colors duration-75 text-3xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/dhairyash_485?igsh=MWE1bDVtdDh4c2tzbw=="
                    className="dark:hover:text-pink-500 transition-colors duration-75 text-3xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://x.com/dheerizzler?t=DEgpkDlh7q0GWq_naUMW0Q&s=09"
                    className="dark:hover:text-blue-500 transition-colors duration-75 text-3xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://github.com/dhairyash85"
                    className="dark:hover:text-white transition-colors duration-75 text-3xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href="https://discordapp.com/users/757489946540900443"
                    className="dark:hover:text-discord transition-colors duration-75 text-3xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
              <div className="py-10 px-12 w-xl">
                <div className=" bg-gray-100 p-6 rounded-lg shadow-xl">
                  <p className="text-lg">
                    Crafting innovative solutions at the intersection of web
                    development and blockchain technology, I bring a unique
                    blend of expertise to every project. With a knack for
                    problem-solving and a passion for pushing boundaries, I
                    specialize in delivering cutting-edge solutions that drive
                    results and captivate audiences.
                  </p>
                  <div className="flex mt-4 justify-center items-center">
                    <div className="w-14 h-14 mr-4 md:w-60 md:h-60">
                      <img
                        className="rounded-full object-contain"
                        src={pfp}
                        alt="Dhairyash Jain Profile Picture"
                      />
                    </div>
                    <div className="md:text-lg">
                      <div className="flex flex-row">
                        <p className="font-semibold mr-2">Dhairyash Jain</p>
                      </div>

                      <p className=" text-sm">
                        <a
                          href="#"
                          className="hover:underline hover:cursor-pointer hover:text-blue-500 transition-colors duration-75"
                        ></a>
                        Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Header;
