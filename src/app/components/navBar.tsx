/* ナビゲーションバーコンポーネント */

'use client';

import React from 'react';
import { Home, Laptop, ContactRound, BookText, Phone, Menu, Github, Instagram } from 'lucide-react';
import { NabvarIcon } from './Icons/NavbarIcon';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    Link: string;
    Display: string;
    Icon: React.ReactNode;
    Title: string;
}

type SocialItem = {
    href: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const Navbar = () => {
    const pathname: string = usePathname();

    const ManuItems: NavItemProps[] = [
        { Link: '/', Display: 'Home', Icon: <Home className="w-4 h-4" />, Title: 'Home　　' },
        {
            Link: '/about',
            Display: 'About',
            Icon: <ContactRound className="w-4 h-4" />,
            Title: 'About',
        },
        {
            Link: '/skills',
            Display: 'Skills',
            Icon: <Laptop className="w-4 h-4" />,
            Title: 'Skills　',
        },
        {
            Link: '/works',
            Display: 'works',
            Icon: <BookText className="w-4 h-4" />,
            Title: 'Works　　',
        },
        {
            Link: '/contact',
            Display: 'contact',
            Icon: <Phone className="w-4 h-4" />,
            Title: 'Contact',
        },
    ];

    // ★ 右側の外部リンクアイコン（必要に応じて追加・変更）
    const SocialItems: SocialItem[] = [
        { href: 'https://github.com/bp22013', label: 'GitHub', Icon: Github },
        {
            href: 'https://www.instagram.com/ma_sa.0218/?next=%2F',
            label: 'Instagram',
            Icon: Instagram,
        },
    ];

    const isActive = (link: string): boolean => pathname === link;

    const getCurrentPageTitle = (): string => {
        const currentItem = ManuItems.find((item) => item.Link === pathname);
        return currentItem ? currentItem.Title : '';
    };

    // アイコンの共通スタイル
    const iconBtn =
        'p-2 rounded-lg text-amber-200 hover:text-amber-100/90 hover:bg-[#8b4513]/50 transition-colors';

    return (
        <nav className="bg-[#1A0F00]/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* 左：ロゴ＋現在ページ名 */}
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg">
                            <NabvarIcon />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-transparent bg-clip-text">
                            {getCurrentPageTitle()}
                        </span>
                    </div>

                    {/* 中央：PC用ナビ */}
                    <div className="hidden md:flex items-center space-x-1">
                        {ManuItems.map((item) => (
                            <a
                                key={item.Link}
                                href={item.Link}
                                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive(item.Link)
                                        ? 'bg-[#8b4513] text-amber-200'
                                        : 'text-amber-200 hover:text-amber-200 hover:bg-[#8b4513]/50'
                                }`}
                            >
                                {item.Icon}
                                <span className="ml-2">{item.Display}</span>
                            </a>
                        ))}
                    </div>

                    {/* 右：PC用 外部リンクアイコン */}
                    <div className="hidden md:flex items-center gap-2">
                        {SocialItems.map(({ href, label, Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={iconBtn}
                                title={label}
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* 右：モバイル用（アイコン + ハンバーガー） */}
                    <div className="md:hidden flex items-center gap-1">
                        {SocialItems.map(({ href, label, Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className={iconBtn}
                                title={label}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                        <button className="flex items-center justify-center w-10 h-10 text-amber-200 hover:text-amber-100/80 hover:bg-amber-50/70 rounded-lg transition-all duration-200 ml-1">
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* モバイルの折りたたみ領域：外部リンクを置くスペース */}
                <div className="md:hidden border-t border-gray-200/50">
                    <div className="px-4 py-2 space-y-1">
                        <div className="flex items-center gap-3">
                            {SocialItems.map(({ href, label, Icon }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-amber-200 hover:text-amber-100/90 hover:bg-[#8b4513]/50 transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="text-sm">{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
