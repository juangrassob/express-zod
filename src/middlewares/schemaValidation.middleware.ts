import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';

export function schemaValidation(schema: AnyZodObject) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log({ body: req.body, params: req.params, query: req.query });

      schema.parse({ body: req.body, params: req.params, query: req.query });
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json(error.issues.map((issue) => ({ message: issue })));
      }

      return res.status(500).json({ message: 'Internal server error' });
    }

    next();
  };
}
