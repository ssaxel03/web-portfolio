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
            </head>
            <body className="flex flex-col items-center bg-neutral-950 text-neutral-50 min-w-[320px] w-full h-full">
                {children}
                <Analytics/>
            </body>
        </html>
    )
}