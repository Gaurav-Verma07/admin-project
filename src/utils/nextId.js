export const nextID = (empData) => {
  const lastEmployee = empData[empData.length - 1];
  const newEmpID = parseInt(lastEmployee.empCode.substring(4))+1;
  return `APT-${newEmpID}`;
};
