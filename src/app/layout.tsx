import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navBar';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ToasterContext } from './context/ToastContext';
import { ReactNode, Suspense } from 'react';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Welcome to my portfolio website!',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Suspense>
                <body className={inter.className}>
                    <Navbar />
                    <ToasterContext />
                    <div>{children}</div>
                </body>
            </Suspense>
        </html>
    );
}
