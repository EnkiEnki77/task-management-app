import prisma from "../db"


export const createTask = async (req, res, next) => {
    try{

    const column = await prisma.column.findFirst({
        where:{
            boardId: req.params.boardId,
            name: req.body.status
        }
    })

    const task = await prisma.task.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            columnId: column.id
        }
    })

    res.json({message: task})}
    catch(err){
       
        next(err)
    }
}

export const getTask = async (req, res, next) => {
    try{
    
    const column = await prisma.column.findFirst({
         where: {
            id: req.params.columnId,
            boardId: req.params.boardId
         },
         include: {
            tasks: true
         }
     })

     const task = await prisma.task.findFirst({
        where: {
           id: req.params.taskId,
           columnId: column.id
        }
    })
 
     res.json({data: task})}
     catch(err){next(err)}
 }

 export const getTasks = async (req, res, next) => {
    try{
    
    const column = await prisma.column.findMany({
         where: {
            boardId: req.params.boardId
         }
     })
 
     res.json({data: column})}
     catch(err){next(err)}
 }

 export const deleteTask = async (req, res, next) => {
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

export const editTask = async (req, res, next) => {
    try{
    
    const column = await prisma.column.findMany({
         where: {
            boardId: req.params.boardId
         }
     })
 
     res.json({data: column})}
     catch(err){next(err)}
 }