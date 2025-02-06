// src/data/portfolio-data.ts
import {
    SiWhatsapp
} from 'react-icons/si';

import { LuMail, LuLink } from "react-icons/lu";

export const details = {
    name: "Axel Soares",
    role: "Software Developer",
    location: "Porto, Portugal"
}

export const about = {
    message: <p className='text-xl text-justify'>I'm a <span className='text-orange-600 font-bold'><strong>software developer</strong></span> focused on building web applications that <span className='text-orange-600 font-bold'><strong>solve real problems</strong></span>. When I'm not solving problems I enjoy weightlifting, martial arts and archery.</p>,
}

export const socials = {
    list: [
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/axelsoares",
            target: "_blank",
            icon: <i aria-label='LinkedIn' className="devicon-linkedin-plain text-xl"></i>,
        },
        {
            name: "GitHub",
            url: "https://github.com/ssaxel03",
            target: "_blank",
            icon: <i aria-label='GitHub' className="devicon-github-original text-xl"></i>,
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/351932670851",
            target: "_blank",
            icon: <SiWhatsapp aria-label='WhatsApp' className='text-xl' />
        },
        {
            name: "Email",
            url: "#contact",
            target: "_self",
            icon: <LuMail aria-label='Email' className='text-xl' />
        },
        {
            name: "CV",
            url: "/CV_axelsoares_2025_01_13.pdf",
            target: "_blank",
            icon: "Download my CV",
        },
    ],
}

