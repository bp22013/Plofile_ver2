/* ホームページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from './components/leafAnimation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TextAnimate } from '@/components/magicui/text-animate';
import { AprilFonts } from '@/../public/fonts/AprilFonts';
import { YasashisaFont } from '@/../public/fonts/YasashisaFonts';

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

                    <div className="flex flex-col gap-4 text-center">
                        <div className="text-amber-200 text-5xl flex gap-2 justify-center items-center">
                            <span className={AprilFonts.className}>
                                <TextAnimate animation="blurInUp" by="character" once>
                                    Masaki Aoki /
                                </TextAnimate>
                            </span>
                            <span className={`${YasashisaFont.className} relative bottom-2`}>
                                <TextAnimate animation="blurInUp" by="character" once>
                                    青木 雅季
                                </TextAnimate>
                            </span>
                        </div>
                        <div className={`text-amber-200 text-2xl ${YasashisaFont.className}`}>
                            <TextAnimate animation="blurInUp" by="character" once>
                                芝浦工業大学 4年
                            </TextAnimate>
                        </div>
                        <div className={`text-amber-200 text-2xl ${YasashisaFont.className}`}>
                            <TextAnimate animation="blurInUp" by="character" once>
                                コンピュータサイエンス専攻　画像応用システム研究室
                            </TextAnimate>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Button />
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
