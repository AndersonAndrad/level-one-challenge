import { Router } from 'express';

const route = new Router();

route.get('/', (request, response) => {
  return response.json({
    Api_version: 'V1',
    ServerStatus: 'is running...',
  });
});

export default route;
