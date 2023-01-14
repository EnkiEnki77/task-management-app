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
         },
         include:{
            tasks:{
                include: {
                    subtasks: true
                }
            }
         }
     })
 
     res.json({data: column})}
     catch(err){next(err)}
 }

 export const deleteColumn = async (req, res, next) => {
    try{const column = await prisma.column.findFirst({
        where: {
            id:req.params.columnId,
            boardId: req.params.boardId,
        }
    })

    const deleteColumn = await prisma.column.delete({
        where: {
            id: column.id, 
        }
    })

    res.json({message:`The ${deleteColumn.name} column was deleted from the database.`})}
    catch(err){
        next(err)
    }
}