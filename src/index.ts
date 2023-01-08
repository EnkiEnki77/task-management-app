import app from './server'
import * as dotenv from "dotenv"

dotenv.config()

const port = 8001

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
}) 