import { Router } from 'express'

import isAuthenticated from '../../middlewares/isAuthenticated.js'
import { userCreate, userIndex } from './userController.js'

export const userRouter = Router()

userRouter.use(isAuthenticated)
userRouter.get('/', userIndex)
userRouter.post('/create', userCreate)
