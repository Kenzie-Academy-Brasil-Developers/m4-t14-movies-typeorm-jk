import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iGetMoviesWithPages } from "../interfaces";
import { getAllMoviesSchema } from "../schemas/users.schemas";

const getAllMoviesService = async (perPage: any, page: any, sort? : any, order?: any ):Promise<iGetMoviesWithPages> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const take: number = Number(perPage) || 5;
    const skip: number = Number(page) || 1;

    const findMovies: Array<Movie>= await movieRepository.find({
        take,
        skip: take * (skip - 1),
        order: {
            name: 'ASC' || 'DESC'
        },
    });

    const movies = getAllMoviesSchema.parse(findMovies);

    const baseUrl: string = `http://localhost:3000/movies`;
    let prevPage: string | null = `${baseUrl}?page=${skip - 1}&perPage=${take}`
    let nextPage: string | null = `${baseUrl}?page=${skip + 1}&perPage=${take}`
    let count: number = await movieRepository.count()
    let data = movies

    const pages: iGetMoviesWithPages = {
        prevPage,
        nextPage,
        count,
        data: movies
    };

    return pages
};

export {
    getAllMoviesService
};
