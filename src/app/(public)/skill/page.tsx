import SkillCard from '@/components/modules/Skill/SkillCard';
import { SkillCategory } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Skills",
  description:"Showcasing core web development skills including HTML, CSS, JavaScript, React, Node.js, and modern tools that power efficient and scalable applications.",
};

const SkillPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/skill/category`)
    if (!res.ok) {
        throw new Error('Failed to fetch skill data');
    }
    const { data: skills } = await res.json();

    return (
        <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black leading-[1.3] text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">Core Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-10">
                {skills.map((skill: SkillCategory) => <SkillCard key={skill.id} skill={skill}></SkillCard>)}
            </div>
        </div>
    );
};

export default SkillPage;