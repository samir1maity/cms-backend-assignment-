const express = require('express')
const usreRouter = require('./routes/user.routes')
const adminRouter = require('./routes/admin.routes')
const { courseRouter } = require('./routes/course.routes')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use('/api/v1/user', usreRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/course', courseRouter)


const main = async () => {
    await mongoose.connect(process.env.DATABASE_URL)

    app.listen(process.env.PORT, () => {
        console.log('database connected, server is running')
    })
}

main()