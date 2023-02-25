import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { iMovieReturn, iMovieUpdate } from "../interfaces"
import { returnMovieSchema } from "../schemas/users.schemas"

const updateMovieService = async (movieData: iMovieUpdate, movieId: number): Promise<iMovieReturn> => {
    const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

    const oldMovieData = await userRepository.findOneBy({
        id: movieId
    });

    const movie = userRepository.create({
        ...oldMovieData,
        ...movieData
    });

    await userRepository.save(movie)

    const updateMovie = returnMovieSchema.parse(movie)

    return updateMovie
};

export default updateMovieService;
