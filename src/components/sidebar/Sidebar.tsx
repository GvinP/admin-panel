import "./sidebar.css"
import LineStyle from '@material-ui/icons/LineStyle';
import Timeline from '@material-ui/icons/Timeline';
import TrendingUp from '@material-ui/icons/TrendingUp';
import PersonOutline from '@material-ui/icons/PersonOutline';
import Storefront from '@material-ui/icons/Storefront';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MailOutline from '@material-ui/icons/MailOutline';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import WorkOutline from '@material-ui/icons/WorkOutline';
import Report from '@material-ui/icons/Report';
import BarChart from '@material-ui/icons/BarChart';

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analitics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutline className="sidebarIcon"/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon"/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analitics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
