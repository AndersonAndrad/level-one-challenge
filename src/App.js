// dependencies
import Express from 'express';
import cors from 'cors';

// routes
import Routes from './router';

class App {
  constructor() {
    this.server = Express();

    this.ativadeCors();
    this.middleware();
    this.routes();
  }

  ativadeCors() {
    this.server.use(cors());
  }

  middleware() {
    this.server.use(Express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
