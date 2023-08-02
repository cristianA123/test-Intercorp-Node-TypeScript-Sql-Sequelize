"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Coberturas_1 = __importDefault(require("./Coberturas"));
// import Poliza from './Polizas'
const Seguro = connection_1.default.define('Seguro', {
    ID_Seguro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ID_Cobertura: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    Nombre_Seguro: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Precio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Moneda: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Duracion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Seguros',
    modelName: 'Seguros',
    timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
});
Seguro.belongsTo(Coberturas_1.default, { foreignKey: 'ID_Cobertura' });
Coberturas_1.default.hasMany(Seguro, { foreignKey: 'ID_Cobertura' });
// Seguro.hasMany(Poliza, { foreignKey: 'ID_Seguro' })
exports.default = Seguro;
//# sourceMappingURL=Seguro.js.map