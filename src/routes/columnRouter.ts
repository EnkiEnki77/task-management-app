import {Router} from "express"
import {createColumn, deleteColumn,  getColumns} from "../handlers/column"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"

const router = Router()

router.post('/board/:boardId/column', body('name').isString(), handleValidationErrors, createColumn)

router.get('/board/:boardId/column', getColumns)

router.delete('/board/:boardId/column/:columnId', deleteColumn)

export default router 