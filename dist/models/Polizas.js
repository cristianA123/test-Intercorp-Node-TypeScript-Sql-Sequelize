"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Seguro_1 = __importDefault(require("./Seguro"));
const Cliente_1 = __importDefault(require("./Cliente"));
const Poliza = connection_1.default.define('Poliza', {
    ID_Poliza: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ID_Cliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    ID_Seguro: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    Fecha_Inicio: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    Fecha_Vencimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    Estado_Poliza: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'Polizas',
    modelName: 'Polizas',
    timestamps: false
});
// Relación entre Poliza y Cliente
Poliza.belongsTo(Cliente_1.default, { foreignKey: 'ID_Cliente' });
Cliente_1.default.hasMany(Poliza, { foreignKey: 'ID_Cliente' });
// Relación entre Poliza y Seguro
Poliza.belongsTo(Seguro_1.default, { foreignKey: 'ID_Seguro' });
Seguro_1.default.hasMany(Poliza, { foreignKey: 'ID_Seguro' });
exports.default = Poliza;
//# sourceMappingURL=Polizas.js.map