import 'dotenv/config.js'
import express from 'express'
import "./database/connectdb.js"
import AuthRouter from './routes/auth.route.js'
const app = express()

//Enable express to receive json
app.use(express.json())
app.use('/api/v1', AuthRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🔥🔥🔥🔥 http://localhost:${PORT}`))