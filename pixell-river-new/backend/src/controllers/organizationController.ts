import { Request, Response } from "express";
import { roleService } from "../services/organizationService";
import { validStaffService } from "../services/validStaffService";

export const roleController = {
  getAll(req: Request, res: Response) {
    res.json(roleService.getAllRoles());
  },

  getRole(req: Request, res: Response) {
    const { role } = req.params;
    res.json(roleService.getRole(role));
  },

  add(req: Request, res: Response) {
    const { role } = req.body;

    const roleCheck = validStaffService.validateRole(role);
    if (!roleCheck.valid) {
      return res.status(400).json({ message: roleCheck.message });
    }

    roleService.addRole(role);
    res.status(201).json({ message: "Role added" });
  },

  remove(req: Request, res: Response) {
    const { role } = req.body;
    roleService.removeRole(role);
    res.json({ message: "Role removed" });
  }
};
