/* スキル表示ページ */

'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedLeaves } from '../components/leafAnimation';
import { CustomModal } from '../components/CustomModal';
import Loading from '../loading';
import { skillCategories, type Skill } from './skillsData';

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
                className="relative flex flex-col items-center px-6 pt-15 pb-12 min-h-screen w-full"
            >
                <div className="absolute top-0 left-0 w-full h-full">
                    <AnimatedLeaves />
                </div>
                <div className="text-center z-10 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-transparent bg-clip-text">
                        Skills
                    </h1>
                    <p className="mt-2 text-lg text-amber-300/80">使用技術一覧（※クリックで詳細を表示）</p>
                </div>

                <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
                    {skillCategories.map((category) => (
                        <Card
                            key={category.title}
                            className="bg-[#2a1a0a]/60 backdrop-blur-md text-amber-200 border border-amber-700/50 shadow-lg"
                        >
                            <CardHeader>
                                <CardTitle className="text-amber-300 text-2xl">
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
                    ))}
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
