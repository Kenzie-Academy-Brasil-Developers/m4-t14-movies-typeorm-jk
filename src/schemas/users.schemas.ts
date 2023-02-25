import { z } from 'zod'
import { hashSync } from 'bcryptjs'

const movieCreateSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(),
    duration: z.number(),
    price: z.number()
});

const returnMovieSchema = movieCreateSchema.extend({
    id:z.number()
});

const movieUpdateSchema = movieCreateSchema.partial()

const getAllMoviesSchema = returnMovieSchema.array()

export { 
    movieCreateSchema,
    returnMovieSchema,
    getAllMoviesSchema,
    movieUpdateSchema
}