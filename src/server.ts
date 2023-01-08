import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import boardRouter from './routes/boardRouter'

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(boardRouter)

export default app