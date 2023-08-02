"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seguroByID = exports.obtenerSeguros = void 0;
const Seguro_1 = __importDefault(require("../models/Seguro"));
const Polizas_1 = __importDefault(require("../models/Polizas"));
const Cliente_1 = __importDefault(require("../models/Cliente"));
const obtenerSeguros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seguros = yield Seguro_1.default.findAll({ include: 'Cobertura' });
        return res.status(200).json({ s: 'aaa', seguros });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener los seguros' });
    }
});
exports.obtenerSeguros = obtenerSeguros;
const seguroByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idSeguro = parseInt(req.params.id);
    try {
        const seguro = yield Seguro_1.default.findOne({
            where: { ID_Seguro: idSeguro },
            include: [{ model: Polizas_1.default, include: [Cliente_1.default] }]
        });
        if (!seguro) {
            return res.status(404).json({ error: 'Seguro no encontrado' });
        }
        res.json(seguro);
    }
    catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
});
exports.seguroByID = seguroByID;
//# sourceMappingURL=seguroController.js.map