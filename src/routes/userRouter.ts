import {Router} from 'express'
import { createUser } from '../handlers/user'

const router = Router()

router.post('/register', createUser)

export default router