import Card from '../ui/dashboard/card/card'
import '../ui/dashboard/dashboard.scss'
import RightBar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-main">
        <div className="dashboard-cards">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="dashboard-side">
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard
