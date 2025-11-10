import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { employees } from "../src/data/employees";
import { organization } from "../src/data/organization";
import { roleDescriptions } from "../src/data/roleDescriptions";

const prisma = new PrismaClient();

async function main() {
  // Seed departments and employees
  for (const [depName, empList] of Object.entries(employees)) {
    const dep = await prisma.department.create({ data: { name: depName } });

    for (const empName of empList) {
      await prisma.employee.create({
        data: {
          name: empName,
          departmentId: dep.id,
        },
      });
    }
  }

  // Seed organization roles
  for (const [role, empName] of Object.entries(organization)) {
    await prisma.organization.create({
      data: {
        role,
        employee: empName || "Vacant",
        description: roleDescriptions[role] || "",
      },
    });
  }

  console.log("Seeded all data successfully!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
