import React,{ useContext } from 'react';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import dashboard from '../../images/dashboard.png';
import logout from '../../images/logout.png';
import './Dashboard.css';
import { AuthContext } from '../../context';

export default function Dashboard() {
  const{user} = useContext(AuthContext);
  console.log(user);
  if(user){

  return (
    <div className="dash-board">
      <div className="topbar">
         <div className="left">
          <img src={logo} alt=""></img>
        </div>
        <div className="right">
          <p>{user.displayName}</p>
          <img src={user.photoURL} alt=""></img>
        </div>
      </div>
      <div className="content">
      <div className="leftbar">
      <ul>
        <li><img src={home} alt=""></img> Home</li>
        <br></br>
        <li><img src={dashboard} alt=""></img> Dashboard</li>
        <div className="blankspace"></div>
        <li><img src={logout} alt=""></img> Log Out</li>
      </ul>
      </div>

      <div className="middlebar">
        <div className="pgdata"></div>
        <div className="pgdata"></div>
        <div className="pgdata"></div>
      </div>

      <div className="rightbar">
      </div>
      </div>
    </div>
  );
}
}
