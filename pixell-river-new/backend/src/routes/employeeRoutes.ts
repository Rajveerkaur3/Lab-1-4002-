import { Router } from "express";
import { employeeController } from "../controllers/employeeController";
import { requireAuth } from "../middleware/clerkmiddleware";

const router = Router();

// Protect all employee routes
router.get("/", requireAuth, employeeController.getAll);
router.get("/:department", requireAuth, employeeController.getByDepartment);
router.post("/", requireAuth, employeeController.add);
router.delete("/", requireAuth, employeeController.remove);

export default router;
