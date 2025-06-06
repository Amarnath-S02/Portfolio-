"use client"

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Poppins, Pacifico, Delicious_Handrawn } from "next/font/google";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, fadeIn } from '@/utils/animation';

const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
const delicious = Delicious_Handrawn({ subsets: ["latin"], weight: "400" });

const Hero = () => {
    return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col items-center mb-4'>
                    <Image src="/profile.avif" alt='Profile Image' width={100} height={100} className='rounded-full
                    mb-2 w-32 h-32 object-cover ring-2 ring-primary'/>
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className={`text-4xl md:text-6xl font-bold mb-6 ${poppins.className}`}>Hi, I&apos;m
                    <motion.span
                        {...fadeIn}
                        transition={{ delay: 0.8 }}
                        className={`text-primary ${pacifico.className}`}> Rohith
                    </motion.span>
                </motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.3 }} className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 ${delicious.className}`}>Full Stack Developer | UI / UX Enthusiast
                </motion.p>
                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className='flex justify-center space-x-4 mb-6'>
                    <motion.a href={"https://github.com/Rohith-S-07"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a href={"https://www.linkedin.com/in/rohith-s07/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a href={"https://www.instagram.com/rohith.07._/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaInstagram />
                    </motion.a>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className='flex flex-col md:flex-row justify-center gap-4'>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={"/projects"}
                            className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>
                            View Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={"/contact"}
                            className='inline-block w-full bg-gray-400  md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors'>
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero