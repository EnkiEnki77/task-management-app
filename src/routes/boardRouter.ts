import {Router} from "express"
import {createBoard, getBoard, getBoards} from "../handlers/board"

const router = Router()

router.post('/board', createBoard)

router.get('/board', getBoard)

router.get('/board/:id', getBoards)

export default router 