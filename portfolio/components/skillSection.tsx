"use client";

import { skills } from "@/data/portfolio-data"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = Array.from(
        new Set(skills.list.map(skill => skill.category))
    );

    const allCategories = ['all', ...categories];

    const categoryLabels: { [key: string]: string } = {
        all: 'All',
        language: 'Languages',
        framework: 'Frameworks',
        database: 'Databases',
        tool: 'Tools',
        testing: 'Testing',
        other: 'Others'
    };

    const [skillsSelected, setSkillsSelected] = useState(skills.list);

    useEffect(() => {

        if (selectedCategory === 'all') {
            setSkillsSelected(skills.list);
            return;
        }

        setSkillsSelected(skills.list.filter(skill => skill.category === selectedCategory));


    }, [selectedCategory])


    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.3 }}>

            <motion.h2 initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.2 }} className="text-xl font-bold mb-4">Skills</motion.h2>

            <div className="flex flex-row flex-start flex-wrap gap-3 mb-2">

                {allCategories.map((category, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                        <button
                            className={`text-xl rounded-md flex justify-center items-center h-10 px-8 transition-colors ${selectedCategory === category
                                ? 'bg-orange-600 scale-105'
                                : 'bg-neutral-800 hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out '
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >{categoryLabels[category]}</button>
                    </motion.div>
                ))}

            </div>

            <motion.section initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.2 }} className="flex bg-neutral-800 px-4 py-4 rounded-lg shadow-md w-full justify-center items-center">
                <section id="skill-grid" className="gap-8 w-full">
                    {skillsSelected.map((skill, index) => (
                        <motion.article initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.25 }}
                            key={index}
                            className="flex text-neutral-50 justify-center items-center flex-col gap-2">
                            {skill.icon}
                            <p className="text-sm">{skill.name}</p>
                        </motion.article>
                    ))}
                </section>
            </motion.section>
        </motion.div>
    )
}