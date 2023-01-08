import prisma from "../db"
import { createJWT, hashedPassword } from "../modules/auth"

export const createUser = async (req, res, next) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashedPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json(token)
}