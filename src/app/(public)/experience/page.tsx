import ExperienceCard from '@/components/modules/Experience/ExperienceCard';
import { Experience } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Experiences",
  description:"Showcasing professional experiences in web development, building scalable applications, optimizing performance, and delivering impactful digital solutions.",
};

const ExperiencePage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/experience`)
    if (!res.ok) {
        throw new Error('Failed to fetch experience data');
    }
    const {data: experience} = await res.json();
    return (
        <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black leading-[1.3] bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center">Professional Journey</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {experience.map((exp: Experience) => <ExperienceCard key={exp.id} exp={exp}></ExperienceCard>)}
            </div>
        </div>
    );
};

export default ExperiencePage;