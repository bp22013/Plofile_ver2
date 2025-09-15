import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navBar';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ToasterContext } from './context/ToastContext';
import { ReactNode, Suspense } from 'react';
import { SkillsProvider } from './context/SkillsContext';

const inter: NextFont = Inter({ subsets: ['latin'] });
const site_name: string = 'Portfolio';
const site_description: string = '青木雅季';
const twitter_id: string = '@masaki_0218';
const url: string = process.env.NEXT_PUBLIC_APP_BASE_URL!;
const image: string = `${url}/portfolio.png`;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description,
    keywords: ['aoki', 'profile', '青木', '雅季'],
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        title: site_name,
        description: site_description,
        siteName: site_name,
        url: url,
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
    },
    twitter: {
        title: `${site_name}`,
        description: site_description,
        card: 'summary_large_image',
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
        creator: twitter_id,
    },
    metadataBase: new URL(url ?? 'http://localhost:3000'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <Suspense>
                <body className={`${inter.className} text-amber-200`}>
                    <SkillsProvider>
                        <Navbar />
                        <ToasterContext />
                        {children}
                    </SkillsProvider>
                </body>
            </Suspense>
        </html>
    );
}
