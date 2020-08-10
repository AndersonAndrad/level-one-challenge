// dependencies
import Express from 'express';

// routes
import Routes from './router';

class App {
  constructor() {
    this.server = Express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(Express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
