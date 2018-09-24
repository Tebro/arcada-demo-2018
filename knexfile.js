// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: process.env.DATABASE_URL || {
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

