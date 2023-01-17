import { z, ZodObject } from 'zod'

export const createProductSchema = z.object({
  body: z
    .object({
      name: z.string().min(1),
      price: z.number().nonnegative(),
    })
    .strict(),
})

export const updateProductSchema = z.object({
  body: z
    .object({
      name: z.string().min(1),
      price: z.number().nonnegative(),
    })
    .strict(),
  params: z
    .object({
      id: z.string().min(1),
    })
    .strict(),
})

export type CreateProductDto = z.infer<typeof createProductSchema>['body']

export type UpdateProductDto = z.infer<typeof updateProductSchema>['body']
export type UpdateProductParamsType = z.infer<
  typeof updateProductSchema
>['params']
