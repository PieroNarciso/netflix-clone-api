import express, { Request, Response } from 'express';
import cors from 'cors';
import redis from 'redis';
import session from 'express-session';
import connectRedis from 'connect-redis';

import config from './config';
import db from './db';


const app = express();

app.use(cors({
  origin: config.CORS_ORIGIN_WHITELIST,
  credentials: true,
  exposedHeaders: ['Set-Cookie']
}));

// Setup DataBase
db.authenticate()
  .then(() => console.log('DB Connected'))
  .catch(err => console.error(err, 'ERROR'));
// Sync Models
if (config.NODE_ENV == 'development') {
  db.sync();
}

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session config
const RedisStore = connectRedis(session);
const redisClient = redis.createClient(config.REDIS_URL);

app.use(session({
  name: config.SESSION_NAME,
  store: new RedisStore({ client: redisClient }),
  secret: config.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: true,
  }
}));

app.get('/', (_req: Request, res: Response) => {
  res.send('Express API');
});


// Routes middlewares
import searchRoutes from './routes/search.routes';
import genreRoutes from './routes/genres.routes';
import movieRoutes from './routes/movies.routes';
import tvRoutes from './routes/tv.routes';
import userRoutes from './routes/user.routes';
app.use('/api/v1', searchRoutes);
app.use('/api/v1', genreRoutes);
app.use('/api/v1', movieRoutes);
app.use('/api/v1', tvRoutes);
app.use('/api/v1/', userRoutes);

app.listen(8080, () => {
  console.log('Server started in PORT 8080');
});
