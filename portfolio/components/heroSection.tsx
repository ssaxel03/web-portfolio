"use client";
import { details } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { cv } from '@/data/portfolio-data';

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full min-h-[100svh] relative mb-16"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-2 text-center"
            >
                {details.name.split(" ").map((word, index) => (
                    <span
                        key={index}
                        className={index === 0 ? "text-orange-600" : "text-neutral-50"}
                    >
                        {word}{" "}
                    </span>
                ))}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-neutral-50 font-bold mb-4 text-center"
            >
                {details.role}
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl mb-8 max-w-xl text-center text-neutral-300"
            >
                I'm a developer based in Porto focused on delivering both web and desktop solutions that tackle real problems.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4"
            >
                <Link className="w-full lg:w-auto" href="#projects">
                    <button className="w-full px-8 py-2 bg-orange-600 text-xl text-white rounded-md hover:bg-orange-500 hover:scale-105 ease-in-out duration-300 transition-all duration-300">
                        Some of my work
                    </button>
                </Link>
                <Link className="w-full lg:w-auto" href="#contact">
                    <button className="w-full px-8 py-2 bg-neutral-800 text-xl text-neutral-50 rounded-md hover:bg-orange-600 hover:scale-105 ease-in-out duration-300 transition-all duration-300">
                        Let's work together
                    </button>
                </Link>
                <a  href={cv.url}
                    target={cv.target}
                    className="w-full lg:w-auto">
                    <button className="w-full px-8 py-2 bg-neutral-800 text-xl text-neutral-50 rounded-md hover:bg-orange-600 hover:scale-105 ease-in-out duration-300 transition-all duration-300">
                        {cv.icon}
                    </button>
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="animate-bounce">
                    <a href="#projects">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </a>
                </div>
            </motion.div>
        </motion.section>
    );
}