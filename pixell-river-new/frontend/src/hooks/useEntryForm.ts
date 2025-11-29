import { useState } from "react";
import { validStaffService } from "../services/validStaffService";
import { employeeRepository } from "../repositories/employeeRepository";
import { roleRepository } from "../repositories/roleRepository";

type FormType = "employee" | "role";

export function useEntryForm(type: FormType) {
  const [values, setValues] = useState({ name: "", department: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameValidation = validStaffService.validateName(values.name);
    if (!nameValidation.valid) {
      setError(nameValidation.message);
      return;
    }

    if (type === "employee") {
      const deptValidation = validStaffService.validateDepartment(values.department);
      if (!deptValidation.valid) {
        setError(deptValidation.message);
        return;
      }
      employeeRepository.addEmployee(values.department, values.name.trim());
    } else if (type === "role") {
      const roleValidation = validStaffService.validateRole(values.name);
      if (!roleValidation.valid) {
        setError(roleValidation.message);
        return;
      }
      roleRepository.addRole(values.name.trim());
    }

    setValues({ name: "", department: "" });
    setError("");
  };

  return { values, error, handleChange, handleSubmit };
}
