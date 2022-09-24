import "./widgetSmall.css";
import Visibility from "@material-ui/icons/Visibility";
import { useEffect, useState } from "react";
import { userRequest } from "../../api/config";
import { IUser } from "../../api/api";

export const WidgetSmall = () => {
  const [users, setUsers] = useState<IUser[]>([]);
 
  useEffect(() => {
    const getUsers = async () => {
      const res = await userRequest.get<IUser[]>("user?new=true");
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        {users.map((user) => (
          <li className="widgetSmallListItem" key={user._id}>
            <img
              src={
                user.image ||
                "data:image/png;base64,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"
              }
              alt=""
              className="widgetSmallImage"
            />
            <div className="widgetSmallUser">
              <span className="widgetSmallUsername">{user.username}</span>
              <span className="widgetSmallUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmallButton">
              <Visibility className="widgetSmallIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
