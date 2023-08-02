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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const seguros_1 = __importDefault(require("../routes/seguros"));
const connection_1 = __importDefault(require("./../db/connection"));
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/api/usuarios',
            seguros: '/api/seguros'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.middlewares();
        // Definir la rutas
        this.routes();
        this.dbCOnnection();
    }
    dbCOnnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log(' database conectado online----');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        // Configirar el cors
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuario_1.default);
        this.app.use(this.apiPath.seguros, seguros_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('sERVIDOR CORRIENDO EN EL PUERTO', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map