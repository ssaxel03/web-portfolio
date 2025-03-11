// src/data/portfolio-data.ts
import {
    SiWhatsapp
} from 'react-icons/si';

import { LuLink } from "react-icons/lu";

const techList = {
    csharp: {
        name: "C#",
        icon: <i className="devicon-csharp-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "C Sharp"
    },
    java: {
        name: "Java",
        icon: <i className="devicon-java-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "Java"
    },
    html: {
        name: "HTML",
        icon: <i className="devicon-html5-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "HTML"
    },
    css: {
        name: "CSS",
        icon: <i className="devicon-css3-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "CSS"
    },
    javascript: {
        name: "JavaScript",
        icon: <i className="devicon-javascript-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "Java Script"
    },
    php: {
        name: "PHP",
        icon: <i className="devicon-php-plain text-4xl"></i>,
        category: "language",
        ariaLabel: "PHP"
    },
    dotnet: {
        name: ".NET",
        icon: <i className="devicon-dot-net-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Dot Net"
    },
    spring: {
        name: "Spring Boot",
        icon: <i className="devicon-spring-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Spring Boot"
    },
    typescript: {
        name: "Typescript",
        icon: <i className="devicon-typescript-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Typescript"
    },
    react: {
        name: "React.js",
        icon: <i className="devicon-react-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "React"
    },
    next: {
        name: "Next.js",
        icon: <i className="devicon-nextjs-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Next"
    },
    node: {
        name: "Node.js",
        icon: <i className="devicon-nodejs-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Node"
    },
    express: {
        name: "Express.js",
        icon: <i className="devicon-express-original text-4xl"></i>,
        category: "framework",
        ariaLabel: "Express"
    },
    tailwind: {
        name: "TailwindCSS",
        icon: <i className="devicon-tailwindcss-original text-4xl"></i>,
        category: "framework",
        ariaLabel: "Tailwind"
    },
    unity: {
        name: "Unity",
        icon: <i className="devicon-unity-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Unity"
    },
    godot: {
        name: "Godot",
        icon: <i className="devicon-godot-plain text-4xl"></i>,
        category: "framework",
        ariaLabel: "Godot"
    },
    junit: {
        name: "JUnit",
        icon: <i className="devicon-junit-plain text-4xl"></i>,
        category: "testing",
        ariaLabel: "J Unit"
    },
    mysql: {
        name: "MySQL",
        icon: <i className="devicon-mysql-original text-4xl"></i>,
        category: "database",
        ariaLabel: "My SQL"
    },
    maria: {
        name: "MariaDB",
        icon: <i className="devicon-mariadb-original text-4xl"></i>,
        category: "database",
        ariaLabel: "Maria DB"
    },
    postgres: {
        name: "PostgreSQL",
        icon: <i className="devicon-postgresql-plain text-4xl"></i>,
        category: "database",
        ariaLabel: "Postgre SQL"
    },
    mongo: {
        name: "MongoDB",
        icon: <i className="devicon-mongodb-plain text-4xl"></i>,
        category: "database",
        ariaLabel: "Mongo DB"
    },
    vscode: {
        name: "VS Code",
        icon: <i className="devicon-vscode-plain text-4xl"></i>,
        category: "tool",
        ariaLabel: "VS Code"
    },
    intellij: {
        name: "IntelliJ",
        icon: <i className="devicon-intellij-plain text-4xl"></i>,
        category: "tool",
        ariaLabel: "IntelliJ"
    },
    aws: {
        name: "AWS",
        icon: <i className="devicon-amazonwebservices-plain text-4xl"></i>,
        category: "other",
        ariaLabel: "AWS"
    },
    git: {
        name: "Git",
        icon: <i className="devicon-git-plain text-4xl"></i>,
        category: "other",
        ariaLabel: "Git"
    },
    linux: {
        name: "Linux",
        icon: <i className="devicon-linux-plain text-4xl"></i>,
        category: "other",
        ariaLabel: "Linux"
    },
    nginx: {
        name: "Nginx",
        icon: <i className="devicon-nginx-plain text-4xl"></i>,
        category: "other",
        ariaLabel: "Nginx"
    },
}

export const details = {
    name: "Axel Soares",
    role: "Software Developer"
}

export const about = {
    message: "I'm a developer based in Porto focused on delivering both web and desktop solutions that tackle real problems.",
    metadata: "Software developer skilled in .NET, React and Node.",
}

