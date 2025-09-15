/* Aboutページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedLeaves } from '../components/leafAnimation';
import { AprilFonts } from '@/../public/fonts/AprilFonts';
import { YasashisaFont } from '@/../public/fonts/YasashisaFonts';
import aboutData from '../data/aboutData.json';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AboutPage: NextPage = () => {
    // 親コンテナ用のアニメーションバリアント
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
    };

    // 子要素用のアニメーションバリアント
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    // aboutData.jsonから経歴データを読み込み
    const data = aboutData;

    return (
        // ページ全体のコンテナ
        <div className="relative md:fixed md:inset-x-0 md:top-16 md:bottom-0 bg-[#1A0F00] text-amber-200 min-h-screen pt-16 md:pt-0 md:min-h-0 md:overflow-hidden">
            {/* 背景の葉のアニメーション */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatedLeaves />
            </div>

            {/* メインコンテンツ（アニメーション付き） */}
            <motion.main
                className="relative z-10 mx-auto max-w-7xl p-4 sm:p-6 md:p-8 md:h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="grid md:h-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
                    variants={itemVariants}
                >
                    {/* 左側のプロフィールセクション */}
                    <div className="md:col-span-1 flex flex-col items-center space-y-5 md:space-y-6 md:min-h-0">
                        {/* プロフィール画像 */}
                        <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-amber-800 rounded-full flex items-center justify-center shadow-lg">
                            <Image
                                src="/main-icon.png"
                                alt="Main Icon"
                                width={220}
                                height={220}
                                className="rounded-full border-2 border-amber-700 bg-[#8b4513] shadow-lg"
                                priority // 優先的に読み込む
                            />
                        </div>

                        {/* 名前と肩書き */}
                        <div className="text-center px-2">
                            <h1 className="flex items-baseline justify-center gap-2 sm:gap-3 flex-wrap">
                                <span
                                    className={`${YasashisaFont.className} text-3xl sm:text-4xl font-bold`}
                                >
                                    青木 雅季
                                </span>
                                <span className="opacity-70 text-2xl sm:text-3xl">/</span>
                                <span
                                    className={`${AprilFonts.className} text-3xl sm:text-4xl font-bold`}
                                >
                                    Masaki Aoki
                                </span>
                            </h1>
                            <p
                                className={`${AprilFonts.className} text-amber-300 text-xl sm:text-2xl mt-1`}
                            >
                                Web & Hard Engineer
                            </p>
                        </div>

                        {/* 誕生日 */}
                        <div className="w-full max-w-xs">
                            <Label htmlFor="birthday" className="mt-2 mb-2 block text-amber-300">
                                Birthday
                            </Label>
                            <Input
                                id="birthday"
                                type="date"
                                value="2004-02-18"
                                readOnly // 読み取り専用
                                className="w-full bg-transparent border-amber-700/50 text-amber-200 cursor-default"
                            />
                        </div>

                        {/* 自己紹介文 */}
                        <div className="text-base sm:text-lg text-center md:text-left px-2 md:px-0">
                            <h2 className="text-2xl font-bold mb-3 sm:mb-4 border-b-2 border-amber-500 pb-2"></h2>
                            <p className="leading-relaxed">
                                芝浦工業大学でCSを専攻してます。Webアプリの開発や所属している「鳥人間」という部活ではマイコンを使った電子回路設計、Androidのアプリ開発なんかも担ってます。
                                趣味は幼少期から習っていたピアノです。
                            </p>
                            <p className="leading-relaxed">
                                好きな動物はテーマの通り、リスとレッサーパンダです。
                            </p>
                        </div>
                    </div>

                    {/* 右側の経歴セクション */}
                    <div className="md:col-span-2 md:min-h-0 md: mb-10">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 border-b-2 border-amber-500 pb-2">
                            Career
                        </h1>
                        {/* 経歴タイムライン */}
                        <div className="border-l-2 border-amber-700 pl-6 pr-2 sm:pr-4 space-y-8 sm:space-y-12 h-auto overflow-visible md:relative md:h-[calc(100%-3rem)] md:overflow-auto">
                            {data.map((d, index) => (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    variants={itemVariants}
                                >
                                    {/* タイムラインのマーカー */}
                                    <div className="absolute -left-8 top-1 w-4 h-4 bg-amber-500 rounded-full" />
                                    <h3
                                        className={`${YasashisaFont.className} text-xl sm:text-2xl font-semibold`}
                                    >
                                        {d.company}
                                    </h3>
                                    <p className="text-sm sm:text-md text-amber-400 font-medium">
                                        {d.role} ({d.period})
                                    </p>
                                    <p className="mt-2 text-amber-300 leading-relaxed">
                                        {d.description}
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
