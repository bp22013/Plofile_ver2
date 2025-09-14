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
                name: 'HTML',
                path: '/gbl/HTML.glb',
                description: '一番最初に学んだロジックを含まない言語で、今でもお世話になってます。',
            },
            {
                name: 'CSS',
                path: '/gbl/CSS.glb',
                description:
                    'HTMLと一緒に学び、jqueryなどを触っていましたが、最近はTilwindCSSを使用しています。',
            },
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
                path: '/gbl/FastAPI.glb',
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
                    'Arduino系のマイコンの組み込みに使用します。大学の部活では電装班に所属していた為、よくマイコンと組み合わせた電子回路を作成していました。また、ロジックのある言語では一番最初に学んだ為、思い出の言語でもあります。',
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
        models: [
            {
                name: 'PostgreSQL',
                path: '/gbl/PostgreSQL.glb',
                description:
                    '一番よく使うデータベースです。他にはSQLiteやMySQLを使いますが、drizzleやPrismaを使う関係でsupabaseやneonDBのPostgreSQLを使うことが多いです。',
            },
            {
                name: 'Java',
                path: '/gbl/Java.glb',
                description:
                    'AndroidアプリのUIの作成に使用していました。また、Spring BootやVaadinなどのUIでも使用していました。',
            },
            {
                name: 'React Native Expo',
                path: '/gbl/Expo.glb',
                description:
                    'React Nativeを使用してios用のネイティブアプリを開発する時に使用しようと試しましたが、ios用だとデプロイに99ドルかかるのであまり使いません。使用感自体はNext.jsとほぼ同じなので、学習コストはそれほどかかりませんでした。',
            },
            {
                name: ' 基本情報技術者',
                path: '/gbl/FE.glb',
                description:
                    '適当に勉強してたら受かってました。今は英語にお熱なので、後々応用を取ろうと考えてます。',
            },
            {
                name: '第一種運転免許',
                path: '/gbl/MiniCooper.glb',
                description:
                    '大学1年の夏に取りました。たまにレンタカーで旅したりします。モデルはミニクーパーの赤色です。',
            },
        ],
    },
];
