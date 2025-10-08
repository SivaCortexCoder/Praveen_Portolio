import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div className="w-11/12 max-w-6xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-20 lg:pt-0">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left"> 
        <h3 className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent flex items-end justify-center lg:justify-start gap-2 text-xl md:text-2xl mb-3">
          Hi! I&apos;m Praveen
        </h3>

        {/* Typing Effect */}
        <TypeAnimation 
          sequence={[
            "Senior Digital Marketer, Social Media Specialist, Content Creator.", 1500,
          ]}
          wrapper="h1"
          speed={50}
          repeat={0} // 0 means run only once
          className="text-3xl sm:text-6xl lg:text-[50px] leading-tight "
        />

        {/* <h1 className="text-3xl sm:text-6xl lg:text-[50px] leading-tight"> Senior Digital Marketer,<span className="block mt-3">Social Media Specialist,</span><span className="block mt-3">Content Creator.</span> </h1> */}

        <p className="max-w-xl mx-auto lg:mx-0 mt-4">
          Helping brands grow with creative digital strategies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
          <a
            href="#contact"
            className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center gap-2 dark:border-transparent"
          >
            contact me{" "}
            <img
              src="./assets/right-arrow-white.png"
              alt="arrow"
              className="w-4"
            />
          </a>

          <a
            href=""
            // download
            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
          >
            my resume{" "}
            <img
              src="./assets/download-icon.png"
              alt="download"
              className="w-4 dark:invert"
            />
          </a>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:justify-end">
        <img
          src="./assets/Profile.jpg"
          alt="profile"
          className="rounded-full w-56 sm:w-72 lg:w-[350px] object-cover"
        />
      </div>
    </div>
  );
}
