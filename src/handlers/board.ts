import prisma from "../db"


export const createBoard = async (req, res, next) => {
    try{const board = await prisma.board.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({message: `Created ${board.name} board`})}
    catch(err){
        next(err)
    }
}

export const getBoard = async (req, res, next) => {
    try{const board = await prisma.board.findUnique({
        where: {
            id: req.params.id  
        }
    })

    res.json({data: board})}
    catch(err){next(err)}
}

export const getBoards = async (req, res, next) => {
   try{ const board = await prisma.board.findMany({
        
    })

    res.json({data: board})}
    catch(err){next(err)}
}

export const deleteBoard = async (req, res, next) => {
    const board = await prisma.board.findFirst({
        where: {
            id:req.params.id,
            belongsToId: req.user.id,
        }
    })

    const deleteBoard = await prisma.board.delete({
        where: {
            id: board.id, 
        }
    })

    res.json({message:`The ${deleteBoard.name} board was deleted from the database.`})
}