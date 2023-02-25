import { iMovieCreate } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities/user.entity";
import { Repository } from "typeorm";
import { returnMovieSchema } from "../schemas/users.schemas";
import { iMovieReturn } from "../interfaces";

const createMovieService = async(movieData: iMovieCreate): Promise<iMovieReturn> =>{

    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const movie = movieRepository.create(movieData);

    await movieRepository.save(movie);

    const newMovie = returnMovieSchema.parse(movie);

    return newMovie;
};

export default createMovieService;


