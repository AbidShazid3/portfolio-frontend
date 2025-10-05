import AboutMeCard from '@/components/modules/AboutMe/AboutMeCard';
import React from 'react';

const AboutMePage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/about`)
    const {data} = await res.json();
    return (
        <div className='md:mt-10'>
            <AboutMeCard about={data} />
        </div>
    );
};

export default AboutMePage;