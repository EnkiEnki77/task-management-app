import prisma from "../db"


export const createBoard = async (req, res, next) => {
    try{  
        const {name, ...column} = req.body
        const columnArray = []

        for (const [key, value] of Object.entries(column)) {
            columnArray.push({name: value});
          }
        
        const board = await prisma.board.create({
            data: {
                name: req.body.name,
                belongsToId: req.user.id,
                columns: {
                    create: columnArray
                }
                
            },
            include: {
                columns: true
            }
        })

       console.log(columnArray)

    res.json({message: `Created ${board.name} board`, board})}
    catch(err){
        console.error(err)
        next(err)
    }
}

export const getBoard = async (req, res, next) => {
    try{const board = await prisma.board.findUnique({
        where: {
            id: req.params.id  
        },
        include: {
            columns: {
                include: {
                    tasks: {
                        include: {
                            subtasks: true
                        } 
                    }
                }
            }
        }
    })

    res.json({data: board})}
    catch(err){next(err)}
}

export const getBoards = async (req, res, next) => {
   try{ const board = await prisma.board.findMany({
        where: {
            belongsToId: req.user.id
        },
        include: {
            columns: true
        }
    })

    res.json({data: board})}
    catch(err){next(err)}
}

export const deleteBoard = async (req, res, next) => {
    try{const board = await prisma.board.findFirst({
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

    res.json({message:`The ${deleteBoard.name} board was deleted from the database.`})}
    catch(err){
        next(err)
    }
}

export const editBoard = async (req, res, next) => {
    try{
        const {name, ...column} = req.body
        const columnArray = []

        for (const [key, value] of Object.entries(column)) {
            columnArray.push({name: value});
          }

        const board = await prisma.board.findFirst({
        where: {
            belongsToId: req.user.id,
            id: req.params.id,
        },
        include: {
            columns: true
        }
    })

    const updatedBoard = await prisma.board.update({
        where: {
            id: board.id,
        },
        data: {
            name: req.body.name,
           
        },
        
        include: {
            columns:true
        }
    })

    res.json({message: `Changes were made to ${board.name}`, original: board, updates: updatedBoard })}
    catch(err){
        next(err)
    }
}