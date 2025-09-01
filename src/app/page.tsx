/* ホームページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from './components/leafAnimation';
import Image from 'next/image';

const AboutPage: NextPage = () => {
    return (
        <div className="bg-[#1A0F00] fixed inset-0 overflow-hidden">
            <main>
                <div className="ml-60 mt-30 flex gap-35 items-center">
                    <AnimatedLeaves />
                    <Image
                        src="/main-icon.png"
                        alt="Main Icon"
                        width={250}
                        height={250}
                        className="rounded-full border-1 bg-[#8b4513]"
                    />

                    {/* 文字を縦に並べるコンテナ */}
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-5xl mx-auto">Masaki Aoki / 青木 雅季</p>
                        <p className="text-white text-2xl mx-auto">
                            芝浦工業大学 4年　　コンピューターサイエンス専攻
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
