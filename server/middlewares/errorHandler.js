const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    const message = err?.message

    return res.status(statusCode).json({    
        success: false,
        message,
    })
}

const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

module.exports = {
    errorHandler,
    notFound
}