import { employees } from "../data/employees";

export const employeeRepository = {
 
  getAll() {
    return employees;
  },

  
  getByDepartment(department: string) {
    return employees[department] || [];
  },

 
  addEmployee(department: string, name: string) {
    if (!employees[department]) {
      employees[department] = [];
    }
    employees[department].push(name);
  },

   
  removeEmployee(department: string, name: string) {
    if (employees[department]) {
      employees[department] = employees[department].filter(emp => emp !== name);
    }
  },
};
