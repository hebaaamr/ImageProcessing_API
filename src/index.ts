import express, { Application } from 'express'
import imageRouter from './routes/imageRoutes'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

const app: Application = express()

app.use(imageRouter);

app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
export default app