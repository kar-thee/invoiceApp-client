export const ADMIN = "admin";

export const MANAGER = "manager";

export const EMPLOYEE = "employee";

export const CUSTOMER = "customer";

export const roleArray = () => {
  const array = [];
  array.push(ADMIN);
  array.push(MANAGER);
  array.push(EMPLOYEE);
  array.push(CUSTOMER);

  return array;
};
