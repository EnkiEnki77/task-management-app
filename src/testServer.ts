import express from "express"
import boardRouter from './routes/boardRouter'

function createServer() {
	const app = express()
	app.use(express.json())
	app.use("/api", boardRouter)
	return app
}

module.exports = createServer