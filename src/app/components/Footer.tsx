import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Allura } from 'next/font/google'

const allura = Allura({ subsets: ["latin"], weight: "400" });

export default function Footer() {
    return (
        <footer className="mt-8 bg-dark/5 dark:bg-dark border-t border-gray-200 dark:border-gray-800">
            <div className="container max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <Link href="/" className={`text-4xl font-bold text-primary ${allura.className}`}>R S</Link>
                        <p className="text-sm text-secondary mt-2">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://instagram.com/in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition-colors"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 