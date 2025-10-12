import React, { useState } from "react";
import { organization } from "../data/organization";
import { roleDescriptions } from "../data/roleDescriptions";
import { useEntryForm } from "../hooks/useEntryForm";

const Organization: React.FC = () => {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const { values, error, handleChange, handleSubmit } = useEntryForm("role");

  const toggleRole = (role: string) => {
    setOpenRole(openRole === role ? null : role);
  };

  return (
    <main>
      <section className="container organization-structure">
        <h2>Organization</h2>
        <div id="organization-directory">
          {Object.entries(organization).map(([role, person]) => (
            <div key={role} className="organization-item">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => toggleRole(role)}
              >
                <strong>{role}</strong>: {person || "Vacant"}
              </div>
              {openRole === role && roleDescriptions[role] && (
                <p className="role-description">{roleDescriptions[role]}</p>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="New Role Name"
            value={values.name}
            onChange={handleChange}
          />
          <button type="submit">Add Role</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Organization;
