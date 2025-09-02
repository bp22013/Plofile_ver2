/* ホームページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from './components/leafAnimation';
import Image from 'next/image';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AprilFonts } from '@/../public/fonts/AprilFonts';
import { YasashisaFont } from '@/../public/fonts/YasashisaFonts';
import Link from 'next/link';

// shadcn/ui のカードコンポーネント
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const AboutPage: NextPage = () => {
    const pages = [
        { title: 'About', desc: '自己紹介や経歴を掲載しています。', href: '/about' },
        { title: 'Skills', desc: 'プログラミングや技術スキルの一覧。', href: '/skills' },
        { title: 'Works', desc: '制作した作品やプロジェクトの紹介。', href: '/works' },
        { title: 'Contact', desc: 'お問い合わせはこちらから。', href: '/contact' },
    ];

    return (
        <div className="bg-[#1A0F00] min-h-screen overflow-auto">
            <main className="flex flex-col items-center justify-center px-6 py-12 md:mt-10">
                <AnimatedLeaves />
                <section className="flex flex-col md:flex-row md:items-center md:gap-16 gap-8 w-full max-w-5xl">
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        <Image
                            src="/main-icon.png"
                            alt="Main Icon"
                            width={220}
                            height={220}
                            className="rounded-full border-2 border-amber-700 bg-[#8b4513] shadow-lg"
                        />
                    </div>

                    {/* テキスト部分 */}
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <div className="text-amber-200 text-4xl md:text-5xl flex flex-wrap justify-center md:justify-start items-baseline gap-2">
                            <span className={AprilFonts.className}>
                                <TextAnimate animation="blurInUp" by="character" once>
                                    Masaki Aoki /
                                </TextAnimate>
                            </span>
                            <span className={`${YasashisaFont.className}`}>
                                <TextAnimate animation="blurInUp" by="character" once>
                                    青木 雅季
                                </TextAnimate>
                            </span>
                        </div>

                        <div
                            className={`text-amber-200 text-xl md:text-2xl ${YasashisaFont.className}`}
                        >
                            <TextAnimate animation="blurInUp" by="character" once>
                                芝浦工業大学 4年
                            </TextAnimate>
                        </div>

                        <div
                            className={`text-amber-200 text-lg md:text-2xl ${YasashisaFont.className}`}
                        >
                            <TextAnimate animation="blurInUp" by="character" once>
                                コンピュータサイエンス専攻　画像応用システム研究室
                            </TextAnimate>
                        </div>
                    </div>
                </section>

                {/* --- カード群セクション --- */}
                <section className="mt-12 w-full max-w-5xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pages.map((page, idx) => (
                            <Link key={idx} href={page.href} className="group">
                                <Card className="bg-[#2a1a0a] text-amber-200 border-none shadow-md hover:bg-[#3a2612] transition transform group-hover:scale-105">
                                    <CardHeader>
                                        <CardTitle className="text-lg md:text-xl font-bold">
                                            {page.title}
                                        </CardTitle>
                                        <CardDescription className="text-amber-100 text-sm md:text-base">
                                            {page.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
