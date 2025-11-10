import { roleRepository } from "../repositories/roleRepository";

export const roleService = {
  getAllRoles() {
    return roleRepository.getAll();
  },

  getRole(roleName: string) {
    return roleRepository.getRole(roleName);
  },

  addRole(roleName: string) {
    roleRepository.addRole(roleName);
  },

  isRoleFilled(roleName: string) {
    return roleRepository.isRoleFilled(roleName);
  },

  removeRole(roleName: string) {
    roleRepository.removeRole(roleName);
  }
};
