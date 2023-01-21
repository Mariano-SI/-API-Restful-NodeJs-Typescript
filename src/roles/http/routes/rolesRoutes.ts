import { Router } from 'express'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { createRolesController } from '@roles/useCases/createRole'

const rolesRouter = Router()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()
  return res.json(roles)
})

export { rolesRouter }
