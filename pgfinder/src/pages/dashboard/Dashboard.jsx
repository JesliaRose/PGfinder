import React,{ useContext } from 'react';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import dashboard from '../../images/dashboard.png';
import logout from '../../images/logout.png';
import email from '../../images/email.png';
import maps from '../../images/maps.png';
import phone from '../../images/phone.png';
import price from '../../images/price.png';
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
        <div className="pgdata">
          <div className="pgleft">
          <img src={"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt=""></img>
          </div>
          <div className="pgcenter">
          <h2>PG Name</h2>
          <p><img className="theicons" src={email} alt=""></img> emailaddress@gmail.com</p>
          <p><img className="theicons" src={phone} alt=""></img> 9988776655</p>
          <p><img className="theicons" src={maps} alt=""></img> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias, tenetur blanditiis eligendi, distinctio quos laudantium volupta ipsam dolor tempora.</p>
          <p><img className="theicons" src={price} alt=""></img> Rs.8000</p>
          </div>
          <div className="pgright">
          
          <img src={"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"} alt=""></img>
          <p>Owner Name</p>
          </div>
        </div>
        <div className="pgdata">
          <div className="pgleft">
          <img src={"https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} alt=""></img>
          </div>
          <div className="pgcenter">
          <h2>PG Name</h2>
          <p><img className="theicons" src={email} alt=""></img> emailaddress@gmail.com</p>
          <p><img className="theicons" src={phone} alt=""></img> 9988776655</p>
          <p><img className="theicons" src={maps} alt=""></img> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias, tenetur blanditiis eligendi, distinctio quos laudantium volupta ipsam dolor tempora.</p>
          <p><img className="theicons" src={price} alt=""></img> Rs.8000</p>
          </div>
          <div className="pgright">
          
          <img src={"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"} alt=""></img>
          <p>Owner Name</p>
          </div>
        </div>
      </div>

      <div className="rightbar">
        <h2>Add PG</h2>
        <form>
        <label for="name" id="name"><input type="text" id="name" name="name" placeholder="Enter your name" required/></label>
        <label for="email" id="email"><input type="email" id="email" name="email" placeholder="Enter your email" required/></label>
        <label for="phno" id="phno"><input type="text" id="phno" name="phno" placeholder="Enter your phone number" required/></label>
        <label for="namepg" id="namepg"><input type="text" id="namepg" name="namepg" placeholder="Enter the name of the PG" required/></label>
        <label for="address" id="address"><input type="text" id="address" name="address" placeholder="Enter the address" required/></label>
        <label for="price" id="price"><input type="text" id="price" name="price" placeholder="Enter the pricing" required/></label>
        <input type="submit" value="Submit"/>
        </form>
      </div>
      </div>
    </div>
  );
}
}
