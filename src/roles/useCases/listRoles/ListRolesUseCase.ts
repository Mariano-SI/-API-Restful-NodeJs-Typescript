import { RolesPaginateProperties, RolesRepository } from '@roles/repositories/RolesRepository'
import { Role } from '@roles/entities/Role'

type ListRolesUseCaseParams = {
  page: number
  limit: number
}
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({
    limit,
    page,
  }: ListRolesUseCaseParams): Promise<RolesPaginateProperties> {
    const take = limit
    const skip = (Number(page) - 1) * take
    return this.rolesRepository.findAll({ page, skip, take })
  }
}
