/* ダッシュボードページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from './components/leafAnimation';
import Image from 'next/image';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AprilFonts } from '@/../public/fonts/AprilFonts';
import { YasashisaFont } from '@/../public/fonts/YasashisaFonts';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

/**
 * ダッシュボード（トップページ）コンポーネント
 * @returns {JSX.Element}
 */
const DashBoardPage: NextPage = () => {
    // 各ページへのリンク情報を定義
    const pages = [
        { title: 'About', desc: '自己紹介や経歴を掲載しています。', href: '/about' },
        { title: 'Skills', desc: 'プログラミングや技術スキルの一覧。', href: '/skills' },
        { title: 'Works', desc: '制作した作品やプロジェクトの紹介。', href: '/works' },
        { title: 'Contact', desc: 'お問い合わせはこちらから。', href: '/contact' },
    ];

    return (
        <main className="flex flex-col items-center px-6 pt-28 pb-12">
            {/* 背景の葉のアニメーション */}
            <AnimatedLeaves />

            {/* プロフィールセクション */}
            <section className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 w-full max-w-5xl">
                {/* プロフィール画像 */}
                <div className="flex w-full justify-center lg:justify-start lg:basis-1/4 lg:shrink-0">
                    <Image
                        src="/main-icon.png"
                        alt="Main Icon"
                        width={220}
                        height={220}
                        className="rounded-full border-2 border-amber-700 bg-[#8b4513] shadow-lg"
                    />
                </div>

                {/* プロフィール情報 */}
                <div className="flex flex-col gap-4 text-center lg:text-left lg:basis-3/4 lg:flex-1">
                    {/* 名前（英語と日本語） */}
                    <div className="text-amber-200 text-4xl md:text-5xl flex flex-wrap justify-center lg:justify-start items-baseline gap-2">
                        <span className={AprilFonts.className}>
                            {/* テキストアニメーション（ブラーインアップ） */}
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

                    {/* 所属大学 */}
                    <div
                        className={`text-amber-200 text-xl md:text-2xl ${YasashisaFont.className}`}
                    >
                        <TextAnimate animation="blurInUp" by="character" once>
                            芝浦工業大学 4年
                        </TextAnimate>
                    </div>

                    {/* 専攻と研究室 */}
                    <div
                        className={`text-amber-200 text-lg md:text-2xl ${YasashisaFont.className}`}
                    >
                        <TextAnimate animation="blurInUp" by="character" once>
                            コンピュータサイエンス専攻　画像応用システム研究室
                        </TextAnimate>
                    </div>
                </div>
            </section>

            {/* ナビゲーションカードセクション */}
            <section className="mt-12 w-full max-w-5xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page, idx) => (
                        <Link key={idx} href={page.href} className="group block">
                            {/* ホバー時に浮き上がるアニメーション */}
                            <motion.div
                                whileHover={{ y: -6 }} // ホバー時にy軸方向に-6移動
                                whileTap={{ y: -2 }} // タップ時にy軸方向に-2移動
                                transition={{
                                    type: 'spring', // アニメーションの種類
                                    stiffness: 320, // 硬さ
                                    damping: 22, // 減衰
                                    mass: 0.35, // 質量
                                }}
                                className="h-full will-change-transform"
                            >
                                <Card className="bg-[#2a1a0a] text-amber-200 border-none shadow-md hover:bg-[#3a2612] transition">
                                    <CardHeader>
                                        <CardTitle className="text-lg md:text-xl font-bold">
                                            {page.title}
                                        </CardTitle>
                                        <CardDescription className="text-amber-100 text-sm md:text-base">
                                            {page.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default DashBoardPage;
