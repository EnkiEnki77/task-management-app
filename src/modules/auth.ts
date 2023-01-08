import jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

export const createJWT = (user) => {
    const token = jwt.sign({id: user.id, name: user.username}, process.env.JWT_SECRET);

    return token
}

export const hashedPassword = (password: string) => {
    //you should always add a salt to your hash, this makes it harder to guess. 
   return bcrypt.hash(password, 5)
 }