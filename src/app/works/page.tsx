/* Worksページ */

'use client';

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from '../components/leafAnimation';

const WorksPage: NextPage = () => {
    return (
        <div className="bg-[#1A0F00] fixed inset-0 overflow-hidden">
            <main>
                <AnimatedLeaves />
            </main>
        </div>
    );
};

export default WorksPage;
