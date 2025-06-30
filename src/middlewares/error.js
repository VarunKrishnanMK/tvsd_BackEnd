export function errorHandler(err, req, res, _next) {
    console.error(err);
    if (err.code === "P2002") {
        err.message = "The record already exists";
        err.statusCode = 400;
    }
    if (err.code === "P2025") {
        err.message = "The record does not exist";
        err.statusCode = 404;
    }
    if (err.name === "PrismaClientValidationError") {
        err.message = "Invalid payload / Data validation error";
        err.statusCode = 400;
    }
    const status = err.statusCode || err.status || 500;
    res.status(status).json({
        error: err.message || 'Internal Server Error',
    });
}