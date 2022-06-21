import { useContext, useEffect, useState } from 'react';
import { empFields } from '../../constants/designation';
import AdminContext from '../../store/admin-context';
import { sortHelper } from '../../utils/sortHelper';
import DashBoardCharts from '../DashBoardCharts.js/DashBoardCharts';
import classes from './DashBoard.module.scss';

const DashBoard = () => {
  const adminCtx = useContext(AdminContext);
  const [data, setData] = useState();
  const [sortOrder, setSortOrder] = useState(true);
  const [sortBy, setSortBy] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await adminCtx.data;
      setData(data);
    };
    console.log('setting data');
    getData();
  }, [adminCtx.data]);

  useEffect(() => {
    const sortedData = sortHelper(sortBy, sortOrder, data);
    setData(sortedData);
  }, [sortOrder, sortBy]);

  return (
    <main className={classes.main}>
      <DashBoardCharts data={data} />
      <div className={classes.main__field}>
        <p className={classes.main__field_head}>Employee's Data</p>
        <div className={classes.main__field_option}>
          <select
            className={classes.main__field_option_select}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option disabled selected hidden>
              Sort By
            </option>
            <option>Emp. Code</option>
            <option>Name</option>
            <option>Age</option>
            <option>Salary</option>
          </select>
          <select
            className={classes.main__field_option_select}
            onChange={(e) => {
              setSortOrder(e.target.value === 'Ascending' ? true : false);
            }}
          >
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>

      <table className={classes.main__table} cellSpacing="0">
        <tr className={classes.main__table_row}>
          {empFields.map((head, index) => {
            return (
              <th className={classes.main__table_head} key={index}>
                {head}
              </th>
            );
          })}
        </tr>
        {data?.map((data, index) => {
          return (
            <tr className={classes.main__table_row} key={index}>
              <td className={classes.main__table_row_data}>{data.empCode}</td>
              <td className={classes.main__table_row_data}>{data.name}</td>
              <td className={classes.main__table_row_data}>{data.age}</td>
              <td className={classes.main__table_row_data}>{data.designation}</td>
              <td className={classes.main__table_row_data}>{data.salary}</td>
              <td className={classes.main__table_row_data}>{data.joinData}</td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};
export default DashBoard;
