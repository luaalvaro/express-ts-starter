import type { RequestHandler } from 'express';

const useMiddleware: RequestHandler = async (req, res, next) => {
  console.log('--> Middleware [useMiddleware] acionado');


  next();
};

export default useMiddleware;