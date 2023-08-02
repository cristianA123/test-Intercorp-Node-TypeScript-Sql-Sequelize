import { Request, Response } from 'express'
import Seguro from '../models/Seguro'
import Poliza from '../models/Polizas'
import Cliente from '../models/Cliente'

export const obtenerSeguros = async (req: Request, res: Response) => {
  try {
    const seguros = await Seguro.findAll({ include: 'Cobertura' })
    return res.status(200).json({ s: 'aaa', seguros })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Error al obtener los seguros' })
  }
}

export const seguroByID = async (req: Request, res: Response) => {
  const idSeguro = parseInt(req.params.id)

  try {
    const seguro = await Seguro.findOne({
      where: { ID_Seguro: idSeguro },
      include: [{ model: Poliza, include: [Cliente] }]
    })

    if (!seguro) {
      return res.status(404).json({ error: 'Seguro no encontrado' })
    }

    res.json(seguro)
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' })
  }
}
