import { DataTypes } from 'sequelize'
import db from '../db/connection'
import Poliza from './Polizas'

const Cliente = db.define('Cliente', {
  ID_Cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  Nombre_Cliente: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Correo_Electronico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Numero_Telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Fecha_Nacimiento: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Sexo: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Clientes',
  modelName: 'Clientes',
  timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
})

// Cliente.hasMany(Poliza, { foreignKey: 'ID_Cliente' })

export default Cliente
