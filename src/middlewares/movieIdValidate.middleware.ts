import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const movieIdValidateMiddleware = async(req: Request, resp: Response, next: NextFunction): Promise<Response|void> => {
    const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findMovie = await userRepository.findOne({
        where:{
            id: parseInt(req.params.id)
        }
    })

    if(!findMovie){
        throw new AppError('Movie not found!', 404)
    };

    return next();
};

export default movieIdValidateMiddleware;
