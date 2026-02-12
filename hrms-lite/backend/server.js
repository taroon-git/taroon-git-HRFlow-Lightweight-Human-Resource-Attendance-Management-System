const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// ✅ Correct CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://hrms-lite-gamma-three.vercel.app"
    ],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "HRMS API Running" });
});

/*
=============================
   EMPLOYEE ROUTES
=============================
*/

app.post("/api/employees", async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = await prisma.employee.create({
      data: {
        employeeId,
        fullName,
        email,
        department,
      },
    });

    res.status(201).json(newEmployee);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Employee ID or Email already exists" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/employees", async (req, res) => {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/api/employees/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await prisma.employee.delete({
      where: { id },
    });

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Employee not found" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
