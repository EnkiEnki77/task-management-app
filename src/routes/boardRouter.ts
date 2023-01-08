import {Router} from "express"
import {createBoard} from "../handlers/board"

const router = Router()

router.post('/board', createBoard)

export default router 