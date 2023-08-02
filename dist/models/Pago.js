"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Polizas_1 = __importDefault(require("./Polizas"));
const Pago = connection_1.default.define('Pago', {
    ID_Pago: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ID_Poliza: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    Fecha_Pago: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    Total_Pago: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true
    },
    Moneda: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Pagos',
    modelName: 'Pagos',
    timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
});
Pago.belongsTo(Polizas_1.default, { foreignKey: 'ID_Poliza' });
Polizas_1.default.hasMany(Pago, { foreignKey: 'ID_Poliza' });
exports.default = Pago;
//# sourceMappingURL=Pago.js.map