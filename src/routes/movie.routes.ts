import { Router } from "express";
import { createMovieController, deleteMovieController, getAllMoviesController, updateMovieController } from '../controllers/movie.controller'
import dataValidationMiddleware from "../middlewares/dataValidation.middleware";
import movieIdValidateMiddleware from "../middlewares/movieIdValidate.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/users.schemas";

const movieRoutes: Router = Router();

movieRoutes.post('', dataValidationMiddleware(movieCreateSchema), createMovieController);
movieRoutes.get('', getAllMoviesController);
movieRoutes.delete('/:id', movieIdValidateMiddleware, deleteMovieController)
movieRoutes.patch('/:id', dataValidationMiddleware(movieUpdateSchema), movieIdValidateMiddleware, updateMovieController)

export default movieRoutes;
