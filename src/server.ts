import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRouter from './routes/userRouter'
import boardRouter from './routes/boardRouter'
import columnRouter from './routes/columnRouter'
import { protect } from './modules/auth'
import { handleRouteErrors } from './modules/middleware'
import taskRouter from './routes/taskRouter'
import subTaskRouter from './routes/subTaskRouter'

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", protect,  boardRouter)
app.use("/api", protect, columnRouter)
app.use("/api", protect, taskRouter)
app.use("/api", protect, subTaskRouter)

app.use(userRouter)

app.use(handleRouteErrors)

export default app