import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Pago from './Pago'

const PagoDetalle = db.define('PagoDetalle', {
  ID_Detalle_Pago: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_Pago: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Monto_Pago_Detalle: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  Metodo_Pago: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Moneda: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  // sequelize: db,
  // tableName: 'Coberturas',
  timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
})

PagoDetalle.belongsTo(Pago, { foreignKey: 'ID_Pago' })
Pago.hasMany(PagoDetalle, { foreignKey: 'ID_Pago' })

export default PagoDetalle
