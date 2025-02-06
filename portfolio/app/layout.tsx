import 'devicon/devicon.min.css'; // Import the CSS file
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full">
            <head>
                <link rel="stylesheet" href="output.css" />
                <link rel="stylesheet" href="global.css" />
                <title>Axel Soares - Web Portfolio</title>
                <meta name="description" content="Full-Stack Developer passionate about building effective web applications. Skilled in .NET, Spring, React, Node.js and AWS. Explore my portfolio to see my latest projects!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" property="og:title" content="Axel Soares - Web Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Full-Stack Developer passionate about building effective web applications. Skilled in .NET, Spring, React, Node.js and AWS. Explore my portfolio to see my latest projects!" />
                <meta name="robots" content="index, follow"/>
            </head>
            <body className="flex flex-col items-center bg-neutral-950 text-neutral-50 min-w-[320px] w-full h-full">
                {children}
                <Analytics/>
            </body>
        </html>
    )
}