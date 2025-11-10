import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  getAllEmployees() {
    return employeeRepository.getAll();
  },

  getEmployeesByDepartment(department: string) {
    return employeeRepository.getByDepartment(department);
  },

  addEmployee(department: string, name: string) {
    employeeRepository.addEmployee(department, name);
  },

  removeEmployee(department: string, name: string) {
    employeeRepository.removeEmployee(department, name);
  }
};
