'use client'

import './navbar.scss'
import { usePathname } from 'next/navigation'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="navbarContainer">
      <div className="navbarTitle">{pathname.split('/').pop()}</div>
      <div className="navbarMenu">
        <div className="navbarSearch">
          <MdSearch />
          <input type="text" placeholder="Search..." className="navbarInput" />
        </div>
        <div className="navbarIcons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
