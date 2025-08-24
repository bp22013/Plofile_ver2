"use client";

import React from 'react';
import { NextPage } from 'next';
import { AnimatedLeaves } from './components/leafAnimation';

const DashboardPage: NextPage = () => {
    return (
        <main>
            <AnimatedLeaves />
        </main>
    );
}

export default DashboardPage