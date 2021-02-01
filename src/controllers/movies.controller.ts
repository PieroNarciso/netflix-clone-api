import { Request, Response } from 'express';

import axios from '../plugins/axios';


export const getMovieByID = async (req: Request, res: Response) => {
  /**
   * Get Movie Detail By ID
   */
  try {
    if (req.params.id) {
      const response = await axios.get(`/movie/${req.params.id}`);
      return res.status(200).send(response.data);
    }
    return res.status(400).send('ID is invalid, must be number');
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getPopulars = async (req: Request, res: Response) => {
  /**
   * Get Most Populars Movies
   *
   * @param {Request} - Request body { `page`: number (default=1) }
   * @return Array of popular Movies
   */
  try {
    const response = await axios.get('/movie/popular', {
      params: {
        page: req.body.page
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};
