/* ローディング画面 */

'use client';

import React from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from '@/components/magicui/terminal';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1A0F00]">
            <Terminal className="w-[600px] max-w-[90%] text-amber-200 border border-amber-600 shadow-lg shadow-amber-900/30">
                <TypingAnimation>&gt; Loading Portfolio...</TypingAnimation>

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

                <AnimatedSpan className="text-blue-400">
                    <span>ℹ Loading portfolio UI...</span>
                </AnimatedSpan>

                <TypingAnimation className="text-amber-300">
                    Success! Portfolio is ready.
                </TypingAnimation>
            </Terminal>
        </div>
    );
}
