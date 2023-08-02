import { Sequelize } from 'sequelize'

const db = new Sequelize('node', 'root', '', {
  host: 'localhost',
  dialect: 'oracle'
})

export default db
