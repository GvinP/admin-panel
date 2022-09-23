import { useState, useEffect } from "react";
import { userRequest } from "../../api/config";
import { Chart } from "../../components/chart/Chart";
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo";
import { WidgetLarge } from "../../components/widgetLarge/WidgetLarge";
import { WidgetSmall } from "../../components/widgetSmall/WidgetSmall";
import "./home.css";

const Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"]

type UsersStats = {
  name: string,
  ActiveUser: number,
}

export const Home = () => {
  const [usersStats, setUsersStats] = useState<UsersStats[]>([]);

  useEffect(() => {
    const getUsersStats = async () => {
      const res = await userRequest.get<{_id: number, total: number}[]>("user/stats");
      res.data.map(item=> setUsersStats(prev=> [...prev, {name: Month[item._id-1], ActiveUser: item.total}]))
    };
    getUsersStats();
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={usersStats} dataKey={"ActiveUser"} grid />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};
