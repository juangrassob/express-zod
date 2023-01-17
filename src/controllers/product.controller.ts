import { Request, Response } from 'express'
import {
  CreateProductDto,
  UpdateProductDto,
  UpdateProductParamsType,
} from '../schemas/product.schema'

export function createProduct(
  req: Request<unknown, unknown, CreateProductDto>,
  res: Response
) {
  res.send('Creating product')
}

export function updateProduct(
  req: Request<UpdateProductParamsType, unknown, UpdateProductDto>,
  res: Response
) {
  res.send('Updating product')
}
