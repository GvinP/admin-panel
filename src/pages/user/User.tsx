import "./user.css";
import { useParams, Link } from "react-router-dom";
import PermIdentity from "@material-ui/icons/PermIdentity";
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneAndroid from "@material-ui/icons/PhoneAndroid";
import MailOutline from "@material-ui/icons/MailOutline";
import LocationSearching from "@material-ui/icons/LocationSearching";
import Publish from "@material-ui/icons/Publish";

export const User = () => {
  const { id } = useParams();
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userDisplayImage"
            />
            <div className="userDisplayTopTitle">
              <span className="userDisplayUsername">Appa</span>
              <span className="userDisplayUserTitle">Sky bison</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userDisplayTitle">Account Details</span>
            <div className="userDisplayInfo">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">appa99</span>
            </div>
            <div className="userDisplayInfo">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">12.08.2002</span>
            </div>
            <span className="userDisplayTitle">Contact Details</span>
            <div className="userDisplayInfo">
              <PhoneAndroid className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">+7(926)244-32-42</span>
            </div>
            <div className="userDisplayInfo">
              <MailOutline className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">appa@gmail.com</span>
            </div>
            <div className="userDisplayInfo">
              <LocationSearching className="userDisplayIcon" />
              <span className="userDisplayInfoTitle">Moscow, Russia</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type={"text"}
                  placeholder="appa99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full name</label>
                <input
                  type={"text"}
                  placeholder="Appa"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type={"text"}
                  placeholder="appa@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type={"text"}
                  placeholder="+7(926)244-32-42"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type={"text"}
                  placeholder="Moscow, Russia"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="userUpdateImage"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type={"file"} id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
