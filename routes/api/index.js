const router = require('express').Router()

const usersRoutes = require('./users-routes')
const thoughtsRoutes = require('./thoughts-routes')

router.use('/users', usersRoutes)
router.use('/thoughts', thoughtsRoutes)

module.exports = router