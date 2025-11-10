import { organization } from "../data/organization";

export const roleRepository = {
  
  getAll() {
    return organization;
  },

  
  getRole(roleName: string) {
    return organization[roleName];
  },

  
  addRole(roleName: string) {
    organization[roleName] = "";
  },

  
  isRoleFilled(roleName: string) {
    return Boolean(organization[roleName]);
  },

 
  removeRole(roleName: string) {
    delete organization[roleName];
  },
};
