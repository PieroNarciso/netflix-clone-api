import { Request, Response } from 'express';

import axios from '../plugins/axios';


export const getGenreMovieList = async (_req: Request, res: Response) => {
  /**
   * Fetch all genres in movies
   */
  try {
    const response = await axios.get('/genre/movie/list');
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getGenreTVList = async (_req: Request, res: Response) => {
  /**
   * Fetch all genres in TV Shows
   */
  try {
    const response = await axios.get('/genre/tv/list');
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};
