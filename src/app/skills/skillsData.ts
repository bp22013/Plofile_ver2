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
                    'Javascriptの後に学びました。単体で使うことは無く、基本他のフレームワークと組み合わせて使用します。',
            },
            {
                name: 'Next.js',
                path: '/gbl/next.glb',
                description:
                    'webアプリのフロントエンドを作成する時は、殆どこのフレームワークを使用しています。また、API Routerを使用してバックエンドを一緒に組み込むことが多いです。CSSはTailWindCSS派です。',
            },
        ],
    },
    {
        title: 'Backend',
        models: [
            {
                name: 'Hono',
                path: '/gbl/hono.glb',
                description:
                    '最近使用しているフレームワークで、RPCやcloud flareとの相性がいいので、プロジェクトではよく使います。',
            },
            {
                name: 'FastAPI',
                path: '/gbl/FastApi.glb',
                description:
                    'マイコンとwebの中継サーバーとしてよく使用していました。使用歴は比較的浅い方です。',
            },
            {
                name: 'Express',
                path: '/gbl/express.glb',
                description:
                    'バニラのTypescriptでバックエンドを書いていた後に学びました。しかし、すぐにHono.jsに移行したため、あまり使いませんでした。',
            },
            {
                name: 'Spring Boot',
                path: '/gbl/SpringBoot.glb',
                description:
                    '大学の授業でのwebアプリ製作で使用しました。このフレームワークで初めてMVCやテストコードを理解しました。',
            },
            {
                name: 'Laravel',
                path: '/gbl/Laravel.glb',
                description:
                    'Spring Bootを使用した後に学んで一時期はReactと併用していましたが、最新技術に食いついてしまった為、あまり使用しませんでした。',
            },
        ],
    },
    {
        title: 'Hardware',
        models: [
            {
                name: 'C',
                path: '/gbl/C.glb',
                description:
                    'Arduino系のマイコンの組み込みに使用します。部活では電装班に所属していた為、よくマイコンと組み合わせた電子回路を作成していました。また、ロジックのある言語では一番最初に学んだ為、思い出の言語でもあります。',
            },
            {
                name: 'C++',
                path: '/gbl/C++.glb',
                description:
                    'Arduino系のマイコンに使用したり、一時期ハマっていた競技プログラミングに使用しました。',
            },
            {
                name: 'Python',
                path: '/gbl/Python.glb',
                description:
                    'Rassbery PI系のマイコンの組み込みに使用します。また、FlaskやFastAPIなどのバックエンドや、画像処理類に使用しています。',
            },
        ],
    },
    {
        title: 'Others',
        models: [],
    },
];
