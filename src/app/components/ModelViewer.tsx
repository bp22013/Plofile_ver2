'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// モデルを読み込んでアニメーションを適用するコンポーネント
function Model({ modelPath, onLoad }: { modelPath: string; onLoad?: () => void }) {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef<THREE.Group>(null);

    // 読み込みが完了したらonLoadコールバックを呼び出す
    useEffect(() => {
        if (scene && onLoad) {
            onLoad();
        }
    }, [scene, onLoad]);

    // フワフワ動くアニメーション
    useFrame(({ clock }) => {
        if (modelRef.current) {
            modelRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.05;
            modelRef.current.position.x = Math.cos(clock.getElapsedTime()) * 0.05;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={1.5} />;
}

// 3Dビューアのメインコンポーネント
export default function ModelViewer({ modelPath, onLoad }: { modelPath: string; onLoad?: () => void }) {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[3, 3, 5]} intensity={3} />
                <Suspense fallback={null}>
                    <Model modelPath={modelPath} onLoad={onLoad} />
                </Suspense>
            </Canvas>
        </div>
    );
}
