import Link from "next/link";
import TypingTitle from "./TypingTitle";
import { Download, Facebook, Github, Linkedin } from "lucide-react";

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
  title: ["Full-Stack Developer",
          "MERN Developer",
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
            <div className="container mx-auto max-w-[1600px] 2xl:max-w-[1800px] grid lg:grid-cols-2 gap-5 md:gap-10 items-center pb-5">
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

                    <TypingTitle />

                    <p className="text-gray-400 text-lg">
                        Building scalable web apps | Crafting developer tools | Automating workflows
                    </p>

                    <div className="flex gap-2 pt-3">
                        <button className="px-2 py-1 md:px-6 md:py-2 rounded-2xl bg-cyan-800/60 hover:bg-cyan-700 transition cursor-pointer">
                            <Link
                                href={"https://github.com/AbidShazid3"}
                                target="_blank"
                                rel="noopener noreferrer"
                            ><Github className="h-5 w-5" /></Link>
                        </button>
                        <button className="px-2 py-1 md:px-6 md:py-2 rounded-2xl bg-cyan-800/70 hover:bg-cyan-700 transition">
                            <Link
                                href="https://www.linkedin.com/in/abid-shadat-noor-449392369"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Linkedin"
                                className="hover:bg-slate-700"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </button>
                        <button className="px-2 py-1 md:px-6 md:py-2 rounded-2xl bg-cyan-800/80 hover:bg-cyan-700 transition">
                            <Link
                                href="https://www.facebook.com/abidshazid3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                                className="hover:bg-slate-700"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </button>
                        <button className="px-2 py-1 md:px-6 md:py-2 rounded-2xl bg-gray-800 border border-gray-600 hover:bg-gray-700 transition">
                            <Link
                                href={"https://drive.google.com/file/d/1SjrrENkowtbzCzhisQM0KcJZ63ZTt8q6/view?usp=drive_link"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >Resume <Download className="h-4 w-4" /></Link>
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
                <div className="bg-[#0e0e2e] rounded-2xl shadow-lg border-2 border-cyan-700 overflow-hidden">
                    <div className="flex items-center space-x-2 p-3 bg-[#0d1931]">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="ml-4">developer.js</span>
                    </div>
                    <pre className="text-sm text-left text-gray-200 font-mono p-6">
                        <code>{codeBlock}</code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default HomeCard;
