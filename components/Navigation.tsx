'use client'
import Link from "next/link";
import Image from "next/image";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";


const navigationMenu = [
    {
        href: '#home',
        label: 'ホーム',
    },
    {
        href: '#services',
        label: 'サービス',
    },
    {
        href: '#solutions',
        label: 'ソリューション',
    },
    {
        href: '#testimonials',
        label: 'カスタマー',
    },
    {
        href: '#blog',
        label: 'ブログ・ニュース',
    },
];

function Navigation() {
    const [navOpen, setNavOpen] = useState(true);
    
    return (
        <>
        {/* WEBメニュー */}
        <header className="py-7">
            <div className="container px-4 mx-auto">
                <div className="flex justify-between items-center">
                    {/* ロゴ */}
                    <div>
                        <Link href='/'>
                          <Image src={'/assets/logo.png'} width={90} height={60} alt='ロゴ'/>
                        </Link>
                    </div>
                    {/* メニュー */}
                    <div className="hidden lg:block text-center">
                    <ul className="flex space-x-7">
                            {navigationMenu.map((item, index) => (
                                <li key={index}>
                                <Link href={item.href}>
                                {item.label}
                                </Link>
                                </li>
                            ))}
                    </ul>
                    </div>
                     {/* ボタン */}
                     <div>
                        <Link href={'#'}
                        className="btnBlue inline-fle lg:inline-block max-lg:hidden"
                        >申し込み
                        </Link>

                        {/* モバイル用 */}
                        <button className="block lg:hidden">
                        <HiOutlineBars3 className="text-4xl"/>
                        </button>

                        {/* レスポンシブ用 */}
                     </div>
                </div>
            </div>
        </header>

        {/* モバイルメニュー */}
        <div className={navOpen ? 'py-0 block w-screen z-[900]' : 'hidden'}>
            <div className="h-screen w-screen z-[900] top-0 fixed bg-black
            bg-opacity-50
            ">
                <div className="h-screen bg-white w-[380px] top-0 right-0 z-[900] fixed">
                    <div className="h-14 px-10 border-b flex items-center">
                        <button className="flex items-center space-x-3">
                        <IoClose />
                        <span>閉じる</span>
                        </button>
                    </div>
                    <div className="h-ful py-3 px-10 pb-20">
                        <ul className="block mb-7">
                            {navigationMenu.map((item, index) => (
                                <li>
                                <Link href={item.href} className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-green">
                                <span>{item.label}</span>
                                <span className="relative left-2 duration-300
                                transition-all ease-out opacity-0 group-hover:opacity-100:left-3
                                "><BiChevronRight className="text-xl"/></span>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navigation;