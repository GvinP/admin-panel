import { useEffect, useState } from "react";
import { userRequest } from "../../api/config";
import "./widgetLarge.css";

type Order = {
  _id: string;
  user: string;
  products: any;
  amount: number;
  address: any;
  status: "Pending" | "Approved" | "Decliend";
  createdAt: string;
};

export const WidgetLarge = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  console.log(orders);

  useEffect(() => {
    const getOrders = async () => {
      const res = await userRequest.get<Order[]>("orders");
      setOrders(res.data);
    };
    getOrders();
  }, []);

  const Button = ({ type }: { type: string }) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLargeTr">
            <td className="widgetLargeUser">
              <span className="widgetLargeUsername">{order.user}</span>
            </td>
            <td className="widgetLargeDate">{new Date(order.createdAt).toLocaleDateString() + ' ' + new Date(order.createdAt).toLocaleTimeString()}</td>
            <td className="widgetLargeAmount">{order.amount}</td>
            <td className="widgetLargeStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
