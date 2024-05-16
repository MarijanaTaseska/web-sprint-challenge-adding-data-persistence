// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll(project_id) {
    if (project_id) {
        return db('projects')
            .where({ project_id: project_id })
            .first();
    } else {
        return db('projects');
    }
}

function add(project) {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects').where('project_id', project_id).first()
        })
}

module.exports = {
    getAll,
    add
}