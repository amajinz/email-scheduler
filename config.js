var { Client } = require('pg')

exports.database = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PWD,
  port: process.env.DATABASE_PORT,
})

