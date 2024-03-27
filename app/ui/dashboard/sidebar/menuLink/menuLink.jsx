'use client'

import Link from 'next/link'
import './menuLink.scss'
import { usePathname } from 'next/navigation'

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`mlContainer ${pathname === item.path && 'active'}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
