import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  BarChart,
  Bar,
} from 'recharts';
import { designation, empFields } from '../../constants/designation';
import { pieDataDesignation, pieDataJoiningYear, pieDataSalary } from '../../utils/chartHelper';
import classes from './DashBoardCharts.module.scss';




const DashBoardCharts = ({data}) => {
  const pieDesignationData = pieDataDesignation(data, designation);
  const pieSalaryData= pieDataSalary(data);
  const pieJoiningYearData= pieDataJoiningYear(data);
  return (
    <div className= {classes.main} >
      <div className={classes.main__pieChart}>
        <h3>Designation Strength</h3>

        <ResponsiveContainer width='150%' aspect={1} debounce={1}>
          <PieChart width={300} heigth={500}>
            <Pie
              isAnimationActive={true}
              data={pieDesignationData}
              dataKey="value"
              nameKey="name"
              legendType="square"
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div  >
      <div className={classes.main__pieChart}>
        <h3>Salary</h3>
        <ResponsiveContainer width={500} height= {300} >
          <LineChart
            data={pieSalaryData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Salary" stroke="#8884d8" activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div  >
      <div className={classes.main__pieChart}>
        <h3>Joinees per year</h3>
        <ResponsiveContainer width={500} height={300}>
          <BarChart
            width={500}
            height={300}
            data={pieJoiningYearData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Joining Year" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default DashBoardCharts;
