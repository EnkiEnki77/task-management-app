import {Router} from "express"
import {createColumn, deleteColumn,  getColumns} from "../handlers/column"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"

const router = Router()

router.post('/column', body('name').isString(), handleValidationErrors, createColumn)

router.get('board/:id/column', getColumns)

router.delete('board/:id/column/column/:columnId', deleteColumn)

export default router 