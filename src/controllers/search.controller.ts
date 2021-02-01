import { Request, Response } from 'express';
import axios from '../plugins/axios';


export const queryMovie = async (req: Request, res: Response) => {
  /**
   * Fetch movie by query in title
   *
   * @param {Request} req - A body object with attribute 
   *    { `query`: string, 
   *      `page?`: number (default=1),
   *      `year?`: number }
   * @param {Response} res
   * @returns {array} Movie Array
   */
  try {
    const response = await axios.get('/search/movie', {
      params: {
        query: req.body.query,
        page: req.body.query,
        year: req.body.year
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err); 
  }
};

export const queryPeople = async(req: Request, res: Response) => {
  /**
   * Fetch movies by query on people casting the movie
   * 
   * @param {Request} req - A body object with attribute 
   *    { `query`: string, `page?`: number (default=1) }
   * @param {Response} res
   * @returns {array} Movie Array
   */
  try {
    const response = await axios.get('/search/person', {
      params: {
        query: req.body.query,
        page: req.body.page
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const queryTVShows = async (req: Request, res: Response) => {
  /**
   * Fetch TV Shows by a query
   *
   * @param {Request} req - Request body with
   *    { `query`: string, `page?`: number (defult=1) }
   * @param {Response} res
   * @return Array of TV Shows
   */
  try {
    const response = await axios.get('/search/tv', {
      params: {
        query: req.body.query,
        page: req.body.page
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const queryMultiSearch = async (req: Request, res: Response) => {
  /**
   * Fetch in Movies and TV Shows by a query
   *
   * @param {Request} req - Request Body with
   *    { `query`: string, `page`: number (default=1)
   * @param {Response} res
   * @return Array of Movies and TV Shows Objects
   */
  try {
    const response = await axios.get('/search/multi', {
      params: {
        query: req.body.query,
        page: req.body.page
      }
    });
    return res.status(200).send(response.data);
  } catch (err) {
    return res.status(400).send(err);
  }
};
