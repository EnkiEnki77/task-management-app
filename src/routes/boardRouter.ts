import {Router} from "express"
import {createBoard, getBoard, getBoards} from "../handlers/board"

const router = Router()

router.post('/board', createBoard)

router.get('/board/:id', getBoard)

router.get('/board', getBoards)

export default router 