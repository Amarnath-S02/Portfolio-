import Image from 'next/image'
import React from 'react'
import { Poppins, Pacifico, Delicious_Handrawn } from "next/font/google";

const poppins = Poppins({ weight: "400" });
const pacifico = Pacifico({ weight: "400" });
const londrina = Delicious_Handrawn({ weight: "400" });

const Hero = () => {
    return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <div className='flex flex-col items-center mb-4'>
                    <Image src="/profile.avif" alt='Profile Image' width={100} height={100} className='rounded-full
                    mb-2 w-32 h-32 object-cover ring-2 ring-primary'/>
                </div>

                <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${poppins.className}`}>Hi I'm <span className={`text-primary ${pacifico.className}`}>Rohith S</span></h1>

                <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 ${londrina.className}`}>Full Stack Developer | UI/UX Enthusiast</p>
            </div>
        </section>
    )
}

export default Hero