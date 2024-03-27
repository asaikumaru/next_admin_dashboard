import './card.scss'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className="card-container">
      <MdSupervisedUserCircle size={24} />
      <div className="card-texts">
        <span className="card-title">Total Users</span>
        <span className="card-number">100</span>
        <span className="card-detail">
          <span className="card-detail-positive">+10% </span>
          more then previous week
        </span>
      </div>
    </div>
  )
}

export default Card
