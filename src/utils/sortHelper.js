export const sortHelper= (sortBy, sortOrder, data)=>{
    let sortField;
    if (sortBy === 'Name') {
    sortField = data?.map((data) => data?.name);
    sortField.sort();
    if (sortOrder === false) {
      sortField.reverse();
    }
    const sortData = sortField.map((name) => {
      return data?.filter((data) => data?.name === name)[0];
    });
    return sortData;
  } else if (sortBy === 'Age') {
    sortField = data?.map((data) => data?.age);
    sortField.sort();
    if (sortOrder === false) {
      sortField.reverse();
    }
    const sortData = sortField.map((age) => {
      return data?.filter((data) => data?.age === age)[0];
    });
    return sortData;
  } else if (sortBy === 'Salary') {
    sortField = data?.map((data) => data?.salary);
    sortField.sort();
    if (sortOrder === false) {
      sortField.reverse();
    }
    const sortData = sortField.map((salary) => {
      return data?.filter((data) => data?.salary === salary)[0];
    });
    return sortData;
  } else if(sortBy==='Emp. Code') {
      sortField = data?.map((data) => data?.empCode);
      sortField.sort();
      if (sortOrder === false) {
        sortField.reverse();
      }
      const sortData = sortField.map((empCode) => {
        return data?.filter((data) => data?.empCode === empCode)[0];
      });
      return sortData;
  }
}