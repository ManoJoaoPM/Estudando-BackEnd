import { Request, Response } from 'express'

import User from '../../models/User.js'

export const userIndex = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    return res.json({ users })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export const userCreate = async (req: Request, res: Response) => {
  const { name, email } = req.body

  try {
    const user = new User({ name, email })
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
