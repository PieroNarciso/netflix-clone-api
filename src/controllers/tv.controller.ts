import { Request, Response } from 'express';

import axios from '../plugins/axios';


export const getTVShowByID = async (req: Request, res: Response) => {
  /**
   * Get TV Show Detail By ID
   */
  try {
    if (req.params.id) {
      const response = await axios.get(`/tv/${req.params.id}`);
      return res.status(200).send(response.data);
    }
    return res.status(400).send('ID is invalid, must be number');
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getPopulars = async (req: Request, res: Response) => {
  /**
   * Get Populars TV Shows
   *
   * @param {Request} - Request Body { `page`: number (default=1) }
   * @return Array of TV Shows
   */
  try {
    const response = await axios.get('/tv/popular', {
      params: {
        page: req.body.page
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};
