const express = require('express')
const usreRouter = require('./routes/user.routes')
const adminRouter = require('./routes/admin.routes')
const { courseRouter } = require('./routes/course.routes')

const app = express()

app.use('/api/v1/user', usreRouter)
app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/course', courseRouter)

app.listen('3000', () => {
    console.log('server is running on port 3000')
})