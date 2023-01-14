import prisma from "../db"


export const createSubtask = async (req, res, next) => {
    try{
        const column = await prisma.column.findFirst({
        where:{
            id: req.params.columnId,
            boardId: req.params.boardId
        }
    })

    const task = await prisma.task.findFirst({
        where:{
            id: req.params.taskId,
            columnId: column.id,
        }
    })

    const subTask = await prisma.subtask.create({
        data: {
            title: req.body.title,
            isCompleted: false,
            taskId: task.id
        }
    })

    res.json({message: `${subTask.title} has been created`})}
    catch(err){
       
        next(err)
    }
}

export const getSubtasks = async (req, res, next) => {
    try{
    
        const column = await prisma.column.findFirst({
            where:{
                id: req.params.columnId,
                boardId: req.params.boardId
            }
        })
    
        const task = await prisma.task.findFirst({
            where:{
                id: req.params.taskId,
                columnId: column.id,
            }
        })
    
        const subTask = await prisma.subtask.findMany({
            where: {
                taskId: task.id
            }
        })
 
     res.json({data: subTask})}
     catch(err){next(err)}
 }

 export const deleteSubtask = async (req, res, next) => {
    try{  const column = await prisma.column.findFirst({
        where:{
            id: req.params.columnId,
            boardId: req.params.boardId
        }
    })

    const task = await prisma.task.findFirst({
        where:{
            id: req.params.taskId,
            columnId: column.id,
        }
    })

    const subTask = await prisma.subtask.findFirst({
        where: {
            id: req.params.subtaskId,
            taskId: task.id
        }
    })

    const deleteSubTask = await prisma.subtask.delete({
        where: {
            id: subTask.id
        }
    })

    res.json({message:`The ${deleteSubTask.title} subtask was deleted from the database.`})}
    catch(err){
        next(err)
    }
}