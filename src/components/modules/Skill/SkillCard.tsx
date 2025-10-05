import { SkillCategory } from '@/types';
import Image from 'next/image';
import React from 'react';

const SkillCard = ({ skill }: { skill: SkillCategory }) => {

    return (
        <div className="relative bg-[#18183a] border border-cyan-800/30 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300 group  hover:scale-[1.02] hover:shadow-xl">
            {/* Top Gradient Bar */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            {/* category name */}
            <h3 className="text-2xl font-semibold text-cyan-400">{skill?.name}</h3>

            <div className="flex items-center flex-wrap gap-2 mt-6">
                {skill?.skills?.map((sk) => (
                    <div key={sk.id} className="group/badge relative rounded-full bg-gray-800/90 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-1.5 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                        <Image
                            src={sk?.iconUrl || ""}
                            alt={sk?.name}
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain transform group-hover/badge:scale-110 transition-transform duration-300"
                        />
                        <span className="text-sm font-medium">{sk?.name}</span>
                    </div>
                ))}
            </div>

            {/* Corner Lines */}
            <span className="absolute top-2 right-2 w-6 h-6 border-t border-r border-cyan-600/50 rounded-tr-lg"></span>
            <span className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-purple-600/50 rounded-bl-lg"></span>
        </div>
    );
};

export default SkillCard;