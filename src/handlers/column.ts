import prisma from "../db"


export const createColumn = async (req, res, next) => {
    try{const column = await prisma.column.create({
        data: {
            name: req.body.name,
            boardId: req.user.id
        }
    })

    res.json({message: `Created ${column.name} board`})}
    catch(err){
        next(err)
    }
}

export const getColumns = async (req, res, next) => {
    try{ const column = await prisma.column.findMany({
         
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