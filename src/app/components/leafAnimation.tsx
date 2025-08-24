/* 背景の葉のアニメーション */

import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useEffect, useState } from 'react';

export const AnimatedLeaves = () => {
    const [leaves, setLeaves] = useState<{ x: string; rotate: number; size: number }[]>([]);
    useEffect(() => {
        setLeaves(
            Array.from({ length: 65 }, () => ({
                x: `${Math.random() * 100}%`,
                rotate: Math.random() * 360,
                size: Math.random() * 20 + 10,
            }))
        );
    }, []);
    return (
        <div className="fixed inset-0 pointer-events-none">
            {leaves.map((leaf, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: leaf.x }}
                    initial={{ y: -20 }}
                    animate={{ y: '120vh', rotate: leaf.rotate }}
                    transition={{
                        duration: Math.random() * 10 + 40,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: Math.random() * -40,
                    }}
                >
                    <Leaf
                        className="text-amber-700/20"
                        style={{ width: leaf.size, height: leaf.size }}
                    />
                </motion.div>
            ))}
        </div>
    );
};
