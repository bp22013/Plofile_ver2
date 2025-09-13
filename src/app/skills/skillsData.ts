// スキルデータ定義ファイル

export interface Skill {
    name: string;
    path: string;
    description: string;
}

export interface SkillCategory {
    title: string;
    models: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        models: [
            {
                name: 'JavaScript',
                path: '/gbl/Javascript.glb',
                description:
                    'HTML/CSSの後に学びました。今はTypescriptの方に移行したので触れる機会は少なくなりました。',
            },
            {
                name: 'Typescript',
                path: '/gbl/Typescript.glb',
                description:
                    '主にNext.jsやHono.jsを使用する時に利用することが多いです。少し前まではバックエンドをバニラのTypescriptで書いてました。',
            },
            {
                name: 'React',
                path: '/gbl/React.glb',
                description:
                    '静的型付けによる安全な開発を好みます。大規模なプロジェクトでの導入経験があります。',
            },
            {
                name: 'Next.js',
                path: '/gbl/next.glb',
                description:
                    'webアプリのフロントエンドを作成する時は、殆どこのフレームワークを使用しています。',
            },
            
        ],
    },
    {
        title: 'Backend',
        models: [
            {
                name: 'Python',
                path: '/gbl/Python.glb',
                description: 'Web API開発からデータ分析、機械学習まで幅広く使用しています。',
            },
            {
                name: 'Hono',
                path: '/gbl/hono.glb',
                description:
                    'Cloudflare Workersなどのエッジ環境で動作する高速なAPI開発に使用します。',
            },
            {
                name: 'FastAPI',
                path: '/gbl/FastApi.glb',
                description:
                    'Python製の高速なWebフレームワーク。非同期処理やDIの仕組みを活かした開発が得意です。',
            },
            {
                name: 'Express',
                path: '/gbl/express.glb',
                description:
                    'Node.jsのデファクトスタンダード。シンプルなAPIから複雑なアプリケーションまで対応できます。',
            },
        ],
    },
    {
        title: 'Hardware & Languages',
        models: [
            {
                name: 'Java',
                path: '/gbl/Java.glb',
                description: '大学での学習経験があります。オブジェクト指向の基礎を学びました。',
            },
            {
                name: 'PHP',
                path: '/gbl/PHP.glb',
                description:
                    'Web開発の初期から使用しており、Laravelなどのフレームワーク経験も豊富です。',
            },
            {
                name: 'C',
                path: '/gbl/C.glb',
                description: '低レイヤーのプログラミングや組み込みシステムへの理解があります。',
            },
            {
                name: 'C++',
                path: '/gbl/C++.glb',
                description:
                    'C言語に加え、オブジェクト指向やパフォーマンスが求められる場面で使用します。',
            },
        ],
    },
    {
        title: 'Others',
        models: [
            {
                name: 'Spring Boot',
                path: '/gbl/SpringBoot.glb',
                description:
                    'Javaエコシステムでの大規模開発に使用。DIやAOPについての知識があります。',
            },
            {
                name: 'Laravel',
                path: '/gbl/Laravel.glb',
                description:
                    'PHP製のフルスタックフレームワーク。Eloquent ORMやBladeテンプレートが好きです。',
            },
        ],
    },
];
