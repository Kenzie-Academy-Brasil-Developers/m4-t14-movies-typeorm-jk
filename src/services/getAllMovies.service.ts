import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { iGetMoviesWithPages } from "../interfaces";
import { getAllMoviesSchema } from "../schemas/users.schemas";

const getAllMoviesService = async (perPage: any, page: any, sortMovie?:any, orderMovie?: any):Promise<iGetMoviesWithPages> => {
    const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    let take: number = Number(perPage) || 5;
    let skip: number = Number(page) || 1;
    let order: any = {id: orderMovie};

    if(sortMovie === undefined){
        order = {id: 'ASC'}
    };

    if(sortMovie==='price'){
        order = {price: orderMovie}
    }else if(sortMovie==='duration'){
        order = {duration: orderMovie}
    };
    
    if(orderMovie === undefined){
        if(sortMovie==='price'){
            order = {price: 'asc'}
        }
        else if(sortMovie==='duration'){
            order = {duration: 'asc'}
        }
    };

    if(take > 5 || take < 0){
        take = 5
    };

    if(skip < 0){
        skip = 1
    };

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

    if(findMovies.length <= 5 && prevPage != null && data[0] === undefined){
        nextPage = null
    }else if(findMovies.length <= 5 && prevPage != null && data.length < 5 && take === 5){
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
