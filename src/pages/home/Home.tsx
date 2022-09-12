import { Chart } from '../../components/chart/Chart'
import { FeaturedInfo } from '../../components/featuredInfo/FeaturedInfo'
import { WidgetLarge } from '../../components/widgetLarge/WidgetLarge';
import { WidgetSmall } from '../../components/widgetSmall/WidgetSmall';
import './home.css'

const data = [
    {
      name: "Jan",
      ActiveUser: 4000,
    },
    {
      name: "Feb",
      ActiveUser: 3000,
    },
    {
      name: "Mar",
      ActiveUser: 2000,
    },
    {
      name: "Apr",
      ActiveUser: 2780,
    },
    {
      name: "May",
      ActiveUser: 1890,
    },
    {
      name: "Jun",
      ActiveUser: 2390,
    },
    {
      name: "Jul",
      ActiveUser: 3490,
    },
    {
      name: "Agu",
      ActiveUser: 4000,
    },
    {
      name: "Sep",
      ActiveUser: 3000,
    },
    {
      name: "Oct",
      ActiveUser: 2000,
    },
    {
      name: "Nov",
      ActiveUser: 2780,
    },
    {
      name: "Dec  ",
      ActiveUser: 1890,
    },
  ];

export const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart title='User Analytics' data={data} dataKey={'ActiveUser'} grid/>
        <div className="homeWidgets">
            <WidgetSmall/>
            <WidgetLarge/>
        </div>
    </div>
  )
}
