const { Router } = require('express')

const courseRouter = Router()

courseRouter.get('/preview', () => {
    console.log('all courses')
})

courseRouter.post('/purchase', () => {
    console.log('purchase courses')
})

module.exports = {
    courseRouter: courseRouter
}