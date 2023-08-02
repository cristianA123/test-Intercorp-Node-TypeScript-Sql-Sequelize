"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seguroController_1 = require("../controllers/seguroController");
const router = (0, express_1.Router)();
router.get('/', seguroController_1.obtenerSeguros);
router.get('/:id', seguroController_1.seguroByID);
exports.default = router;
//# sourceMappingURL=seguros.js.map