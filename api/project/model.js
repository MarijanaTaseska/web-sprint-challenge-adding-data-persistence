// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll(){
    return db('projects')
}

module.exports = {
    getAll
}