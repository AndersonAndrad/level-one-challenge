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

  async delete(request, response) {
    const { id } = request.body;

    const projectIndex = projects.find((project) => project.id == id);

    if (projectIndex < 0) {
      return response.status(400).json({ Status: 'Project not found' });
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
  }
}

export default new RepositoriesController();
