import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Poliza from './Polizas'

const Pago = db.define('Pago', {
  ID_Pago: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_Poliza: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Fecha_Pago: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Total_Pago: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Pagos',
  modelName: 'Pagos',
  timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
})

Pago.belongsTo(Poliza, { foreignKey: 'ID_Poliza' })
Poliza.hasMany(Pago, { foreignKey: 'ID_Poliza' })

export default Pago
