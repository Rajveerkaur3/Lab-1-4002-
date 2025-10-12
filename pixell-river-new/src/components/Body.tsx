import React, { useState } from "react";
import { employees } from "../data/employees";
import { useEntryForm } from "../hooks/useEntryForm";

const Body: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { values, error, handleChange, handleSubmit } = useEntryForm("employee");

  const filteredEmployees = Object.entries(employees).reduce(
    (acc, [department, staff]) => {
      const filteredStaff = staff.filter(
        (employee) =>
          employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
          department.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredStaff.length > 0) {
        acc[department] = filteredStaff;
      }
      return acc;
    },
    {} as { [department: string]: string[] }
  );

  return (
    <main>
      <section className="container employee-directory">
        <h2>Employee Directory</h2>

        
        <input
          type="text"
          placeholder="Search by name or department"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        <div id="employee-directory">
          {Object.entries(filteredEmployees).map(([department, staff]) => (
            <div key={department} className="department">
              <h3>{department}</h3>
              <ul className="employee-list">
                {staff.map((employee) => (
                  <li key={employee}>{employee}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="New Employee Name"
            value={values.name}
            onChange={handleChange}
          />
          <select
            name="department"
            value={values.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            {Object.keys(employees).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <button type="submit">Add Employee</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Body;
