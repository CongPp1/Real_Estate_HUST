const { notFound } = require('../middlewares/errorHandler')
const auth = require('./authRoute')

const initRoutes = (app) => {
    console.log('oke')
    app.use('/api/v1/auth', auth)

    app.use(notFound)
}

module.exports = initRoutes