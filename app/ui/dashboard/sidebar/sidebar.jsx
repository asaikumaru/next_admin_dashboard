import './sidebar.scss'
import {
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
  MdPeople,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'
import { auth, signOut } from '@/app/auth'

const menuItems = [
  {
    title: 'Pages',
    list: [
      { title: 'Dashboard', path: '/dashboard', icon: <MdDashboard /> },
      { title: 'Users', path: '/dashboard/users', icon: <MdSupervisedUserCircle /> },
      { title: 'Products', path: '/dashboard/products', icon: <MdShoppingBag /> },
      { title: 'Transactions', path: '/dashboard/transactions', icon: <MdAttachMoney /> },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]
/**
 * Sidebar component to display user information and navigation menu
 */
const Sidebar = async () => {
  const { user } = await auth()
  return (
    <div className="sidebarContainer">
      {/* User information section */}
      <div className="sidebarUser">
        <Image
          className="sidebarUserImage"
          src={user.img || '/noavatar.png'}
          width={50}
          height={50}
          alt="avatar"
        />
        <div className="sidebarUserDetail">
          <span className="sidebarUsername">{user?.username}</span>
          <span className="sidebarUserTitle">{user?.isAdmin ? 'Admin' : 'User'}</span>
        </div>
      </div>

      {/* Navigation menu */}
      <ul className="sidebarList">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="sidebarCat">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <button className="sidebarLogout">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar
