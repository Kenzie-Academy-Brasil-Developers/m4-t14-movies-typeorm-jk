import { z } from 'zod'

const movieCreateSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().optional().nullable(),
    duration: z.number(),
    price: z.number()
});

const returnMovieSchema = movieCreateSchema.extend({
    id:z.number()
});

const returnMoviesWithPages = z.object({
    prevPage: z.string(),
    nextPage: z.string(),
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