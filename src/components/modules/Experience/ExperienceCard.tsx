import { Experience } from "@/types";


const ExperienceCard = ({ exp }: { exp: Experience }) => {
    return (
        <div
            className="relative bg-[#18183a] border border-cyan-800/30 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300 group group  hover:scale-[1.02] hover:shadow-xl"
        >
            {/* Top Gradient Bar */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-cyan-400 mb-5">{exp?.role}</h3>

            {/* Company + Duration */}
            <div className="flex justify-between items-center mb-5">
                <span className="text-blue-400 text-xl font-medium">{exp?.company}</span>
                <span className=" bg-[#1b1b3a] text-gray-300 px-3 py-1 rounded-full">
                    {exp?.startDate} - {exp?.endDate}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>

            {/* Corner Lines */}
            <span className="absolute top-2 left-2 w-6 h-6 border-t border-l border-cyan-600/50 rounded-tl-lg"></span>
            <span className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-purple-600/50 rounded-br-lg"></span>
        </div>
    );
};

export default ExperienceCard;