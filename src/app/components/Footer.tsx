"use client"

import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Allura } from 'next/font/google'
import { motion } from 'framer-motion';

const allura = Allura({ subsets: ["latin"], weight: "400" });

const Footer = () => {
    return (
        <footer className="mt-8 bg-dark/5 dark:bg-dark border-t border-gray-200 dark:border-gray-800">
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <Link href="/" className={`text-4xl font-bold text-primary ${allura.className}`}>Amar</Link>
                        <p className="text-sm text-secondary mt-2">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <motion.a href={"https://github.com/Amarnath-S02"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a href={"https://www.linkedin.com/in/amarnath-s-02304a299/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a href={"https://www.instagram.com/amar_._rr/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300
                     transition-colors duration-300'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaInstagram />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;