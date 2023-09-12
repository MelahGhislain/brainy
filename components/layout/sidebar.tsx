"use client";
import SidebarLinks from '@components/ui/sidebarLinks';
import appConfig from '@lib/configs';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside>
        <div>
            <Link 
                href={appConfig.routes.dashboard} 
                className='flex items-center justify-start'
            >
                <div className='w-8 h-8 mr-4 relative'>
                    <Image 
                        src={appConfig.images.logo}
                        alt='brainy'
                        fill
                    />
                </div>
                <h2 className='font-bold text-xl'>Brainy</h2>
            </Link>
        </div>
        <div>
            <ul>
                {
                    appConfig.sidebar.map((link, index) => {
                        return (
                            <li key={`${link.name}-#${index}`}>
                                <SidebarLinks {...link} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar
