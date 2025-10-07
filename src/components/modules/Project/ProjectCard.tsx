import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }: { project: Project }) => {
    if (!project) {
        return (
            <div className="flex items-center justify-center text-5xl font-medium text-red-500 min-h-[calc(100vh-80px)]">Project data not found.</div>
        );
    }
    return (
        <div className="flex flex-col lg:flex-row items-center bg-[#0d1117] text-white rounded-xl overflow-hidden shadow-lg">
            {/* Left Image */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-[26rem] 2xl:h-[32rem]">
                <Image
                    src={project?.thumbnail || ""}
                    alt={project?.title}
                    fill
                    className="object-top object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center p-5 lg:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">{project?.title}</h2>
                <p className="text-gray-400">{project?.description}</p>

                <div>
                    <h1 className='text-xl font-medium mb-1'>Features : </h1>
                    <div className="md:flex items-center flex-wrap space-x-3">
                        {project?.features?.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group/badge relative text-gray-100 flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <span className="w-2 h-2 rounded-full bg-blue-400 group-hover/badge:bg-blue-300 transition-colors duration-300" />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-medium mb-1'>Tech Stack : </h1>
                    <div className="flex items-center flex-wrap gap-3">
                        {project?.techStack?.map((tech, idx) => (
                            <div
                                key={idx}
                                className="rounded-full bg-gray-800/90 hover:bg-gray-700/80 text-gray-100 border border-gray-600 flex items-center py-1.5 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                {/* Skill Name */}
                                <span className="text-xs font-medium">{tech}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="flex gap-4 pt-2 font-medium border-t border-gray-700">
                    <Link
                        href={project?.backendRepo || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        Backend Repo
                    </Link>

                    <Link
                        href={project?.frontendRepo || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                        Frontend Repo
                    </Link>

                    <Link
                        href={project?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >

                        Live
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;