const mysql = require('mysql')

module.exports.connect = async (opts = {}) => {
  let db = mysql.createConnection({
    host: 'localhost',
    port: '3636',
    user: 'albert',
    password: 'camu',
    database: 'bookstore',
    charset: 'utf8mb4',
    multipleStatements: true,
    timezone: 'utc'
  })

  db.connect(err => {
    console.log(`Establishing connection to database...`)
    if (err) {
      console.error(
        `Unable to establish connection with the database: ${err.code}`
      )
    }

    console.log(`Connected to database with id: ${db.threadId}`)
  })

  return db
}
