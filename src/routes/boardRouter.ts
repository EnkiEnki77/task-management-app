import {Router} from "express"
import {createBoard, deleteBoard, editBoard, getBoard, getBoards} from "../handlers/board"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"

const router = Router()

router.post('/board', body('name').isString(), handleValidationErrors, createBoard)

router.get('/board/:id', getBoard)

router.get('/board', getBoards)

router.delete('/board/:id', deleteBoard)

router.put('/board/:id', body('name').optional().isString(), handleValidationErrors, editBoard)

export default router 