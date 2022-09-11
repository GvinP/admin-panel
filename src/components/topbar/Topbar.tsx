import "./topbar.css";
import NotificationsNoneOutlined from '@material-ui/icons/NotificationsNoneOutlined';
import Language from '@material-ui/icons/Language';
import Settings from '@material-ui/icons/Settings';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="toLleftBlock">
                <span className="logo">Admin panel</span>
            </div>
            <div className="topRightBlock">
                <div className="iconContainer">
                    <NotificationsNoneOutlined/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="iconContainer">
                    <Language/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="iconContainer">
                    <Settings/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP_yTp-tSNKO37HVn62okVQ6fe0RXvB3Ifg&usqp=CAU" alt="avatar" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
