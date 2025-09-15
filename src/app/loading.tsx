'use client';

/* ローディング画面 */

import React from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/magicui/terminal';

/**
 * ローディング画面コンポーネント
 * @returns {JSX.Element}
 */
export default function Loading() {
    return (
        // 画面全体を覆うコンテナ
        <div className="fixed inset-0 flex items-center justify-center bg-[#1A0F00]">
            {/* ターミナル風のUIコンポーネント */}
            <Terminal className="w-[600px] max-w-[90%] text-amber-200 border border-amber-600 shadow-lg shadow-amber-900/30">
                {/* タイピングアニメーションでテキストを表示 */}
                <TypingAnimation>&gt; Loading Portfolio...</TypingAnimation>

                {/* アニメーション付きのテキスト（成功メッセージ） */}
                <AnimatedSpan className="text-green-400">
                    <span>✔ Starting development server...</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-green-400">
                    <span>✔ Compiling client and server modules</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-green-400">
                    <span>✔ Preparing assets</span>
                </AnimatedSpan>

                <AnimatedSpan className="text-green-400">
                    <span>✔ Optimizing fonts</span>
                </AnimatedSpan>

                {/* アニメーション付きのテキスト（情報メッセージ） */}
                <AnimatedSpan className="text-blue-400">
                    <span>ℹ Loading portfolio UI...</span>
                </AnimatedSpan>

                {/* タイピングアニメーションで完了メッセージを表示 */}
                <TypingAnimation className="text-amber-300">
                    Success! Portfolio is ready.
                </TypingAnimation>
            </Terminal>
        </div>
    );
}
