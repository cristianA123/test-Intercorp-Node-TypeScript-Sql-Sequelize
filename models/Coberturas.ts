import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Cobertura = db.define('Cobertura', {
  ID_Cobertura: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Nombre_Cobertura: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Coberturas',
  modelName: 'Coberturas',
  timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
})

export default Cobertura
