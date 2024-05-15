/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id')
            tbl.string('project_name', 200).notNullable()
            tbl.text('project_description')
            tbl.boolean('project_completed').defaultTo(false)

        })
        .createTable('resources', tbl => {
            tbl.increments('resource_id')
            tbl.string('resource_name').notNullable().unique()
            tbl.text('resource_description')
        })
        .createTable('tasks', tbl => {
            tbl.increments('task_id')
            tbl.text('task_description').notNullable()
            tbl.text('task_notes')
            tbl.boolean('task_completed').defaultTo(false)
            tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
