// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getAll() {
    return db('resources')
}

function add(resource) {
    return db('resources')
        .where({ resource_name: resource.resource_name }) // Check if a resource with the same name exists
        .first()
        .then(existingResource => {
            if (existingResource) {
                throw new Error('Resource name must be unique')
            } else {
                return db('resources')
                    .insert(resource)
                    .then(([resource_id]) => {
                        return db('resources').where('resource_id', resource_id).first()
                    })
            }
        })

}
module.exports = {
    getAll,
    add
}