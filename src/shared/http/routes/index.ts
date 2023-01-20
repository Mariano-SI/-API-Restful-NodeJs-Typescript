import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/rolesRoutes'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá, Devs!' })
})

routes.use('/roles', rolesRouter)

export { routes }