export const projects = {
    list: [
        {
            name: 'SAM - Your Pocket Samaritan',
            id: 'sam',
            date: 'Dec 2024 - now',
            shortDescription: 'Made in just three days, SAM is a platform for reporting local occurrences featuring interactive maps and a menu for browsing nearby reports.',
            longDescription:
                <>
                    <h3 className='mb-4'>About</h3>

                    <p className='text-justify mb-2'>SAM is a platform that empowers users to report local occurrences in a simple, uniform and intuitive way. By providing local authorities with a standardized method to receive and address reports, SAM aims to bridge the gap between communities and authorities.</p>

                    <p className="text-justify mb-2">SAM allows users to place pinpoints on a map to report occurrences and detail them with a title, description and category. Users browsing the map can access a side menu displaying the five closest occurrences to the map's current center. They can also click on them to get to know their title.</p>

                    <p className="text-justify mb-4">Future iterations will include the ability to upload images, enable authorities to resolve occurrences directly and offer enhanced notification systems.</p>

                    <h3 className='mb-4'>Features</h3>

                    <ul className='list-disc ml-5 mb-4'>
                        <li className='text-justify mb-1'>Place pinpoints on a map to report occurrences.</li>
                        <li className='text-justify mb-1' >Submit detailed reports with a title, description and category.</li>
                        <li className='text-justify mb-1' >Browse the five closest occurrences on the map's side menu.</li>
                        <li className='text-justify mb-1' >Navigate the map and get to know occurrences in your area.</li>
                    </ul>

                    <h3 className='mb-4'>How to use</h3>

                    <ol className='list-decimal ml-5 mb-4'>
                        <li className='text-justify mb-1'>Open the platform. It asks you for permission to use your location. This provides us with the necessary resources to automatically tell you the closest occurrences to you.</li>
                        <li className='text-justify mb-1'>Click on a location to add an occurrence. Fill out the title, description and category fields.</li>
                        <li className='text-justify mb-1'>Browse the map to view other reported occurrences.</li>
                        <li className='text-justify mb-1'>Click on any occurrence to view its information.</li>
                    </ol>

                    <h3 className='mb-4'>Roadmap</h3>

                    <ul className='list-disc ml-5 mb-4'>
                        <li className="text-justify mb-1">Add image upload functionality to better illustrate occurrences.</li>
                        <li className="text-justify mb-1">Integrate notifications for local authorities.</li>
                        <li className="text-justify mb-1">Allow local authorities to resolve occurrences directly within the platform.</li>
                        <li className="text-justify mb-1">Evaluate and rank local authorities based on their efficiency in resolving reported occurrences.</li>
                        <li className="text-justify mb-1">Expand language support for wider accessibility.</li>
                    </ul>
                </>,
            technologies: [

                {
                    name: "JavaScript",
                    icon: <i className="devicon-javascript-plain"></i>,
                    category: "language",
                    ariaLabel: "Java Script"
                },
                {
                    name: "React.js",
                    icon: <i className="devicon-react-plain"></i>,
                    category: "framework",
                    ariaLabel: "React"
                },
                {
                    name: "Next.js",
                    icon: <i className="devicon-nextjs-plain"></i>,
                    category: "framework",
                    ariaLabel: "Next"
                },
                {
                    name: "Node.js",
                    icon: <i className="devicon-nodejs-plain"></i>,
                    category: "framework",
                    ariaLabel: "Node"
                },
                {
                    name: "Express.js",
                    icon: <i className="devicon-express-original"></i>,
                    category: "framework",
                    ariaLabel: "Express"
                },
                {
                    name: "TailwindCSS",
                    icon: <i className="devicon-tailwindcss-original"></i>,
                    category: "framework",
                    ariaLabel: "Tailwind"
                },
                {
                    name: "PostgreSQL",
                    icon: <i className="devicon-postgresql-plain"></i>,
                    category: "database",
                    ariaLabel: "Postgre SQL"
                },
                {
                    name: "AWS",
                    icon: <i className="devicon-amazonwebservices-plain"></i>,
                    category: "other",
                    ariaLabel: "AWS"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
                {
                    name: "Nginx",
                    icon: <i className="devicon-nginx-plain"></i>,
                    category: "other",
                    ariaLabel: "Nginx"
                },
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/ssaxel03/sam",
                    target: "_blank",
                    icon: <i className="devicon-github-original"></i>,
                },
                {
                    name: "WebApp",
                    url: "https://sam.ssaxel03.com",
                    target: "_blank",
                    icon: <LuLink />,
                },
            ]
        },
        {
            name: 'NecroNibbler',
            id: 'necronibbler',
            date: 'Oct 2024 - Nov 2024',
            shortDescription: 'Necro Nibbler is a Java-based top-down shooter that features zombies, resource management and varied weapons. Do you have what it takes to take all the zombies down and escape?',
            longDescription:
                <>
                    <h3 className='mb-4'>About</h3>

                    <p className='text-justify mb-2'>Necro Nibbler is a top-down survival shooter where players battle zombies in a decaying facility, balancing fast-paced combat with scarce resources like ammo, health packs and cash. Every decision—fighting, fleeing, or upgrading gear—impacts survival.</p>

                    <p className='text-justify mb-2'>Diverse zombie types force adaptive tactics, while traps and barricades help conserve supplies. Risk-reward choices (looting vs. retreating) escalate tension as players progress.</p>

                    <p className='text-justify mb-4'>With hordes growing deadlier and resources dwindling, victory demands sharp strategy and precision. Will you hoard supplies or gamble on speed? The game pits relentless action against calculated survival for a thrilling, high-stakes escape.</p>

                    <h3 className='mb-4'>Controls</h3>

                    <ul className='list-disc ml-5 mb-4'>
                        <li className="text-justify mb-1">WASD - Move</li>
                        <li className="text-justify mb-1">R - Reload    </li>
                        <li className="text-justify mb-1">SPACE - Submit menu options</li>
                        <li className="text-justify mb-1">UPDOWN - Select menu options</li>
                    </ul>
                </>,
            technologies: [
                {
                    name: "Java",
                    icon: <i className="devicon-java-plain"></i>,
                    category: "language",
                    ariaLabel: "Java"
                },
                {
                    name: "IntelliJ",
                    icon: <i className="devicon-intellij-plain"></i>,
                    category: "tool",
                    ariaLabel: "IntelliJ"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/ssaxel03/bootcamp-gamejam",
                    target: "_blank",
                    icon: <i className="devicon-github-original"></i>,
                },
                {
                    name: "itch.io",
                    url: "https://ssaxel03.itch.io/necronibbler",
                    target: "_blank",
                    icon: <LuLink />,
                },
            ]
        },
        {
            name: 'Pong',
            id: 'pong',
            date: 'Aug 2023',
            shortDescription: 'A Pong game made in Unity featuring local multiplayer where players hit a ball to score points. The game uses colliders for detection and includes a simple HUD to track scores.',
            longDescription:
                <>
                    <h3 className='mb-4'>About</h3>

                    <p className='text-justify mb-2'>This local multiplayer Pong game, built in Unity as a learning project, lets two players control paddles to hit a ball back and forth, with points scored when the ball passes an opponent's paddle. Developed to understand Unity’s 2D physics and real-time input handling, it focuses on basics like object movement and collision detection.</p>

                    <p className='text-justify mb-4'>While simple, the game provides hands-on experience with essential Unity features like scripting, physics and UI setup. This project serves as a fun introduction to Unity’s capabilities, laying the foundation for more advanced development.</p>

                    <h3 className='mb-4'>Controls</h3>

                    <ul className='list-disc ml-5 mb-4'>
                        <li className="text-justify mb-1">WS - Control left player</li>
                        <li className="text-justify mb-1">UPDOWN - Control right player</li>
                    </ul>
                </>,
            technologies: [
                {
                    name: "C#",
                    icon: <i className="devicon-csharp-plain"></i>,
                    category: "language",
                    ariaLabel: "C Sharp"
                },
                {
                    name: "Unity",
                    icon: <i className="devicon-unity-plain"></i>,
                    category: "framework",
                    ariaLabel: "Unity"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/ssaxel03/pong",
                    target: "_blank",
                    icon: <i className="devicon-github-original"></i>,
                },
                {
                    name: "itch.io",
                    url: "https://ssaxel03.itch.io/pong",
                    target: "_blank",
                    icon: <LuLink />,
                },
            ]
        },
    ],
}

