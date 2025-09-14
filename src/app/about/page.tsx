/* Aboutページ — NavBarと重ならず、ページスクロール無し */

'use client';

import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedLeaves } from '../components/leafAnimation';
import { AprilFonts } from '@/../public/fonts/AprilFonts';
import { YasashisaFont } from '@/../public/fonts/YasashisaFonts';

const AboutPage: NextPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const internships = [
        {
            company: '芝浦工業大学　入学',
            role: 'システム理工学部',
            period: '2022年4月',
            description: '',
        },
        {
            company: 'Sky株式会社',
            role: 'フロントエンドエンジニア',
            period: '2024年9月',
            description: 'Next.jsとJavascriptを用いたWebアプリ開発を担当しました。',
        },
        {
            company: '伊藤忠テクノソリューションズ株式会社',
            role: 'ワークショップ',
            period: '2024年11月',
            description: '顧客理解やウォーターフォールについて実際に体験しました。',
        },
        {
            company: '富士通株式会社',
            role: 'フルスタックエンジニア',
            period: '2025年4月 - 2025年6月',
            description:
                'Next.jsをメインに用いたPerl製の医療系の修正管理システムのマイグレーションを担当しました。',
        },
    ];

    return (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-[#1A0F00] text-amber-200 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <AnimatedLeaves />
            </div>

            <motion.main
                className="relative z-10 mx-auto h-full max-w-7xl p-4 sm:p-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="grid h-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
                    variants={itemVariants}
                >
                    <div className="md:col-span-1 flex flex-col items-center space-y-5 md:space-y-6 min-h-0">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-amber-800 rounded-full flex items-center justify-center shadow-lg">
                            <Image
                                src="/main-icon.png"
                                alt="Main Icon"
                                width={220}
                                height={220}
                                className="rounded-full border-2 border-amber-700 bg-[#8b4513] shadow-lg"
                            />
                        </div>
                        <div className="text-center">
                            <h1
                                className={`${YasashisaFont.className} text-3xl sm:text-4xl font-bold`}
                            >
                                青木 雅季
                            </h1>
                            <h4
                                className={`${AprilFonts.className} text-3xl sm:text-4xl mt-2 font-bold`}
                            >
                                Masaki Aoki
                            </h4>
                            <p className={`${AprilFonts.className} text-amber-300 text-2xl`}>
                                Web Developer
                            </p>
                        </div>
                        <div className="text-base sm:text-lg text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-amber-500 pb-2"></h2>
                            <p className="leading-relaxed">
                                芝浦工業大学でCSを専攻してます。Web関係の開発ではNext.jsやHono.jsといったフレームワークを使用して開発することが多いです。
                                Web以外では、所属していた「鳥人間」という部活の電装班でマイコンを使った電子回路設計やアプリ開発を担当していたので、
                                ハードウェアの方もよく触ってます。
                            </p>
                            <p className="leading-relaxed">
                                好きな動物はリスとレッサーパンダです。
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 min-h-0">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-amber-500 pb-2">
                            Career
                        </h1>

                        {/* タイムライン（ページスクロールなし。収まらない場合は下の overflow-auto を有効化） */}
                        <div className="relative h-[calc(100%-3rem)] sm:h-[calc(100%-4.5rem)] border-l-2 border-amber-700 pl-6 space-y-8 sm:space-y-12 overflow-hidden">
                            {internships.map((internship, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    variants={itemVariants}
                                >
                                    <div className="absolute -left-8 top-1 w-4 h-4 bg-amber-500 rounded-full" />
                                    <h3
                                        className={`${YasashisaFont.className} text-xl sm:text-2xl font-semibold`}
                                    >
                                        {internship.company}
                                    </h3>
                                    <p className="text-sm sm:text-md text-amber-400 font-medium">
                                        {internship.role} ({internship.period})
                                    </p>
                                    <p className="mt-2 text-amber-300 leading-relaxed">
                                        {internship.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default AboutPage;
