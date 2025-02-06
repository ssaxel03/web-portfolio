"use client";

import { skills } from "@/data/portfolio-data"
import { useEffect, useState } from "react";


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


    return (<>
        <div className="flex flex-row flex-start flex-wrap gap-3 mb-2">

            {allCategories.map((category, index) => (
                <button
                    key={index}
                    className={`text-xl rounded-md flex justify-center items-center h-10 px-8 transition-colors ${selectedCategory === category
                        ? 'bg-orange-600 scale-105'
                        : 'bg-neutral-800 hover:bg-orange-600 hover:scale-105 duration-300 ease-in-out '
                        }`}
                    onClick={() => setSelectedCategory(category)}
                >{categoryLabels[category]}</button>
            ))}

        </div>

        <section className="flex bg-neutral-800 px-4 py-4 rounded-lg shadow-md w-full justify-center items-center">
            <section id="skill-grid" className="gap-8 w-full">
                {skillsSelected.map((skill, index) => (
                    <article key={index} className="flex text-neutral-50 justify-center items-center flex-col gap-2">
                        {skill.icon}
                        <p className="text-sm">{skill.name}</p>
                    </article>
                ))}
            </section>
        </section>
    </>
    )
}