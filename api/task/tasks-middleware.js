const Projects = require('../project/model')


function validateTask(req, res, next) {
  const { task_description, project_id } = req.body;
  if (!task_description) {
    return res.status(400).json({ message: 'Task description is required' });
  }
  if (!project_id) {
    return res.status(400).json({ message: 'Project ID is required' });
  }
  next();
}

function validateProjectId(req, res, next) {
  const { project_id } = req.body;
  Projects.getAll(project_id)
    .then(project => {
      if (!project) {
        return res.status(400).json({ message: 'Invalid project ID' });
      }
      next();
    })
    .catch(next);
}

module.exports = {
  validateTask,
  validateProjectId
}