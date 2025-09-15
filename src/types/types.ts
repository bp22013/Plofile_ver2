// スキルページの型定義
export interface Skill {
    name: string;
    path: string;
    description: string;
}

export interface SkillCategory {
    title: string;
    models: Skill[];
}

// 作品ページの型定義
export interface Project {
    title: string;
    description: string;
    technologies: string[];
    url: string;
    image: string;
}

export interface WorkCategory {
    category: string;
    projects: Project[];
}
