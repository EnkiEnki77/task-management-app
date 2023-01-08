import prisma from "../db"


export const createBoard = async (req, res, next) => {
    const board = await prisma.board.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({message: `Created ${board.name} board`})
}

export const getBoard = async (req, res, next) => {
    const board = await prisma.board.findUnique({
        where: {
            id: req.params.id  
        }
    })

    res.json({data: board})
}

export const getBoards = async (req, res, next) => {
    const board = await prisma.board.findMany({
        
    })

    res.json({data: prisma})
}