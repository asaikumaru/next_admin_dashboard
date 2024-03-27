import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import '../ui/dashboard/dashboard.scss'
import Footer from '../ui/dashboard/footer/footer'

const Layout = ({ children }) => {
  return (
    <div className="dashboardContainer">
      <div className="dashboardMenu">
        <Sidebar />
      </div>
      <div className="dashboardContent">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
