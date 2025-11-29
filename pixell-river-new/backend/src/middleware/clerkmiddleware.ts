import { clerkClient } from "@clerk/clerk-sdk-node";
import { Request, Response, NextFunction } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No session token provided" });
    }

    const token = authHeader.replace("Bearer ", "");

    // Pass token and secret key as string
    const session = await clerkClient.sessions.verifySession(
      token,
      process.env.CLERK_SECRET_KEY!
    );

    // Attach user info to request
    (req as any).userId = session.userId;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};
