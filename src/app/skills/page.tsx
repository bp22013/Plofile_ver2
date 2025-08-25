/* スキル表示ページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from '../components/leafAnimation';

const SkillsPage: NextPage = () => {
    return (
        <div className="bg-[#1A0F00] fixed inset-0 overflow-hidden">
            <main>
                <AnimatedLeaves />
            </main>
        </div>
    );
};

export default SkillsPage;
