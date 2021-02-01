import express, { Request, Response } from 'express';


const app = express();

// Middlewares
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Express API');
});


// Routes middlewares
import searchRoutes from './routes/search.routes';
import genreRoutes from './routes/genres.routes';
import movieRoutes from './routes/movies.routes';
import tvRoutes from './routes/tv.routes';
app.use('/api/v1/', searchRoutes);
app.use('api/v1/', genreRoutes);
app.use('/api/v1/', movieRoutes);
app.use('/api/v1/', tvRoutes);

app.listen(8080, () => {
  console.log('Server started in PORT 8080');
});
