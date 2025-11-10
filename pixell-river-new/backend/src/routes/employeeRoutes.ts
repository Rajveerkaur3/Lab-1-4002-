import { Router } from "express";
import { employeeController } from "../controllers/employeeController";

const router = Router();

router.get("/", employeeController.getAll);
router.get("/:department", employeeController.getByDepartment);
router.post("/", employeeController.add);
router.delete("/", employeeController.remove);

export default router;
