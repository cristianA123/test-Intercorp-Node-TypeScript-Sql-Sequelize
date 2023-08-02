"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pago_1 = __importDefault(require("./Pago"));
const PagoDetalle = connection_1.default.define('PagoDetalle', {
    ID_Detalle_Pago: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ID_Pago: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    Monto_Pago_Detalle: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true
    },
    Metodo_Pago: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    Moneda: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    // sequelize: db,
    // tableName: 'Coberturas',
    timestamps: false // Agregar esta opción para evitar las marcas de tiempo automáticas
});
PagoDetalle.belongsTo(Pago_1.default, { foreignKey: 'ID_Pago' });
Pago_1.default.hasMany(PagoDetalle, { foreignKey: 'ID_Pago' });
exports.default = PagoDetalle;
//# sourceMappingURL=DetallePago.js.map