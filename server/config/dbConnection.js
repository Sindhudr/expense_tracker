import Config from '.'
import mongoose from 'mongoose'

export default class DBConnection {
  static async connect() {
    console.log('DB trying to connect on ' + new Date() + ' to url' + Config.DB)

    const options = {
      keepAlive: 1,
      autoReconnect: true,
      poolSize: 10,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    await mongoose.connect(Config.DB, options)
  }
}