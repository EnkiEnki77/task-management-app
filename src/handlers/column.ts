import prisma from "../db"


export const createColumn = async (req, res, next) => {
    try{
        const board = await prisma.board.findFirst({
        where:{
            id: req.params.boardId
        }
    })

    const column = await prisma.column.create({
        data: {
            name: req.body.name,
            boardId: board.id
        }
    })

    res.json({message: column})}
    catch(err){
       
        next(err)
    }
}

export const getColumns = async (req, res, next) => {
    try{
    
    const column = await prisma.column.findMany({
         where: {
            boardId: req.params.boardId
         }
     })
 
     res.json({data: column})}
     catch(err){next(err)}
 }

 export const deleteColumn = async (req, res, next) => {
    try{const column = await prisma.column.findFirst({
        where: {
            id:req.params.id,
            boardId: req.user.id,
        }
    })

    const deleteBoard = await prisma.column.delete({
        where: {
            id: column.id, 
        }
    })

    res.json({message:`The ${deleteBoard.name} board was deleted from the database.`})}
    catch(err){
        next(err)
    }
}