/* スキル表示ページ - カード横スライド版 */

'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { AnimatedLeaves } from '../components/leafAnimation';
import { CustomModal } from '../components/CustomModal';
import Loading from '../loading';
import { skillCategories, type Skill } from './skillsData';
import { motion } from 'framer-motion';

// 3Dビューアをクライアントサイドでのみ読み込む
const ModelViewer = dynamic(() => import('../components/ModelViewer'), {
    ssr: false,
    loading: () => <div className="aspect-square w-full"></div>,
});

const SkillsPage: NextPage = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isPageLoading, setIsPageLoading] = useState(true);

    // スキルカテゴリは外部ファイルから取得
    const totalModels = useMemo(
        () => skillCategories.reduce((acc, category) => acc + category.models.length, 0),
        []
    );

    const handleModelLoad = useCallback(() => {
        setLoadedCount((prev) => prev + 1);
    }, []);

    useEffect(() => {
        if (loadedCount >= totalModels && totalModels > 0) {
            setIsPageLoading(false);
        }
    }, [loadedCount, totalModels]);

    return (
        <>
            {isPageLoading && <Loading />}

            <main
                style={{
                    opacity: isPageLoading ? 0 : 1,
                    pointerEvents: isPageLoading ? 'none' : 'auto',
                    transition: 'opacity 0.5s ease-in-out',
                }}
                className="relative flex flex-col items-center px-6 mt-10 h-full w-full"
            >
                <div className="absolute top-0 left-0 w-full h-full">
                    <AnimatedLeaves />
                </div>
                <div className="text-center z-10 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-transparent bg-clip-text">
                        Skills
                    </h1>
                    <p className="mt-2 text-lg text-amber-300/80">
                        スキル一覧（※クリックで詳細を表示）
                    </p>
                </div>

                {/* カテゴリカードのCarousel */}
                <div className="z-10 w-full max-w-4xl">
                    <Carousel className="w-full relative">
                        <CarouselContent className="-ml-4">
                            {skillCategories.map((category) => (
                                <CarouselItem key={category.title} className="pl-4 md:basis-1/1">
                                    <Card className="bg-[#2a1a0a]/60 backdrop-blur-md text-amber-200 border border-amber-700/50 shadow-lg h-full">
                                        <CardHeader>
                                            <CardTitle className="text-amber-300 text-2xl text-center">
                                                {category.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6">
                                                {category.models.map((model) => (
                                                    <div
                                                        key={model.name}
                                                        className="flex flex-col items-center cursor-pointer"
                                                        onClick={() => setSelectedSkill(model)}
                                                    >
                                                        <p className="text-sm text-center mb-2 text-amber-200">
                                                            {model.name}
                                                        </p>
                                                        <div className="w-20 h-20 md:w-28 md:h-28">
                                                            <ModelViewer
                                                                modelPath={model.path}
                                                                onLoad={handleModelLoad}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <motion.div
                            className="absolute -left-12 top-1/2 -translate-y-1/2 z-20"
                            animate={{ x: [-4, 0, -4] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        >
                            <CarouselPrevious
                                className="static cursor-pointer bg-[#2a1a0a]/80 border-amber-700/50 text-amber-300 hover:bg-[#3a2a1a]/80"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute -right-12 top-1/2 -translate-y-1/2 z-20"
                            animate={{ x: [4, 0, 4] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        >
                            <CarouselNext
                                className="static cursor-pointer bg-[#2a1a0a]/80 border-amber-700/50 text-amber-300 hover:bg-[#3a2a1a]/80"
                            />
                        </motion.div>
                    </Carousel>

                    {/* ページインジケーター（オプション） */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {skillCategories.map((_, index) => (
                            <div key={index} className="w-2 h-2 rounded-full bg-amber-700/50" />
                        ))}
                    </div>
                </div>

                <CustomModal isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)}>
                    {selectedSkill && (
                        <div>
                            <h2 className="text-amber-300 text-2xl font-bold">
                                {selectedSkill.name}
                            </h2>
                            <p className="text-amber-300/90 pt-4">{selectedSkill.description}</p>
                        </div>
                    )}
                </CustomModal>
            </main>
        </>
    );
};

export default SkillsPage;
