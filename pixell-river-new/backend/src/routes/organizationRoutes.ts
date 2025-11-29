import { Router } from "express";
import { roleController } from "../controllers/organizationController";
import { requireAuth } from "../middleware/clerkmiddleware"; 

const router = Router();

// Protect all organization routes
router.get("/", requireAuth, roleController.getAll);
router.get("/:role", requireAuth, roleController.getRole);
router.post("/", requireAuth, roleController.add);
router.delete("/", requireAuth, roleController.remove);

export default router;
