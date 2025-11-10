import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";
import { validStaffService } from "../services/validStaffService";

export const employeeController = {
  getAll(req: Request, res: Response) {
    res.json(employeeService.getAllEmployees());
  },

  getByDepartment(req: Request, res: Response) {
    const { department } = req.params;
    res.json(employeeService.getEmployeesByDepartment(department));
  },

  add(req: Request, res: Response) {
    const { department, name } = req.body;

    const nameCheck = validStaffService.validateName(name);
    if (!nameCheck.valid) {
      return res.status(400).json({ message: nameCheck.message });
    }

    const deptCheck = validStaffService.validateDepartment(department);
    if (!deptCheck.valid) {
      return res.status(400).json({ message: deptCheck.message });
    }

    employeeService.addEmployee(department, name);
    res.status(201).json({ message: "Employee added" });
  },

  remove(req: Request, res: Response) {
    const { department, name } = req.body;
    employeeService.removeEmployee(department, name);
    res.json({ message: "Employee removed" });
  }
};
