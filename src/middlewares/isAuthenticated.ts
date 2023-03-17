import { NextFunction, Request, Response } from 'express'

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { valid } = req.body

  if (valid) {
    next()
  } else {
    res.status(401).json({ error: 'não autorizado' })
  }
}

export default isAuthenticated
