import dotenv from 'dotenv-flow'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import rc from 'rc'

import indexRouter from './routes/index'

dotenv.config()
const __TEST__ = process.env.NODE_ENV === `test`

export const config = rc(`algocks`, {
  port: process.env.port,
})

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan(`dev`))

app.use(`/`, indexRouter)

if (!__TEST__) {
  app.listen(config.port, () => {
    console.log(`Listening at http://localhost:${config.port}`)
  })
}

export default app
