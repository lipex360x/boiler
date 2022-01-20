import { app, typeorm } from './app'

class Server {
  async execute () {
    await typeorm.execute()

    const api = app.listen(process.env.API_PORT, () => {
      console.log(`\n🚀 API Started on port ${process.env.API_PORT}`)
    })

    process.on('SIGINT', () => {
      console.log('\n⚓ API Stopped')
      api.close()
    })
  }
}

export default new Server().execute()
