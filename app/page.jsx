import Link from 'next/link'

const Homepage = () => {
  return (
    <div>
      Homepage
      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  )
}

export default Homepage
