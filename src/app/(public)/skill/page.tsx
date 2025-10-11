import SkillCard from '@/components/modules/Skill/SkillCard';
import { getCategories } from '@/services/CategoryServices';
import { SkillCategory } from '@/types';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Skills",
  description:"Showcasing core web development skills including HTML, CSS, JavaScript, React, Node.js, and modern tools that power efficient and scalable applications.",
};

const SkillPage = async () => {
    const { data: skills } = await getCategories();

    return (
        <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-black leading-[1.3] text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">Core Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
                {skills.map((skill: SkillCategory) => <SkillCard key={skill.id} skill={skill}></SkillCard>)}
            </div>
        </div>
    );
};

export default SkillPage;