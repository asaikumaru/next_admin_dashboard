import mongoose from 'mongoose'

export const connectToDB = async () => {
  const connection = {}
  try {
    if (connection.isConnected) return

    const db = await mongoose.connect(
      'mongodb+srv://sashadev:sasha1@cluster1.92mluao.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster1',
    )
    connection.isConnected = db.connection[0].readyState
  } catch (error) {
    throw new Error(error)
  }
}
