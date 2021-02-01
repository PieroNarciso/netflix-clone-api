import { Router } from 'express';

import {
  getGenreMovieList,
  getGenreTVList } from '../controllers/genres.controller';


const router = Router();

router.get('/genre/movie', getGenreMovieList);
router.get('/genre/tv', getGenreTVList);


export default router;
