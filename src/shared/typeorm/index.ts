import { DataSource } from 'typeorm'
import { CreateRolesTable1675079542236 } from './migrations/1675079542236-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1675079542236],
})
