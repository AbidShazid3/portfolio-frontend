import AboutMeCard from '@/components/modules/AboutMe/AboutMeCard';
import { getAboutMe } from '@/services/AboutMeServices';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "About Me",
  description:"Motivated Web Developer with expertise in JavaScript, TypeScript, React, Nextjs and Node.js. Skilled in building responsive, accessible, and user-friendly websites and web applications, with a strong focus on performance, clean code, and scalability. Passionate about continuous learning and problem-solving, I enjoy exploring new technologies, staying active, and contributing to open-source projects.",
};

export const revalidate = false;

const AboutMePage = async () => {
    const {data} = await getAboutMe();
    return (
        <div className='md:mt-10'>
            <AboutMeCard about={data} />
        </div>
    );
};

export default AboutMePage;