export const skills = {

    list: [
        {
            name: "C#",
            icon: <i className="devicon-csharp-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "C Sharp"
        },
        {
            name: "Java",
            icon: <i className="devicon-java-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "Java"
        },
        {
            name: "HTML",
            icon: <i className="devicon-html5-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "HTML"
        },
        {
            name: "CSS",
            icon: <i className="devicon-css3-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "CSS"
        },
        {
            name: "JavaScript",
            icon: <i className="devicon-javascript-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "Java Script"
        },
        {
            name: "PHP",
            icon: <i className="devicon-php-plain text-4xl"></i>,
            category: "language",
            ariaLabel: "PHP"
        },
        {
            name: ".NET",
            icon: <i className="devicon-dot-net-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Dot Net"
        },
        {
            name: "Spring Boot",
            icon: <i className="devicon-spring-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Spring Boot"
        },
        {
            name: "Typescript",
            icon: <i className="devicon-typescript-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Typescript"
        },
        {
            name: "React.js",
            icon: <i className="devicon-react-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "React"
        },
        {
            name: "Next.js",
            icon: <i className="devicon-nextjs-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Next"
        },
        {
            name: "Node.js",
            icon: <i className="devicon-nodejs-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Node"
        },
        {
            name: "Express.js",
            icon: <i className="devicon-express-original text-4xl"></i>,
            category: "framework",
            ariaLabel: "Express"
        },
        {
            name: "TailwindCSS",
            icon: <i className="devicon-tailwindcss-original text-4xl"></i>,
            category: "framework",
            ariaLabel: "Tailwind"
        },
        {
            name: "Unity",
            icon: <i className="devicon-unity-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Unity"
        },
        {
            name: "Godot",
            icon: <i className="devicon-godot-plain text-4xl"></i>,
            category: "framework",
            ariaLabel: "Godot"
        },
        {
            name: "JUnit",
            icon: <i className="devicon-junit-plain text-4xl"></i>,
            category: "testing",
            ariaLabel: "J Unit"
        },
        {
            name: "MySQL",
            icon: <i className="devicon-mysql-original text-4xl"></i>,
            category: "database",
            ariaLabel: "My SQL"
        },
        {
            name: "MariaDB",
            icon: <i className="devicon-mariadb-original text-4xl"></i>,
            category: "database",
            ariaLabel: "Maria DB"
        },
        {
            name: "PostgreSQL",
            icon: <i className="devicon-postgresql-plain text-4xl"></i>,
            category: "database",
            ariaLabel: "Postgre SQL"
        },
        {
            name: "MongoDB",
            icon: <i className="devicon-mongodb-plain text-4xl"></i>,
            category: "database",
            ariaLabel: "Mongo DB"
        },
        {
            name: "VS Code",
            icon: <i className="devicon-vscode-plain text-4xl"></i>,
            category: "tool",
            ariaLabel: "VS Code"
        },
        {
            name: "IntelliJ",
            icon: <i className="devicon-intellij-plain text-4xl"></i>,
            category: "tool",
            ariaLabel: "IntelliJ"
        },
        {
            name: "AWS",
            icon: <i className="devicon-amazonwebservices-plain text-4xl"></i>,
            category: "other",
            ariaLabel: "AWS"
        },
        {
            name: "Git",
            icon: <i className="devicon-git-plain text-4xl"></i>,
            category: "other",
            ariaLabel: "Git"
        },
        {
            name: "Linux",
            icon: <i className="devicon-linux-plain text-4xl"></i>,
            category: "other",
            ariaLabel: "Linux"
        },
        {
            name: "Nginx",
            icon: <i className="devicon-nginx-plain text-4xl"></i>,
            category: "other",
            ariaLabel: "Nginx"
        },
    ],
}

