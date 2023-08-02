import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Seguro from './Seguro'
import Cliente from './Cliente'

const Poliza = db.define('Poliza', {
  ID_Poliza: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ID_Cliente: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ID_Seguro: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Fecha_Inicio: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Fecha_Vencimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Estado_Poliza: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Polizas',
  modelName: 'Polizas',
  timestamps: false
})

// Relación entre Poliza y Cliente
Poliza.belongsTo(Cliente, { foreignKey: 'ID_Cliente' })
Cliente.hasMany(Poliza, { foreignKey: 'ID_Cliente' })

// Relación entre Poliza y Seguro
Poliza.belongsTo(Seguro, { foreignKey: 'ID_Seguro' })
Seguro.hasMany(Poliza, { foreignKey: 'ID_Seguro' })

export default Poliza
