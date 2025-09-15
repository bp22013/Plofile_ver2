/* skillsページ */

'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { AnimatedLeaves } from '../components/leafAnimation';
import { CustomModal } from '../components/CustomModal';
import Loading from '../loading';
import { motion } from 'framer-motion';
import skillData from '../data/skillsData.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { useSkillsContext } from '../context/SkillsContext';
import { YasashisaFont } from '../../../public/fonts/YasashisaFonts';

export interface Skill {
    name: string;
    path: string;
    description: string;
}

export interface SkillCategory {
    title: string;
    models: Skill[];
}

type MultiCanvasViewerProps = {
    categories: SkillCategory[];
    onModelClick: (skill: Skill) => void;
    onAllModelsLoaded: () => void;
    gridClassName?: string;
    modelSpacingX?: number;
    modelSpacingY?: number;
    canvasClassName?: string;
    cardClassName?: string;
};

const MultiCanvasViewer = dynamic<MultiCanvasViewerProps>(
    () => import('../components/MultiModelViewer').then((m) => m.default),
    { ssr: false, loading: () => <div className="w-full h-[350px] md:h-[400px]" /> }
);

const SkillsPage: NextPage = () => {
    const { areSkillsLoaded, setSkillsLoaded } = useSkillsContext();
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [loadedCategories, setLoadedCategories] = useState(0);
    const totalCategories = skillData.length;

    const handleCategoryLoad = useCallback(() => {
        setLoadedCategories((prev) => prev + 1);
    }, []);

    useEffect(() => {
        if (loadedCategories >= totalCategories) {
            setSkillsLoaded(true);
        }
    }, [loadedCategories, totalCategories, setSkillsLoaded]);

    const handleModelClick = (skill: Skill) => setSelectedSkill(skill);

    return (
        <>
            {!areSkillsLoaded && <Loading />}

            <main
                style={{
                    opacity: areSkillsLoaded ? 1 : 0,
                    pointerEvents: areSkillsLoaded ? 'auto' : 'none',
                    transition: 'opacity 0.5s ease-in-out',
                }}
                className="relative flex flex-col items-center px-6 mt-10 h-full w-full"
            >
                <div className="absolute top-0 left-0 w-full h-full">
                    <AnimatedLeaves />
                </div>

                <div className="text-center z-10 mb-12">
                    <h1
                        className={`${YasashisaFont.className} text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-transparent bg-clip-text`}
                    >
                        Skills
                    </h1>
                    <p className="mt-2 text-lg text-amber-300/80">
                        スキル一覧（※クリックで詳細を表示）
                    </p>
                </div>

                <div className="z-10 w-full max-w-5xl">
                    <Carousel
                        opts={{ align: 'start', slidesToScroll: 1, loop: false }}
                        className="relative w-full overflow-visible"
                    >
                        <CarouselContent className="-ml-4">
                            {skillData.map((category) => (
                                <CarouselItem key={category.title} className="pl-4 basis-full">
                                    <MultiCanvasViewer
                                        categories={[category]}
                                        onModelClick={handleModelClick}
                                        onAllModelsLoaded={handleCategoryLoad}
                                        gridClassName="grid-cols-1 w-full"
                                        cardClassName="w-full sm:w-[80%] max-w-[620px]"
                                        canvasClassName="w-full"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="pointer-events-none absolute inset-0 z-20 flex">
                            <div className="relative mx-auto h-full w-full sm:w-[80%] max-w-[620px]">
                                <motion.div
                                    className="pointer-events-auto absolute -left-16 md:-left-16 sm:-left-4 top-1/2 -translate-y-1/2"
                                    animate={{ x: [-4, 0, -4] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.8,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <CarouselPrevious className="static cursor-pointer bg-[#2a1a0a]/80 border-amber-700/50 text-amber-300 hover:bg-[#3a2a1a]/80" />
                                </motion.div>

                                <motion.div
                                    className="pointer-events-auto absolute -right-16 md:-right-16 sm:-right-4 top-1/2 -translate-y-1/2"
                                    animate={{ x: [4, 0, 4] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.8,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <CarouselNext className="static cursor-pointer bg-[#2a1a0a]/80 border-amber-700/50 text-amber-300 hover:bg-[#3a2a1a]/80" />
                                </motion.div>
                            </div>
                        </div>
                    </Carousel>
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
