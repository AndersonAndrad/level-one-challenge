// dependencies
import { uuid } from 'uuidv4';

const projects = [];

class RepositoriesController {
  async store(request, response) {
    const { id, title, url, techs } = request.body;

    // const project = { id: uuid(), title, url, techs, likes: [] };
    const project = { id, title, url, techs, likes: [] };

    await projects.push(project);

    return response.json({
      project,
    });
  }

  async index(request, response) {
    return response.json(projects);
  }

  async update(request, response) {
    return response.json({ status: 'ok' });
  }
}

export default new RepositoriesController();
