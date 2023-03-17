import { Request, Response } from 'express'

export const userIndex = async (req: Request, res: Response) => {
  res.json({ teste: 'teste' })
}
