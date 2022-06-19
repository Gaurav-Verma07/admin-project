import { designation } from "../constants/designation";
  
  const randomDate = (start = new Date(2016, 0, 1), end = new Date()) => {
    const fullDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const date = fullDate.getDate();
    const month = fullDate.getMonth();
    const year = fullDate.getFullYear();
  
    return [date, month, year].join('-');
  };
  

  export const addData = async () => {
    const dummyData = await fetch('http://dummy.restapiexample.com/api/v1/employees');
    const responseData = await dummyData.json();
    console.log('data', responseData.data);
    let empCode = 100;
    responseData.data.map((employee) => {
      console.log('data sent of ', employee);
      fetch('https://admin-2da31-default-rtdb.firebaseio.com/dashboard.json', {
        method: 'POST',
        body: JSON.stringify({
          empCode: `APT-${empCode++}`,
          name: employee.employee_name,
          age: Math.floor(Math.random() * 20) + 20,
          designation: designation[Math.floor(Math.random() * 14)],
          joinData: randomDate(),
          salary: employee.employee_salary,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }).then((res) => {
        console.log(res);
      });
    });
  };