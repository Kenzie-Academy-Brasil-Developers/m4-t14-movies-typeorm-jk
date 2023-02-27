import { Router } from "express";
import { createMovieController, deleteMovieController, getAllMoviesController, updateMovieController } from '../controllers/movie.controller'
import dataValidationMiddleware from "../middlewares/dataValidation.middleware";
import movieIdValidateMiddleware from "../middlewares/movieIdValidate.middleware";
import movieNameValidateMiddleware from "../middlewares/movieNameValidation.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/users.schemas";

const movieRoutes: Router = Router();

movieRoutes.post('', dataValidationMiddleware(movieCreateSchema), movieNameValidateMiddleware, createMovieController);
movieRoutes.get('', getAllMoviesController);
movieRoutes.delete('/:id', movieIdValidateMiddleware, deleteMovieController)
movieRoutes.patch('/:id', dataValidationMiddleware(movieUpdateSchema), movieIdValidateMiddleware, movieNameValidateMiddleware, updateMovieController)

export default movieRoutes;
