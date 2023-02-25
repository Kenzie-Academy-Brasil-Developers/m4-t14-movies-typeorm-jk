import 'express-async-errors'
import express, { Application } from 'express'
import movieRoutes from './routes/movie.routes';
import { handleErrors } from './errors';

const app:Application = express();
app.use(express.json());

app.use('/movies', movieRoutes);

app.use(handleErrors);

export default app;
