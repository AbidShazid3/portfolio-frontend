import { AboutMe } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutMeCard = ({ about }: { about: AboutMe }) => {
    return (
        <div className="shadow-lg overflow-hidden">
            <div className='md:w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-10 lg:gap-0 lg:justify-items-end justify-items-center'>
                {/* Name & Titles */}
                <div className="space-y-5 text-white order-last lg:order-first">
                    <div className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight">
                        <p className='text-2xl md:text-3xl xl:text-4xl'>Hi I&apos;m</p>
                        <h1 className="typing-effect gradient-text text-cyan-400">{about?.name}</h1>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-2">
                        {about?.title.map((t, idx) => (
                            <span
                                key={idx}
                                className=" bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-4xl text-center"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    {/* Bio */}
                    <div className="">
                        <p className="text-gray-400 text-sm">{about?.bio}</p>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center items-center relative w-full max-w-[400px] aspect-square">
                    <Image
                        src={about?.profileImage || "https://i.ibb.co.com/rcCyzM8/IMG-1765-Perfectly-Clear-0001-01-removebg-preview.png"}
                        alt={about?.title?.[0] || "Profile Image"}
                        fill      // ✅ responsive fill mode
                        sizes="(max-width: 768px) 80vw, 400px" // ✅ responsive image sizing
                        className="object-cover border rounded-2xl"
                        priority
                    />
                </div>
            </div>

            {/* Skills */}
            <div className="mt-10 lg:mt-16 text-white space-y-3">
                <h2 className="text-3xl font-semibold text-center underline underline-offset-8 mb-7">Skills</h2>
                <div className="flex items-center flex-wrap gap-3">
                    {about?.skills?.map((skill) => (
                        <div key={skill.id} className="group/badge relative rounded-full bg-gray-800/90 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-1.5 px-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                            <Image
                                src={skill?.iconUrl || ""}
                                alt={skill?.name}
                                width={20}
                                height={20}
                                className="w-5 h-5 object-contain transform group-hover/badge:scale-110 transition-transform duration-300"
                            />
                            <span className="text-sm font-medium">{skill?.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Info */}
            <div className="my-10 lg:my-16 text-white space-y-2 text-center">
                <h2 className="text-3xl font-semibold text-center underline underline-offset-8 mb-7">Contact Info</h2>
                <p className="">
                    <strong>Email:</strong>{" "}
                    <Link
                        href={`mailto:${about?.email}`}
                        className="text-indigo-600 hover:underline"
                    >
                        {about?.email}
                    </Link>
                </p>
                <p className="">
                    <strong>Phone:</strong> {about?.phone}
                </p>
                <p className="">
                    <strong>Location:</strong> {about?.location}
                </p>
            </div>
        </div>
    );
};

export default AboutMeCard;