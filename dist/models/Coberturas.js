"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Cobertura = connection_1.default.define('Cobertura', {
    ID_Cobertura: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Nombre_Cobertura: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Coberturas',
    modelName: 'Coberturas',
    timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
});
exports.default = Cobertura;
//# sourceMappingURL=Coberturas.js.map