import type { RequestHandler } from 'express';

export const handleHandler: RequestHandler = async (req, res) => {

  return res.status(200).json({ message: 'Hello World' })
}