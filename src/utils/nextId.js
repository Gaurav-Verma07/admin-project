export const nextID = (empData) => {
  const lastEmployee = empData[empData.length - 1];
  const newEmpID = parseInt(lastEmployee.empCode.substring(4)) + 1;
  return `APT-${newEmpID}`;
};

export const getDate = (date) => {
  const extractDate = date.split('-');
  extractDate.reverse();
  return extractDate.join('-');
};
