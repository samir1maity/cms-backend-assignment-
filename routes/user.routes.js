const { Router } = require('express')
const userRouter = Router()

userRouter.post('/signin', () => {
    console.log('signin done')
})

userRouter.post('/signup', () => {
    console.log('signin done')
})

userRouter.get('/purchases', () => {
    console.log('signin done')
})

module.exports = userRouter