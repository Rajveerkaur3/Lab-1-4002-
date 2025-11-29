import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes";
import organizationRoutes from "./routes/organizationRoutes";

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173", "http://localhost:5174"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json());
app.use("/employees", employeeRoutes);
app.use("/organization", organizationRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use((err: any, req: any, res: any, next: any) => {
  res.status(500).json({ message: err.message || "Internal Server Error" });
});

app.listen(4000, () => {
  console.log("Backend running at http://localhost:4000");
});
