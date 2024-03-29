import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";

const movieNameValidateMiddleware = async(req: Request, resp: Response, next: NextFunction): Promise<Response|void> => {
    const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie)

    const findName = await userRepository.findOne({
        where:{
            name: req.body.name
        }
    });

    if(findName){
        let {name} = req.body
       
        if(findName.name === name){
            throw new AppError('Movie already exists.', 409)
        };
    }

    return next();
};

export default movieNameValidateMiddleware;;