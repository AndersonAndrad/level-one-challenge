import { Router } from 'express';

const route = new Router();

// controllers
import Repositories from './app/controller/repositories.controller';

// middlewares
// all middlewares here

route.get('/', (request, response) => {
  return response.json({
    Api_version: 'V1',
    ServerStatus: 'is running...',
  });
});

route.post('/repositories', Repositories.store);
route.get('/repositories', Repositories.index);

export default route;
