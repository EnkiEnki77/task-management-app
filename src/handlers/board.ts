import prisma from "../db"


export const createBoard = async (req, res, next) => {
    const board = await prisma.board.create({
        data: {
            name: req.body.name,
           
        }
    })

    res.json({message: `created`})
}