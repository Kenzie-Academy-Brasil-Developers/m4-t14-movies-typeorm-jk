import { Request, Response } from "express";
import { iMovieCreate } from "../interfaces";
import createMovieService from "../services/createMovie.service";
import deleteMovieService from "../services/deleteMovie.service";
import { getAllMoviesService } from "../services/getAllMovies.service";
import updateMovieService from "../services/updateMovie.service";

const createMovieController = async (req: Request, resp: Response): Promise<Response> =>{

    const movieData: iMovieCreate = req.body

    const newMovie = await createMovieService(movieData)

    return resp.status(201).json(newMovie);
};

const getAllMoviesController = async (req: Request, resp: Response): Promise<Response> =>{

    const movies = await getAllMoviesService();

    return resp.json(movies)
};

const deleteMovieController = async (req: Request, resp: Response): Promise<Response> =>{
    
    await deleteMovieService(parseInt(req.params.id));

    return resp.status(204).send();
};

const updateMovieController = async (req:Request, resp: Response): Promise<Response> => {
    const movieData = req.body;
    const movieId = parseInt(req.params.id);

    const updateMovie = await updateMovieService(movieData, movieId);

    return resp.json(updateMovie);
};

export {
    createMovieController,
    getAllMoviesController,
    deleteMovieController,
    updateMovieController
};
