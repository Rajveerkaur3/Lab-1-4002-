import React from "react";
import { employees } from "../data/employees";

const Body: React.FC = () => (
  <main>
    <section className="container employee-directory">
      <h2>Employee Directory</h2>
      <div id="employee-directory">
        {Object.entries(employees).map(([department, staff]) => (
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
    </section>
  </main>
);

export default Body;
