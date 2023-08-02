import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Cobertura from './Coberturas'
// import Poliza from './Polizas'

const Seguro = db.define('Seguro', {
  ID_Seguro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_Cobertura: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Nombre_Seguro: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Precio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Duracion: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Seguros',
  modelName: 'Seguros',
  timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
})

Seguro.belongsTo(Cobertura, { foreignKey: 'ID_Cobertura' })
Cobertura.hasMany(Seguro, { foreignKey: 'ID_Cobertura' })
// Seguro.hasMany(Poliza, { foreignKey: 'ID_Seguro' })
export default Seguro
