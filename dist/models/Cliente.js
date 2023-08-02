"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cliente = connection_1.default.define('Cliente', {
    ID_Cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Nombre_Cliente: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Correo_Electronico: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Numero_Telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Fecha_Nacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    Sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Clientes',
    modelName: 'Clientes',
    timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
});
// Cliente.hasMany(Poliza, { foreignKey: 'ID_Cliente' })
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map