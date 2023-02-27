import { Like, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iGetMoviesWithPages } from "../interfaces";
import { getAllMoviesSchema } from "../schemas/users.schemas";

const getAllMoviesService = async (perPage: any, page: any, sortMovie?:any, orderMovie?: any):Promise<iGetMoviesWithPages> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const take: number = Number(perPage) || 5;
    const skip: number = Number(page) || 1;
    let order: any = {id: orderMovie}

    if(sortMovie)
        if(sortMovie==='price'){
            order = {price: orderMovie}
        }else if(sortMovie==='duration'){
            order = {duration: orderMovie}
    }

    const findMovies: Array<Movie>= await movieRepository.find({
        take,
        skip: take * (skip - 1),
        order
    });

    const movies = getAllMoviesSchema.parse(findMovies);

    const baseUrl: string = `http://localhost:3000/movies`;
    let prevPage: string | null = `${baseUrl}?page=${skip - 1}&perPage=${take}`
    let nextPage: string | null = `${baseUrl}?page=${skip + 1}&perPage=${take}`
    let count: number = await movieRepository.count()
    let data = movies

    if(skip <= 1){
        prevPage = null
    };

    if(findMovies.length <= 5 && prevPage != null){
        nextPage = null
    };

    const pages: iGetMoviesWithPages = {
        prevPage,
        nextPage,
        count,
        data
    };

    return pages
};

export {
    getAllMoviesService
};
