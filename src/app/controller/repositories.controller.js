// dependencies
import { uuid } from 'uuidv4';

const projects = [];

class RepositoriesController {
  async store(request, response) {
    const { id, title, url, techs } = request.body;

    const project = { id: uuid(), title, url, techs, likes: 0 };

    await projects.push(project);

    return response.json({
      project,
    });
  }

  async index(request, response) {
    return response.json(projects);
  }

  async update(request, response) {
    const { id, title, url, techs, likes } = request.body;

    const projectIndex = projects.findIndex((project) => project.id == id);

    if (projectIndex < 0) {
      return response.status(400).json({ status: 'project not found' });
    }

    const project = {
      id,
      title,
      url,
      techs,
      likes,
    };

    projects[projectIndex] = project;

    return response.json(project);
  }

  async delete(request, response) {
    const { id } = request.body;

    const projectIndex = projects.find((project) => project.id == id);

    if (projectIndex < 0) {
      return response.status(400).json({ Status: 'Project not found' });
    }

    await projects.splice(projectIndex, 1);

    return response.status(204).send();
  }

  async like(request, response) {
    const { id, title, url, techs, likes } = request.body;

    const projectIndex = projects.findIndex((project) => project.id == id);

    if (projectIndex < 0) {
      return response.status(400).json({ status: 'project not found' });
    }

    const project = {
      id,
      title,
      url,
      techs,
      likes,
    };

    projects[projectIndex] = project;

    return response.json(project);
  }
}

export default new RepositoriesController();