export const journey = {
    list: [
        {
            role: "Fullstack Programming Bootcamp",
            company: "Code for All_",
            date: "09/2024 - 12/2024",
            description: <p className='text-xl mb-2 text-justify mb-1'>Completed an intensive 14-week bootcamp focused on modern web development. Gained hands-on experience with Java, Spring, JUnit, JavaScript, AWS and Git, among other technologies. Applied these skills in a team setting using Scrum and best practices like code reviews. As a final project, co-developed SAM, a platform for reporting local occurrences, contributing to both the backend with Node.js, Express.js and PostgreSQL and the frontend with Next.js.</p>,
            technologies: [
                {
                    name: "Java",
                    icon: <i className="devicon-java-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "Java"
                },
                {
                    name: "HTML",
                    icon: <i className="devicon-html5-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "HTML"
                },
                {
                    name: "CSS",
                    icon: <i className="devicon-css3-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "CSS"
                },
                {
                    name: "JavaScript",
                    icon: <i className="devicon-javascript-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "Java Script"
                },
                {
                    name: "Spring Boot",
                    icon: <i className="devicon-spring-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Spring Boot"
                },
                {
                    name: "React.js",
                    icon: <i className="devicon-react-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "React"
                },
                {
                    name: "Next.js",
                    icon: <i className="devicon-nextjs-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Next"
                },
                {
                    name: "Node.js",
                    icon: <i className="devicon-nodejs-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Node"
                },
                {
                    name: "Express.js",
                    icon: <i className="devicon-express-original text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Express"
                },
                {
                    name: "JUnit",
                    icon: <i className="devicon-junit-plain text-xl"></i>,
                    category: "testing",
                    ariaLabel: "J Unit"
                },
                {
                    name: "MySQL",
                    icon: <i className="devicon-mysql-original text-xl"></i>,
                    category: "database",
                    ariaLabel: "My SQL"
                },
                {
                    name: "PostgreSQL",
                    icon: <i className="devicon-postgresql-plain text-xl"></i>,
                    category: "database",
                    ariaLabel: "Postgre SQL"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "IntelliJ",
                    icon: <i className="devicon-intellij-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "IntelliJ"
                },
                {
                    name: "AWS",
                    icon: <i className="devicon-amazonwebservices-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "AWS"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
                {
                    name: "Nginx",
                    icon: <i className="devicon-nginx-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Nginx"
                },
            ]
        },
        {
            role: "Junior Software Developer",
            company: "UNIT4",
            date: "09/2022 - 12/2022",
            description: <p className='text-xl mb-2 text-justify mb-1'>Developed a user-friendly web application for a transport company to streamline its operations. Designed a clean and intuitive UI with React, enabling seamless management of company resources like inventory and deliveries. Built a robust REST API using .NET, integrated with a MongoDB database, to ensure efficient data handling and scalability.</p>,
            technologies: [
                {
                    name: "C#",
                    icon: <i className="devicon-csharp-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "C Sharp"
                },
                {
                    name: "JavaScript",
                    icon: <i className="devicon-javascript-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "Java Script"
                },
                {
                    name: ".NET",
                    icon: <i className="devicon-dot-net-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Dot Net"
                },
                {
                    name: "React.js",
                    icon: <i className="devicon-react-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "React"
                },
                {
                    name: "MongoDB",
                    icon: <i className="devicon-mongodb-plain text-xl"></i>,
                    category: "database",
                    ariaLabel: "Mongo DB"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ]
        },
        {
            role: "Junior Software Developer",
            company: "MedicineOne",
            date: "01/2022 - 05/2022",
            description: <p className='text-xl mb-2 text-justify mb-1'>Created a new infirmary window interface for the M1, a flagship software used by hospitals, clinics and health centers to manage patient records, medical procedures and financial operations. Developed the interface using Windows Forms and implemented a REST API with .NET to ensure smooth functionality and integration with the existing system.</p>,
            technologies: [
                {
                    name: "C#",
                    icon: <i className="devicon-csharp-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "C Sharp"
                },
                {
                    name: ".NET",
                    icon: <i className="devicon-dot-net-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Dot Net"
                },
                {
                    name: "MySQL",
                    icon: <i className="devicon-mysql-original text-xl"></i>,
                    category: "database",
                    ariaLabel: "My SQL"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ]
        },
        {
            role: "Intern Web Developer",
            company: "ISPGaya",
            date: "09/2020 - 06/2021",
            description: <p className='text-xl mb-2 text-justify mb-1'>Developed an archive website to centralize and showcase publications and institutional news. Designed the front-end using HTML, CSS and JavaScript to ensure a responsive and visually appealing user experience. Built the back-end logic with PHP and used a MySQL database to efficiently store, retrieve and manage content, ensuring seamless data handling for the institution.</p>,
            technologies: [
                {
                    name: "HTML",
                    icon: <i className="devicon-html5-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "HTML"
                },
                {
                    name: "CSS",
                    icon: <i className="devicon-css3-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "CSS"
                },
                {
                    name: "JavaScript",
                    icon: <i className="devicon-javascript-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "Java Script"
                },
                {
                    name: "PHP",
                    icon: <i className="devicon-php-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "PHP"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ]
        },
        {
            role: "Informática e Tecnologias Multimédia",
            company: "Colégio de Gaia",
            date: "09/2018 - 06/2021",
            description: <p className='text-xl mb-2 text-justify mb-1'>Acquired core skills in software development, multimedia production, network and database management and system configuration. I came out prepared to take on roles in software development, IT support or digital design.</p>,
            technologies: [
                {
                    name: "C#",
                    icon: <i className="devicon-csharp-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "C Sharp"
                },
                {
                    name: "HTML",
                    icon: <i className="devicon-html5-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "HTML"
                },
                {
                    name: "CSS",
                    icon: <i className="devicon-css3-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "CSS"
                },
                {
                    name: "JavaScript",
                    icon: <i className="devicon-javascript-plain text-xl"></i>,
                    category: "language",
                    ariaLabel: "Java Script"
                },
                {
                    name: ".NET",
                    icon: <i className="devicon-dot-net-plain text-xl"></i>,
                    category: "framework",
                    ariaLabel: "Dot Net"
                },
                {
                    name: "MySQL",
                    icon: <i className="devicon-mysql-original text-xl"></i>,
                    category: "database",
                    ariaLabel: "My SQL"
                },
                {
                    name: "MariaDB",
                    icon: <i className="devicon-mariadb-original text-xl"></i>,
                    category: "database",
                    ariaLabel: "Maria DB"
                },
                {
                    name: "VS Code",
                    icon: <i className="devicon-vscode-plain text-xl"></i>,
                    category: "tool",
                    ariaLabel: "VS Code"
                },
                {
                    name: "Git",
                    icon: <i className="devicon-git-plain text-xl"></i>,
                    category: "other",
                    ariaLabel: "Git"
                },
            ]
        }
    ]
}