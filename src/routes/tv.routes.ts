import { Router } from 'express';

import { 
  getTVShowByID,
  getPopulars } from '../controllers/tv.controller';


const router = Router();

router.get('/tv/:id', getTVShowByID);
router.post('/tv/popular', getPopulars);


export default router;
