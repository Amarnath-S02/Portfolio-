"use client"

import { Allura } from "next/font/google";
import { Bars3Icon, MoonIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

const allura = Allura({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
    const { theme, toggletheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname()
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ]
    return (
        <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200
         dark:border-gray-700 shadow-sm transition-colors'>
            <div className='container max-w-7xl mx-auto px-4'>
                {/* Desktop Menu */}
                <div className='flex items-center justify-between h-16'>
                    <Link href="/" className={`text-4xl font-bold text-primary ${allura.className}`}>R S</Link>

                    {/* Desktop menus */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={item.href} href={item.href} className={`hover:text-primary
                                transition-colors font-medium ${isActive ? 'text-primary' : ' '}`}>{item.label}</Link>
                                )
                            })
                        }

                        <button
                            onClick={toggletheme}
                            className='p-2 rounded-lg hover:bg-gray-100 dark:text-white
                             hover:text-primary dark:hover:bg-gray-800 transition-colors'>
                            {
                                theme === "dark" ? (
                                    <SunIcon className='w-5 h-5' />
                                ) : (
                                    <MoonIcon className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-colors cursor-pointer'>
                        {
                            isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6' />) : (<Bars3Icon className='w-6 h-6' />)
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                {
                    isMobileMenuOpen && (
                        <div className='md-hidden'>
                            <div className='py-4 space-y-4'>
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={toggleMobileMenu}>
                                            <Link href={item.href}
                                                className='block py-2 hover:text-primary transition-colors'
                                            >{item.label}</Link>
                                        </div>
                                    )
                                    )
                                }

                                <div>
                                    <button
                                        onClick={() => {
                                            toggleMobileMenu();
                                            toggletheme();
                                        }}
                                        className='flex py-2 hover:text-primary transition-colors'>
                                        {
                                            theme === "dark" ? (
                                                <><SunIcon className='w-5 h-5 mr-2' />Light Mode</>
                                            ) : (
                                                <><MoonIcon className='w-5 h-5 mr-2' />Dark Mode</>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar