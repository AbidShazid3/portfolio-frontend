"use client"

import { Typewriter } from "react-simple-typewriter";

const floatingTags = [
    {
        text: "Innovation",
        top: "top-3 md:top-10 lg:top-5 xl:top-12 2xl:top-16",
        left: "left-45 md:left-70 lg:left-60 xl:left-96 2xl:left-[32rem]",
        bg: "bg-purple-800/40",
        color: "text-purple-300",
    },
    {
        text: "Clean Code",
        top: "top-16 md:top-40 lg:top-20 xl:top-32 2xl:top-40",
        left: "left-45 md:left-120 lg:left-90 xl:left-[28rem] 2xl:left-[36rem]",
        bg: "bg-blue-800/40",
        color: "text-blue-300",
    },
];

const codeBlock = `const profile = {
  name: 'Abid Shadat Noor',
  title: ["Junior Full-Stack Developer",
          "Junior MERN Developer",
          "Quick Learner"],
  skills: [
    'React', 'NextJS', 'TypeScript',
    'Express', 'Prisma', 'SQL',
    'Postgres', 'MongoDB', 'etc'
  ],
  hardWorker: true,
  yearsOfExperience: 2,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
    );
  }
};`;

const HomeCard = () => {
    return (
        <section className="text-white flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="container mx-auto max-w-[1600px] 2xl:max-w-[1800px] grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div className="space-y-5 relative">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate__animated animate__fadeInDown animate__delay-1s">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        <span className="text-gray-200 text-xs sm:text-sm font-medium">
                            Welcome to my universe
                        </span>
                    </div>

                    <div className="relative">
                        <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold leading-tight space-y-3">
                            <span className="relative inline-block">
                                Hello I&apos;m <br />
                                <span className="typing-effect gradient-text text-cyan-400">
                                    Abid Shadat Noor
                                </span>
                            </span>
                        </h1>
                    </div>

                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
                        a {""}{""}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-700">
                            <Typewriter
                                words={["Full-Stack Developer", "MERN Developer", "Quick Learner"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg">
                        Building scalable web apps | Crafting developer tools | Automating workflows
                    </p>

                    <div className="flex gap-4 pt-3">
                        <button className="px-6 py-2 rounded-2xl bg-cyan-900 hover:bg-cyan-600 transition cursor-pointer"
                        onClick={() => window.open("https://github.com/AbidShazid3", "_blank")}>
                            Learn More
                        </button>
                        <button className="px-6 py-2 rounded-2xl bg-gray-800 border border-gray-600 hover:bg-gray-700 transition">
                            Get Resume
                        </button>
                    </div>

                    {/* Floating Tags */}
                    {floatingTags.map((tag, idx) => (
                        <div
                            key={idx}
                            className={`absolute px-3 py-1 rounded-full text-sm ${tag.bg} ${tag.color} ${tag.top} ${tag.left}`}
                        >
                            {tag.text}
                        </div>
                    ))}
                </div>

                {/* Right Code Block */}
                <div className="bg-[#0e0e2e] rounded-2xl shadow-lg border border-cyan-700 overflow-hidden p-6">
                    <div className="flex space-x-2 mb-4">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <pre className="text-sm text-left text-gray-200 font-mono">
                        <code>{codeBlock}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default HomeCard;
