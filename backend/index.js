import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
dotenv.config()

//connect database
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}
// midllewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500
    const errorMessage = error.message || 'Wrong !'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)


app.listen(8800, () => {
    connect()
    console.log("Connected to Backend")
})
