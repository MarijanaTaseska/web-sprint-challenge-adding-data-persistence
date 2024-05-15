// build your `Task` model here
const db = require('../../data/dbConfig')
async function getAll(){
    const tasks = await db('tasks as t')
    .leftJoin('projects as p','p.project_id','t.project_id')
    .select(
    'project_name',
    'project_description',
    'task_notes',
    'task_description',
    'task_completed')

    return tasks
}

module.exports = {
    getAll
}