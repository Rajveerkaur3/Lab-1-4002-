import React, { useState } from "react";
import { organization } from "../data/organization";
import { roleDescriptions } from "../data/roleDescriptions";

const Organization: React.FC = () => {
  const [openRole, setOpenRole] = useState<string | null>(null);

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
      </section>
    </main>
  );
};

export default Organization;
