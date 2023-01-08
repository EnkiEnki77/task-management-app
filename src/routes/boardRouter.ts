import {Router} from "express"
import {createBoard, getBoard, getBoards} from "../handlers/board"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"

const router = Router()

router.post('/board', body('name').isString(), handleValidationErrors, createBoard)

router.get('/board/:id', getBoard)

router.get('/board', getBoards)

export default router 