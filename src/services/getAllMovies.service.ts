import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iGetAllMovies } from "../interfaces";
import { getAllMoviesSchema } from "../schemas/users.schemas";

const getAllMoviesService = async ():Promise<iGetAllMovies> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovies = await movieRepository.find();

    const movies = getAllMoviesSchema.parse(findMovies);

    return movies
};

export {
    getAllMoviesService
};
