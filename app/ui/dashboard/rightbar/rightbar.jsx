import './rightbar.scss'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const RightBar = () => {
  return (
    <div className="rightbar-container">
      <div className="rightbar-item">
        <div className="rightbar-bg-container">
          <Image className="rightbar-bg-image" src="/astronaut.png" alt="" fill />
        </div>
        <div className="rightbar-text">
          <span className="rightbar-notification">🔥 Available Now</span>
          <h3 className="rightbar-text-title">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="rightbar-text-subtitle">Takes 4 minutes to learn</span>
          <p className="rightbar-text-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className="rightbar-button">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="rightbar-item">
        <div className="rightbar-text">
          <span className="rightbar-notification">🚀 Coming Soon</span>
          <h3 className="rightbar-text-title">
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className="rightbar-text-subtitle">Boost your productivity</span>
          <p className="rightbar-text-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero
            perspiciatis recusandae possimus.
          </p>
          <button className="rightbar-button">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightBar
