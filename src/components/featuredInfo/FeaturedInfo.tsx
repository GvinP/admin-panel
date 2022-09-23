import { useState, useEffect } from "react";
import "./featuredInfo.css";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { userRequest } from "../../api/config";

type Income = {
  _id: number;
  total: number;
};

export const FeaturedInfo = () => {
  const [income, setIncome] = useState<Income[]>([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      const res = await userRequest.get<Income[]>("orders/income");
      console.log(res.data);
      setPerc((res.data[1]?.total * 100) / res.data[0]?.total - 100);
      setIncome(res.data);
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            % {perc.toFixed(1)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,875</span>
          <span className="featuredMoneyRate">
            -1.7
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,875</span>
          <span className="featuredMoneyRate">
            6.7
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
};
