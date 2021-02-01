import { Router } from 'express';

import { 
  getMovieByID,
  getPopulars } from '../controllers/movies.controller';


const router = Router();

router.get('/movie/:id', getMovieByID);
router.post('/movie/popular', getPopulars);

export default router;
