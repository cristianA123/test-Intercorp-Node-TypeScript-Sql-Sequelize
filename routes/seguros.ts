import { Router } from 'express'
import { obtenerSeguros, seguroByID } from '../controllers/seguroController'

const router = Router()

router.get('/', obtenerSeguros)
router.get('/:id', seguroByID)

export default router
