const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.validRole = catchAsync(async (req, res, next) => {
    const { sessionUser } = req

    if (sessionUser.role !== 'employee') {
        return next(new AppError('Usted no tiene acceso ah esata area', 404))
    }

    next()
})