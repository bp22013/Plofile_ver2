/* Worksページ */

'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedLeaves } from '../components/leafAnimation';
import { CustomModal } from '../components/CustomModal';
import worksData from '../data/worksData.json';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { YasashisaFont } from '../../../public/fonts/YasashisaFonts';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    url: string;
    image: string;
}

interface WorkCategory {
    category: string;
    projects: Project[];
}

const WorksPage: NextPage = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <main className="relative flex flex-col items-center px-6 mt-10 h-full w-full">
                <div className="absolute top-0 left-0 w-full h-full">
                    <AnimatedLeaves />
                </div>

                <div className="text-center z-10 mb-12">
                    <h1
                        className={`${YasashisaFont.className} text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-transparent bg-clip-text`}
                    >
                        Works
                    </h1>
                    <p className="mt-2 text-lg text-amber-300/80">
                        制作物一覧（※クリックで詳細を表示）
                    </p>
                </div>

                <div className="z-10 w-full max-w-6xl">
                    <Carousel opts={{ loop: true }} className="relative w-full">
                        <CarouselContent>
                            {worksData.map((category: WorkCategory) => (
                                <CarouselItem key={category.category} className="basis-full">
                                    <div className="p-1">
                                        <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-6 text-center">
                                            {category.category}
                                        </h2>

                                        {/* グリッドと矢印を同じ相対コンテナにし、左右に常にガターを確保 */}
                                        <div className="relative px-8 sm:px-10 lg:px-16">
                                            {/* カードグリッド */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                                                {category.projects.map((project: Project) => (
                                                    <motion.div
                                                        key={project.title}
                                                        whileHover={{ y: -8 }}
                                                        className="cursor-pointer"
                                                        onClick={() => setSelectedProject(project)}
                                                    >
                                                        <Card className="bg-[#2a1a0a]/80 border-amber-700/50 h-full">
                                                            <CardContent className="p-0 flex flex-col h-full items-center mx-auto">
                                                                <div className="relative w-full h-48">
                                                                    <Image
                                                                        src={
                                                                            project.image ||
                                                                            '/public/web-1.png'
                                                                        }
                                                                        alt={project.title}
                                                                        layout="fill"
                                                                        objectFit="cover"
                                                                        className="bg-gray-700 rounded-t-lg"
                                                                    />
                                                                </div>
                                                                <div className="p-4 flex flex-col flex-grow text-center">
                                                                    <h3 className="text-xl font-bold text-amber-300">
                                                                        {project.title}
                                                                    </h3>
                                                                    <p className="mt-2 text-amber-300/80 text-sm flex-grow">
                                                                        {project.description.substring(
                                                                            0,
                                                                            80
                                                                        )}
                                                                        ...
                                                                    </p>
                                                                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                                                                        {project.technologies
                                                                            .slice(0, 3)
                                                                            .map((tech) => (
                                                                                <span
                                                                                    key={tech}
                                                                                    className="text-xs bg-amber-800/50 text-amber-200 px-2 py-1 rounded-full"
                                                                                >
                                                                                    {tech}
                                                                                </span>
                                                                            ))}
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* 左矢印：縦中央。左右ガター（px）内に置くのでカードと被らない */}
                                            <motion.div
                                                className="pointer-events-auto absolute inset-y-0 left-0 w-8 sm:w-10 lg:w-16 flex items-center justify-center z-20"
                                                animate={{ x: [-2, 0, -2] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.8,
                                                    ease: 'easeInOut',
                                                }}
                                            >
                                                <CarouselPrevious className="static cursor-pointer bg-[#2a1a0a]/80 border-amber-700/50 text-amber-300 hover:bg-[#3a2a1a]/80" />
                                            </motion.div>

                                            {/* 右矢印：縦中央。左右ガター（px）内に置くのでカードと被らない */}
                                            <motion.div
                                                className="pointer-events-auto absolute inset-y-0 right-0 w-8 sm:w-10 lg:w-16 flex items-center justify-center z-20"
                                                animate={{ x: [2, 0, 2] }}
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
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                <CustomModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                    {selectedProject && (
                        <div>
                            <h2
                                className={`${YasashisaFont.className} text-amber-300 text-2xl font-bold mb-4`}
                            >
                                {selectedProject.title}
                            </h2>
                            <div className="relative w-full h-64 mb-4">
                                <Image
                                    src={selectedProject.image || '/public/web-1.png'}
                                    alt={selectedProject.title}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-amber-800/50 text-amber-200 px-3 py-1 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-amber-300/90 mb-4">{selectedProject.description}</p>
                            {selectedProject.url && selectedProject.url !== '#' && (
                                <motion.a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block text-orange-400"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    GitHubはこちら
                                    <motion.div
                                        variants={{ rest: { width: 0 }, hover: { width: '100%' } }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bottom-[-2px] left-0 h-[1px] bg-orange-400"
                                    />
                                </motion.a>
                            )}
                        </div>
                    )}
                </CustomModal>
            </main>
        </>
    );
};

export default WorksPage;
