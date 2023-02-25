import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const dataValidationMiddleware = (schema:ZodTypeAny) => (req: Request, resp: Response, next: NextFunction) =>{

    const validData = schema.parse(req.body);

    req.body = validData

    return next()
};

export default dataValidationMiddleware;
