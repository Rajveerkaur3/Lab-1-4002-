import { roleRepository } from "../repositories/roleRepository";

export const validStaffService = {
  validateName(name: string) {
    if (!name.trim() || name.trim().length < 3) {
      return { valid: false, message: "Name must be at least 3 characters" };
    }
    return { valid: true, message: "" };
  },

  validateDepartment(department: string) {
    if (!department) {
      return { valid: false, message: "Please select a department" };
    }
    return { valid: true, message: "" };
  },

  validateRole(role: string) {
    if (!role.trim() || role.trim().length < 3) {
      return { valid: false, message: "Role must be at least 3 characters" };
    }
    if (roleRepository.isRoleFilled(role)) {
      return { valid: false, message: "Role is already filled" };
    }
    return { valid: true, message: "" };
  }
};
