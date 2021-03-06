import app from './app'
import logger from './logger'
import config from './config'

app.listen(config.port, () => {
  logger.info(`App started and listening on port ${config.port}`)
})
