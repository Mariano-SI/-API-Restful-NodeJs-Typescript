import { RolesRepository } from '@roles/repositories/RolesRepository'
import { Role } from '@roles/entities/Role'

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll()
  }
}
