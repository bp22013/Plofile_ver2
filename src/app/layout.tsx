import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navBar';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ToasterContext } from './context/ToastContext';
import { ReactNode, Suspense } from 'react';
import { SkillsProvider } from './context/SkillsContext';

// Googleフォント'Inter'を読み込み、ラテン文字のサブセットを指定
const inter: NextFont = Inter({ subsets: ['latin'] });

// サイトの基本情報を設定
const site_name: string = 'Portfolio'; // サイト名
const site_description: string = '青木雅季'; // サイトの説明
const twitter_id: string = '@masaki_0218'; // TwitterのID
const url: string = process.env.NEXT_PUBLIC_APP_BASE_URL!; // サイトのURL（環境変数から取得）
const image: string = `${url}/portfolio.png`; // OGP画像のパス
const gaId = process.env.NEXT_PUBLIC_GA_ID; // Google AnalyticsのID（環境変数から取得）

// Next.jsのメタデータ設定
export const metadata: Metadata = {
    // デフォルトのタイトルとテンプレート
    title: {
        default: `${site_name}`,
        template: `%s | ${site_name}`,
    },
    description: site_description, // サイトの説明
    keywords: ['aoki', 'profile', '青木', '雅季'], // SEOキーワード
    // Open Graphプロトコルの設定（Facebookなどで表示される情報）
    openGraph: {
        type: 'website',
        locale: 'ja_JP',
        title: site_name,
        description: site_description,
        siteName: site_name,
        url: url,
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
    },
    // Twitterカードの設定
    twitter: {
        title: `${site_name}`,
        description: site_description,
        card: 'summary_large_image',
        images: {
            url: image,
            type: 'image/png',
            width: 1200,
            height: 630,
            alt: 'Profile Image',
        },
        creator: twitter_id,
    },
    // メタデータの基準となるURL
    metadataBase: new URL(url ?? 'http://localhost:3000'),
};

/**
 * ルートレイアウトコンポーネント
 * @param {ReactNode} children - 子要素
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            {/* Suspenseを使用して、非同期処理の待機中にフォールバックUIを表示 */}
            <Suspense>
                {/* Interフォントと基本のテキストカラーを適用 */}
                <body className={`${inter.className} text-amber-200`}>
                    {/* スキルデータを管理するProvider */}
                    <SkillsProvider>
                        {/* ナビゲーションバー */}
                        <Navbar />
                        {/* トースト通知（ポップアップメッセージ）のコンテキスト */}
                        <ToasterContext />
                        {/* 各ページコンポーネントがここにレンダリングされる */}
                        {children}
                    </SkillsProvider>
                </body>
            </Suspense>
        </html>
    );
}
