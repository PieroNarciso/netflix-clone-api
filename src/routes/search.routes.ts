import { Router } from 'express';

import { 
  queryMovie,
  queryPeople,
  queryTVShows } from '../controllers/search.controller';


const router = Router();

router.post('/search/movie', queryMovie);
router.post('/search/people', queryPeople);
router.post('/search/tv', queryTVShows);

export default router;
