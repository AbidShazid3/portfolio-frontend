import ProjectCard from '@/components/modules/Project/ProjectCard';
import { getProjects } from '@/services/ProjectServices';
import { Project } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Project",
  description:"Explore personal and professional projects highlighting frontend and full-stack web development skills, modern frameworks, and innovative solutions.",
};

const ProjectPage = async() => {
    const { data: projects } = await getProjects();

    return (
        <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black leading-[1.3] text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">What I’ve Built</h2>
            <div className="grid md:grid-cols-1 2xl:grid-cols-2 gap-10 2xl:gap-5 mt-10 pb-10">
                {projects.map((project:Project) => <ProjectCard key={project.id} project={project}></ProjectCard>)}
            </div>
        </div>
    );
};

export default ProjectPage;