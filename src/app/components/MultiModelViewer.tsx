/* eslint-disable @typescript-eslint/no-explicit-any */
/* 3Dモデル表示コンポーネント
   - 1カテゴリー=1カード（1つのCanvasに複数モデル）
   - 横/縦間隔を props で調整可能
   - モデルは左右に“わずかに回転”するスイングで、ホバー時はカーソルが pointer
   - Canvas 横幅は canvasClassName、カード横幅は cardClassName で制御
*/

'use client';

import React, { Suspense, useRef, useEffect, useCallback, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useCursor } from '@react-three/drei';
import * as THREE from 'three';
import { type Skill, type SkillCategory } from '../skills/skillsData';

function Model({
    model,
    position,
    onModelClick,
    onLoad,
}: {
    model: Skill;
    position: [number, number, number];
    onModelClick: (skill: Skill) => void;
    onLoad: () => void;
}) {
    const { scene } = useGLTF(model.path);
    const modelRef = useRef<THREE.Group>(null);

    // ホバー時にカーソルを pointer に
    const [hovered, setHovered] = useState(false);
    useCursor(hovered, 'pointer', 'auto');

    useEffect(() => {
        if (scene) onLoad();
    }, [scene, onLoad]);

    useFrame(({ clock }) => {
        if (!modelRef.current) return;
        const t = clock.getElapsedTime();

        // 左右にわずかに回転（ヨーの往復）
        const swingDeg = 10;
        const swingSpeed = 0.9;
        const yawAmp = THREE.MathUtils.degToRad(swingDeg);
        modelRef.current.rotation.y = Math.sin(t * swingSpeed + position[0] * 0.35) * yawAmp;

        // 弱い上下フロート（不要なら削除）
        modelRef.current.position.y = position[1] + Math.sin(t * 0.9 + position[0]) * 0.06;

        modelRef.current.rotation.x = 0;
        modelRef.current.rotation.z = 0;
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={1.2}
            position={position}
            onPointerOver={(e: any) => {
                e.stopPropagation();
                setHovered(true);
            }}
            onPointerOut={() => setHovered(false)}
            onClick={(e: any) => {
                e.stopPropagation();
                onModelClick(model);
            }}
        />
    );
}

function CategoryCanvas({
    category,
    onModelClick,
    onAllModelsLoaded,
    spacingX = 3.4,
    spacingY = 3.0,
    canvasClassName = 'w-full',
}: {
    category: SkillCategory;
    onModelClick: (skill: Skill) => void;
    onAllModelsLoaded: () => void;
    spacingX?: number;
    spacingY?: number;
    canvasClassName?: string;
}) {
    const loadedCount = useRef(0);

    const handleSingleModelLoad = useCallback(() => {
        loadedCount.current += 1;
        if (loadedCount.current === category.models.length) onAllModelsLoaded();
    }, [category.models.length, onAllModelsLoaded]);

    const getPosition = (index: number): [number, number, number] => {
        const itemsPerRow = 3;
        const row = Math.floor(index / itemsPerRow);
        const col = index % itemsPerRow;
        const x = (col - (itemsPerRow - 1) / 2) * spacingX;
        const y = -(row * spacingY) + 1;
        return [x, y, 0];
    };

    return (
        <div className={`mx-auto ${canvasClassName} h-[350px] md:h-[400px]`}>
            <Canvas camera={{ position: [0, 0, 9], fov: 50 }}>
                <ambientLight intensity={2.5} />
                <directionalLight position={[5, 5, 5]} intensity={4} />
                <Suspense fallback={null}>
                    {category.models.map((model, index) => (
                        <Model
                            key={model.name}
                            model={model}
                            position={getPosition(index)}
                            onModelClick={onModelClick}
                            onLoad={handleSingleModelLoad}
                        />
                    ))}
                </Suspense>
            </Canvas>
        </div>
    );
}

export default function MultiCanvasViewer({
    categories,
    onModelClick,
    onAllModelsLoaded,
    gridClassName = 'grid-cols-1 md:grid-cols-2',
    modelSpacingX = 3.4,
    modelSpacingY = 3.0,
    canvasClassName = 'w-full',
    cardClassName = 'w-full',
}: {
    categories: SkillCategory[];
    onModelClick: (skill: Skill) => void;
    onAllModelsLoaded: () => void;
    gridClassName?: string;
    modelSpacingX?: number;
    modelSpacingY?: number;
    canvasClassName?: string;
    cardClassName?: string;
}) {
    return (
        <div className={`grid ${gridClassName} gap-6 w-full`}>
            {categories.map((category) => (
                <div
                    key={category.title}
                    className={`bg-[#2a1a0a]/60 rounded-xl p-4 mx-auto ${cardClassName}`}
                >
                    <h2 className="text-center text-amber-300 text-xl font-bold mb-2">
                        {category.title}
                    </h2>
                    <CategoryCanvas
                        category={category}
                        onModelClick={onModelClick}
                        onAllModelsLoaded={onAllModelsLoaded}
                        spacingX={modelSpacingX}
                        spacingY={modelSpacingY}
                        canvasClassName={canvasClassName}
                    />
                </div>
            ))}
        </div>
    );
}
