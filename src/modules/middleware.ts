import { body, validationResult } from 'express-validator'

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400)
        res.json({ errors: errors.array() })
        return
    } else {
        next()
    }
}

export const handleRouteErrors = (error, req, res, next) => {
    if(error.type == 'auth'){
        res.status(401)
        .json({ message: 'unauthorized' })
    }else if(error.type == 'input'){
        res.status(400)
        .json({ message: 'Invalid input' })
    }else{
        res.status(500)
        .json({ message: 'server error' })
    }
}