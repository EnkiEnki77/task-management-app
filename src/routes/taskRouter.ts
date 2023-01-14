import {Router} from "express"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"
import { createTask, deleteTask, editTask, getTask, getTasks } from "../handlers/task"

const router = Router()

router.post('/board/:boardId/task', body('title').isString(), body('description').isString(), body('status').isString(), handleValidationErrors, createTask)

router.get('/board/:boardId/column/:columnId/task/:taskId', getTask)

router.get('/board/:boardId/column/:columnId/task', getTasks)

router.delete('/board/:boardId/column/:columnId/task/:taskId', deleteTask)

router.put('/board/:boardId/column/:columnId/task/:taskId', editTask)

export default router 