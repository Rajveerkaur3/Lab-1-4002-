import { Router } from "express";
import { roleController } from "../controllers/organizationController";

const router = Router();

router.get("/", roleController.getAll);
router.get("/:role", roleController.getRole);
router.post("/", roleController.add);
router.delete("/", roleController.remove);

export default router;
