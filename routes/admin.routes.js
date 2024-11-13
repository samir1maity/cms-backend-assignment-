const { Router } = require('express')
const adminRouter = Router()

adminRouter.post('/signin', () => {
    console.log('signin done')
})

adminRouter.post('/signup', () => {
    console.log('signin done')
})

adminRouter.post('/course', () => {
    console.log('create course')
})

adminRouter.put('/course', () => {
    console.log('update course')
})

adminRouter.put('/course/bulk', () => {
    console.log('created all courses')
})

module.exports = adminRouter