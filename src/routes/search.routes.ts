import { Router } from 'express';

import { 
  queryMovie,
  queryPeople,
  queryTVShows,
  queryMultiSearch } from '../controllers/search.controller';


const router = Router();

router.post('/search/movie', queryMovie);
router.post('/search/people', queryPeople);
router.post('/search/tv', queryTVShows);
router.post('/search/multi', queryMultiSearch);

export default router;
