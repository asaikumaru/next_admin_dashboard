import './transactions.scss'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h2 className="transactions-title">Latest </h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="transactions-user">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="transactions-user-image"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="card-status status-pending">Pending</span>
            </td>
            <td>2022-01-01</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>
              <div className="transactions-user">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="transactions-user-image"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="card-status status-done">Done</span>
            </td>
            <td>2023-11-01</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>
              <div className="transactions-user">
                <Image
                  src="/noavatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="transactions-user-image"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="card-status status-cancelled">Cancelled</span>
            </td>
            <td>2022-7-14</td>
            <td>$300</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
