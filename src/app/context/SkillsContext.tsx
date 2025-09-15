/* skillsページのデータ保持用コンテキスト */

'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SkillsContextType {
    areSkillsLoaded: boolean;
    setSkillsLoaded: (loaded: boolean) => void;
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
    const [areSkillsLoaded, setSkillsLoaded] = useState(false);

    return (
        <SkillsContext.Provider value={{ areSkillsLoaded, setSkillsLoaded }}>
            {children}
        </SkillsContext.Provider>
    );
};

export const useSkillsContext = () => {
    const context = useContext(SkillsContext);
    if (context === undefined) {
        throw new Error('useSkillsContext must be used within a SkillsProvider');
    }
    return context;
};
