import { UserButton } from '@clerk/nextjs'
import Sidebar from '@components/layout/sidebar'
import React, { FC } from 'react'
interface DashboardLayoutProp {
    children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProp> = ({children}) => {
  return (
    <div className='relative'>
        <section className='h-screen hidden md:inline md:fixed bg-slate-900 md:w-72 text-white px-4 py-5'>
            <Sidebar />
        </section>
        <section className='ml-0 md:ml-72'>
            <main>
                <nav className='bg-slate-100 px-4 py-5 flex items-center justify-between'>
                    <div>
                        nav

                    </div>

                    <UserButton afterSignOutUrl='/' />
                </nav>
                <div className='px-4 py-4'>{children}</div>
            </main>
        </section>
        
    </div>
  )
}

export default DashboardLayout
