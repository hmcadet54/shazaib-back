import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import route from "./routes/route.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

// mongo db connection
const uri = "mongodb+srv://elderbrotherwedding:A_hd3LZtd.PcXBQ@crud.u8eekys.mongodb.net/auth-api?retryWrites=true&w=majority&appName=crud"

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: "*" }))

//routes
app.use('/', route)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// connection to the database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected")
    })
    .catch(err => {
        console.error("Database connection error:", err)
    })

// Start the server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`)
    })
}

export default app