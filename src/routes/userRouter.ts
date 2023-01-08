import {Router} from 'express'
import { createUser, signIn } from '../handlers/user'
import { handleValidationErrors } from '../modules/middleware'
import { body } from 'express-validator/src/middlewares/validation-chain-builders'

const router = Router()

router.post('/register', body('name').isString(), body('password').isString(), handleValidationErrors, createUser)
router.post('/signin', body('name').isString(), body('password').isString(), handleValidationErrors, signIn)

export default router