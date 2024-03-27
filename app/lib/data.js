import { User } from '@/app/lib/models'
import { connectToDB } from '@/app/lib/utils'

export const fetchUsers = async (q) => {
  console.log(q)
  const regex = new RegExp(q, 'i')

  try {
    connectToDB()
    const users = await User.find({ username: { $regex: regex } })
    return users
  } catch (error) {
    console.log(error)
    throw new Error('Failed to fetch users!')
  }
}