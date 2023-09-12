import { LucideIcon, SquareDashedBottom } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'
interface SidebarLinkProps {
    name: string;
    link: string;
    color: string;
    Icon: LucideIcon;
}

const SidebarLinks: FC<SidebarLinkProps> = ({name, link, Icon, color}) => {
  return (
    <Link href={link}>
        <Icon color={color}/>
        <span>{name}</span>
    </Link>
  )
}

export default SidebarLinks
