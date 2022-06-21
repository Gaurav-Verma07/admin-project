export const pieDataDesignation = (data, designation) => {
  const postData = data?.map((data) => data.designation);
  const filteredPost = designation.map((data) => {
    let newData = 0;
    newData = postData?.filter((el) => el === data).length;

    return {
      name: data,
      value: newData,
    };
  });
  return filteredPost;
};
const salaryFilter = [0, 100000, 200000, 300000, 400000, 500000, 800000];
let prevData = 0;
let netData = 0;
export const pieDataSalary = (data) => {
  const salaryData = data?.map((data) => data.salary);
  const filteredPost = salaryFilter.map((data) => {
    let newData = 0;
    newData = salaryData?.filter((el) => el <= data).length;
    netData = newData - prevData;
    prevData = newData;
    return {
      name: data,
      Salary: netData,
    };
  });
  return filteredPost;
};

let year = [2016, 2017, 2018, 2018, 2019, 2020, 2021, 2022];

export const pieDataJoiningYear = (data) => {
  const joiningData = data?.map((data) => +data.joinData.substr(data.joinData.length - 4));
  const filteredData = year.map((year) => {
    let newData = joiningData?.filter((el) => el === year).length;
    return {
      name: year,
      'Joining Year': newData,
    };
  });
  return filteredData;
};
