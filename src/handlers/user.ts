import prisma from "../db"
import { compareHashed, createJWT, hashedPassword } from "../modules/auth"

export const createUser = async (req, res, next) => {
    try{const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashedPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({token})}
    catch(err) {
        err.type = "input"
        next(err)
    }
}

export const signIn = async (req, res, next) => {
    try{const user = await prisma.user.findUnique({
        where: {
            username: req.body.username,
            
        }
    })

   const isValid = await compareHashed(req.body.password, user.password)

  if(!isValid) {
    res.status(401)
    res.json({message: 'Invalid username or password'})
    return
  }

  const token = createJWT(user)
  res.json({token})}
  catch(err) {
    err.type = 'input'
    next(err)
  }
}