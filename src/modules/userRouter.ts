import { Router } from 'express'

import { userIndex } from './userController.js'

export const userRouter = Router()

userRouter.get('/', userIndex)
