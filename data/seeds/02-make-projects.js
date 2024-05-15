
const projects = [
    {project_name:"my first project",project_description:'make more lakes',project_completed:false },
    {project_name:"my second project",project_description:'make it rain',project_completed:false },
    {project_name:"my third project",project_description:'plant threes',project_completed:false },
]
const resources = [
{resource_name:'water',resource_description:'water for plants' },
{resource_name:'three',resource_description:'three for clean air' },
]
const tasks = [
    {task_description:'decide name of lakes',task_notes:'notes for lakes',task_completed:false, project_id:1  },
    {task_description:'decide when to rain',task_notes:'notes for rain',task_completed:false, project_id:2  },
    {task_description:'dig holes for plants',task_notes:'notes for plants',task_completed:false, project_id:3  },
]
const project_resources = [
    {project_id:1,resource_id:1 },
    {project_id:2,resource_id:1 },
    {project_id:3,resource_id:2 },
]

exports.seed =async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
    }