import { useContext, useState } from 'react';
import { empFields } from '../../constants/designation';
import AdminContext from '../../store/admin-context';
import classes from './DashBoard.module.scss';

const DashBoard = () => {
  const adminCtx = useContext(AdminContext);
  const [data, setData] = useState();

  adminCtx.data.then((res) => {
    console.log(res);
    setData(res);
  });
  console.log(data);
  return (
    <main className={classes.main}>
      <table className={classes.main__table} cellSpacing="0">
        <tr className={classes.main__table_row}>
          {empFields.map((head, index) => {
            return <th  className={classes.main__table_head} key={index}>{head}</th>;
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
