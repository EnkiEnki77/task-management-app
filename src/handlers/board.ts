import prisma from "../db"


export const createBoard = async (req, res, next) => {
    const board = await prisma.board.create({
        data: {
            name: req.body.name,
           
        }
    })

    res.json({message: `Created ${board.name} board`})
}

export const getBoard = async (req, res, next) => {
    const board = await prisma.board.findFirst({
        where: {
            name: req.body.name,
           
        }
    })

    res.json({data: board})
}

export const getBoards = async (req, res, next) => {
    const board = await prisma.board.findMany({
        
    })

    res.json({data: board})
}