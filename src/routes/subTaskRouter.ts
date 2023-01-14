import {Router} from "express"
import {body} from 'express-validator'
import { handleValidationErrors } from "../modules/middleware"
import { createSubtask, deleteSubtask, getSubtasks} from "../handlers/subTask"

const router = Router()

router.post('/board/:boardId/column/:columnId/task/:taskId', body('title').isString(),  handleValidationErrors, createSubtask)

router.get('/board/:boardId/column/:columnId/task/:taskId/subtask', getSubtasks)

// router.get('/board/:boardId/column/:columnId/task')

router.delete('/board/:boardId/column/:columnId/task/:taskId/subtask/:subtaskId', deleteSubtask)

// router.put('/board/:boardId/column/:columnId/task/:taskId')

export default router 