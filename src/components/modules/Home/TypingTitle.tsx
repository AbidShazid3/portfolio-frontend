"use client";

import { Typewriter } from "react-simple-typewriter";

const TypingTitle = () => {
  return (
    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
      a{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-700">
        <Typewriter
          words={["Full-Stack Developer", "MERN Stack Developer", "Quick Learner"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypingTitle;