export const cv = {
    name: "CV",
    url: "/CV_axelsoares_2025_01_13.pdf",
    target: "_blank",
    icon: "Download my CV",
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
                techList.javascript,
                techList.react,
                techList.next,
                techList.node,
                techList.express,
                techList.tailwind,
                techList.postgres,
                techList.aws,
                techList.git,
                techList.nginx,
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
            date: 'Oct 2024',
            shortDescription: 'Necro Nibbler is a Java-based top-down shooter that features zombies, resource management and a variety of weapons. Do you have what it takes to take all the zombies down and escape?',
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
                techList.java,
                techList.intellij,
                techList.git,
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
            name: 'Drawing Board',
            id: 'drawingboard',
            date: 'Oct 2024',
            shortDescription: 'Java-based drawing board featuring the ability to paint and erase cells and save and load canvases.',
            longDescription:
                <>
                    <h3 className='mb-4'>Summary</h3>

                    <p className='text-justify mb-2'>The Drawing Board is a Java-based tool for creating grid-based artwork. Users can interact with a grid where each cell represents a "pixel," allowing for intuitive painting and erasing. This makes it an ideal platform for designing pixel-style art or simple patterns. Its straightforward interface ensures that users of all skill levels can easily engage with the application.</p>

                    <p className='text-justify mb-4'>One of its key features is the ability to save and load canvases. Users can save their creations to a file and reload them later, making it convenient to resume projects or refine previous designs. Lightweight yet versatile, the Drawing Board combines simplicity with practical functionality, offering an enjoyable experience for digital art creation.</p>

                    <h3 className='mb-4'>Functionality</h3>

                    <ul className='text-justify list-disc ml-5 mb-4'>
                        <li className="mb-1">Allows users to interact with a grid where each cell can be painted or erased</li>
                        <li className="mb-1">Lets users save their current artwork to a file for future use</li>
                        <li className="mb-1">Allows previously saved canvases to be reloaded and edited</li>
                        <li className="mb-1">Focuses on simplicity and efficiency for smooth operation</li>
                    </ul>

                    <h3 className="mb-4">How to run</h3>

                    <ul className="text-justify list-disc ml-5 mb-4">
                        <li className='mb-1'>Make sure you have Java installed on your computer (Java 8 or higher recommended)</li>
                        <li className='mb-1'>Download the latest .jar file from the <a className='text-orange-600' href='https://github.com/ssaxel03/drawing-board/releases'>Releases</a> section</li>
                        <li className='mb-1'>Double-click the .jar file to run the application or run from command line: java -jar DrawingBoard-vX.X.X.jar</li>
                    </ul>

                    <h3 className="mb-4">Controls</h3>

                    <ul className="text-justify list-disc ml-5 mb-4">
                        <li className='mb-1'>Arrow keys: Navigate the canvas</li>
                        <li className='mb-1'>Space: draw or erase the current cell</li>
                        <li className='mb-1'>S: Save your canvas</li>
                        <li className='mb-1'>L: Load a previously saved canvas</li>
                        <li className='mb-1'>C: Clear the entire canvas</li>
                    </ul>

                    <h3 className="mb-4">File storage</h3>

                    <p className='text-justify mb-4'>Saved canvases are stored in your Pictures folder under a directory called "DrawingBoard" with the .canvas extension.</p>
                </>,
            technologies: [
                techList.java,
                techList.intellij,
                techList.git,
            ],
            links: [
                {
                    name: "GitHub",
                    url: "https://github.com/ssaxel03/drawing-board",
                    target: "_blank",
                    icon: <i className="devicon-github-original"></i>,
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
                techList.csharp,
                techList.unity,
                techList.vscode,
                techList.git,
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

    list : [
        techList.csharp,
        techList.java,
        techList.html,
        techList.css,
        techList.javascript,
        techList.php,
        techList.dotnet,
        techList.spring,
        techList.typescript,
        techList.react,
        techList.next,
        techList.node,
        techList.express,
        techList.tailwind,
        techList.unity,
        techList.godot,
        techList.junit,
        techList.mysql,
        techList.maria,
        techList.postgres,
        techList.mongo,
        techList.vscode,
        techList.intellij,
        techList.aws,
        techList.git,
        techList.linux,
        techList.nginx,
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
                techList.java,
                techList.html,
                techList.css,
                techList.javascript,
                techList.spring,
                techList.react,
                techList.next,
                techList.node,
                techList.express,
                techList.junit,
                techList.mysql,
                techList.postgres,
                techList.vscode,
                techList.intellij,
                techList.aws,
                techList.git,
                techList.nginx,
            ]
        },
        {
            role: "Junior Software Developer",
            company: "UNIT4",
            date: "09/2022 - 12/2022",
            description: <p className='text-xl mb-2 text-justify mb-1'>Developed a user-friendly web application for a transport company to streamline its operations. Designed a clean and intuitive UI with React, enabling seamless management of company resources like inventory and deliveries. Built a robust REST API using .NET, integrated with a MongoDB database, to ensure efficient data handling and scalability.</p>,
            technologies: [
                techList.csharp,
                techList.javascript,
                techList.dotnet,
                techList.react,
                techList.mongo,
                techList.vscode,
                techList.git,
            ]
        },
        {
            role: "Junior Software Developer",
            company: "MedicineOne",
            date: "01/2022 - 05/2022",
            description: <p className='text-xl mb-2 text-justify mb-1'>Created a new infirmary window interface for the M1, a flagship software used by hospitals, clinics and health centers to manage patient records, medical procedures and financial operations. Developed the interface using Windows Forms and implemented a REST API with .NET to ensure smooth functionality and integration with the existing system.</p>,
            technologies: [
                techList.csharp,
                techList.dotnet,
                techList.mysql,
                techList.vscode,
                techList.git,
            ]
        },
        {
            role: "Intern Web Developer",
            company: "ISPGaya",
            date: "09/2020 - 06/2021",
            description: <p className='text-xl mb-2 text-justify mb-1'>Developed an archive website to centralize and showcase publications and institutional news. Designed the front-end using HTML, CSS and JavaScript to ensure a responsive and visually appealing user experience. Built the back-end logic with PHP and used a MySQL database to efficiently store, retrieve and manage content, ensuring seamless data handling for the institution.</p>,
            technologies: [
                techList.html,
                techList.css,
                techList.javascript,
                techList.php,
                techList.vscode,
                techList.git,
            ]
        },
        {
            role: "Informática e Tecnologias Multimédia",
            company: "Colégio de Gaia",
            date: "09/2018 - 06/2021",
            description: <p className='text-xl mb-2 text-justify mb-1'>Acquired core skills in software development, multimedia production, network and database management and system configuration. I came out prepared to take on roles in software development, IT support or digital design.</p>,
            technologies: [
                techList.csharp,
                techList.html,
                techList.css,
                techList.javascript,
                techList.dotnet,
                techList.mysql,
                techList.maria,
                techList.vscode,
                techList.git,
            ]
        }
    ]
}