import { Router } from 'express'
import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRolesController } from '@roles/useCases/showRole'
import { updateRolesController } from '@roles/useCases/updateRole'
import { deleteRolesController } from '@roles/useCases/deleteRole'

const rolesRouter = Router()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  const response = listRolesController.handle(req, res)
  return response
})

rolesRouter.get('/:id', (req, res) => {
  const response = showRolesController.handle(req, res)
  return response
})

rolesRouter.put('/:id', (req, res) => {
  const response = updateRolesController.handle(req, res)
  return response
})

rolesRouter.delete('/:id', (req, res) => {
  return deleteRolesController.handle(req, res)
})
export { rolesRouter }
