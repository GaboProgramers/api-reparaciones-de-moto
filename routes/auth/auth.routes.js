const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, login } = require("../../controllers/auth/auth.controller");
const { validIfExistUserEmail } = require("../../middleware/user.middleware");
const { validateFields } = require("../../middleware/validateFild.middleware");

const router = Router()

router.post('/signup', [
    check('name', 'The name require').not().isEmpty(),
    check('email', 'The email require').not().isEmpty(),
    check('email', 'The email must be a correct format').isEmail(),
    check('password', 'The pasword must be mandatory').not().isEmpty(),
    validateFields,
    validIfExistUserEmail
], createUser);

router.post('/login', [
    check('email', 'The email require').not().isEmpty(),
    check('email', 'The email must be a correct format').isEmail(),
    check('password', 'The pasword must be mandatory').not().isEmpty(),
    validateFields
], login)

module.exports = {
    authRouter: router
}