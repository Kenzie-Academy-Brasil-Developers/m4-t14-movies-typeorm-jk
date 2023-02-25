import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import { Movie } from '../entities/user.entity';
import { getAllMoviesSchema, movieCreateSchema, returnMovieSchema } from '../schemas/users.schemas';

type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;
type iMovieReturn = z.infer<typeof returnMovieSchema>;
type iGetAllMovies = z.infer<typeof getAllMoviesSchema>

export { 
    iMovieCreate, 
    iMovieUpdate, 
    iMovieRepo, 
    iMovieReturn,
    iGetAllMovies };