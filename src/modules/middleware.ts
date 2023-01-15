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
    if(error.status == 401){
        console.error(error.message)
        res.status(401)
        res.json({ message: 'unauthorized', error })
    }else if(error.status == 400){
        console.error(error.message)
        res.status(400)
        res.json({ message: 'Invalid input', error })
    }else if(error.status == 404){
        console.error(error.message)
        res.status(404)
        res.json({ message: 'Not found', error })
    }else{
        console.error(error)
        res.status(500)
        res.json({ message: 'server error', error: error })
    }
}

