import { z } from 'zod'

const movieCreateSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(),
    duration: z.number().positive(),
    price: z.number().int()
});

const returnMovieSchema = movieCreateSchema.extend({
    id:z.number()
});

const returnMoviesWithPages = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: z.array(returnMovieSchema)
})

const movieUpdateSchema = movieCreateSchema.partial()

const getAllMoviesSchema = z.array(returnMovieSchema)

export { 
    movieCreateSchema,
    returnMovieSchema,
    getAllMoviesSchema,
    movieUpdateSchema,
    returnMoviesWithPages
}