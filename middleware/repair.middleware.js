const Repair = require("../models/repair.model")
const AppError = require("../utils/appError")
const catchAsync = require("../utils/catchAsync")

exports.validRepairById = catchAsync(async (req, res, next) => {
    const { id } = req.params

    const repair = await Repair.findOne({
        where: {
            id,
            status: 'pending'
        }
    })

    if (!repair) {
        return next(new AppError('Order not found', 400))
    }

    req.repair = repair
    next()
})