import React,{ useContext } from 'react';
import logo from '../../images/logo.png';
import home from '../../images/home.png';
import dashboard from '../../images/dashboard.png';
import logout from '../../images/logout.png';
import email from '../../images/email.png';
import maps from '../../images/maps.png';
import phone from '../../images/phone.png';
import price from '../../images/price.png';
import facility from '../../images/facility.png';
import './Dashboard.css';
import { AuthContext } from '../../context';
import { useState } from "react";
import { app, database, storage } from "../../firebase";
import { collection, addDoc, getDocs} from "firebase/firestore";
import { uploadBytes, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import { useEffect } from 'react';

export default function Dashboard() {


  const [data, setData] = useState([]);

  const fetchPost = async () => {
    const db = database;
    await getDocs(collection(db, "pg")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(newData, "newData");
      setData(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const { user } = useContext(AuthContext);

  const initialvalue = {
    pg_name: "",
    owner_name: "",
    address: "",
    facilities: "",
    rent: "",
    phone: "",
    photo_url: ""
  };


  const [pg, setPg] = useState(initialvalue);
  const [urlkey, seturlkey] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPg({ ...pg, [name]: value });
  };

  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
    
  };


  const handleform = () => {
      const PGImageRef = ref(storage, `images/${file.name}`);
      console.log("uploading:");
  
      console.log(file);
      uploadBytes(PGImageRef, file).then((snapshot) => {
        
        
        
        getDownloadURL(PGImageRef)
          .then((url) => {  
            seturlkey(url);
            setPg({ ...pg, photo: url });
            console.log(url);
            
          })
          .catch((error) => {
            console.log(error);
          });
      });

  
    };


  const handleAddDoc = () => {
    const dbInstance = collection(database, "pg");
  
            addDoc(dbInstance, {
              ...pg,
            });

  };


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



        {/* <div className="pgdata">
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
          </div> */}

  <div>
      {data.map((pg, index) => (
        <div className="pgdata" key={index}>
          <div className="pgleft">
            <img src={pg.photo} alt="" />
          </div>
          <div className="pgcenter">
            <h2>{pg.pg_name}</h2>
            <p>
              <img className="theicons" src={email} alt="" />
              {pg.email}
            </p>
            <p>
              <img className="theicons" src={phone} alt="" />
              {pg.phone}
            </p>
            <p>
              <img className="theicons" src={maps} alt="" />
              {pg.address}
            </p>
            <p>
              <img className="theicons" src={price} alt="" />
              {pg.rent}
            </p>
            <p>
              <img className="theicons" src={facility} alt="" />
              {pg.facilities}
            </p>
          </div>
          <div className="pgright">
            <img src={pg.photo_url} alt="" />
            <p>{pg.owner_name}</p>
          </div>
        </div>
      ))}
    </div>

          {/* <div className="pgright">
          
          <img src={"https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80"} alt=""></img>
          <p>Owner Name</p>
          </div>
        </div> */}
      </div>



      <div className="rightbar">
        {/* <h2>Add PG</h2> */}
        <label>PG Name:</label>
                  <input
                    type="text"
                    value={pg.pg_name}
                    name="pg_name"
                    onChange={handleChange}
                    id="name"
                  />
        <label> Image:</label>
                  <input type="file"  onChange={(event) => handleFileInputChange(event)} accept="image/*" />
                  <button  onClick={handleform} type="button">Upload</button>
                  <label>Address:</label>
                  <input
                    id="address"
                    name="address"
                    value={pg.address}
                    onChange={handleChange}/>

                  <label>Facilities:</label>
                  <input
                    type="text"
                    id="facilities"
                    name="facilities"
                    value={pg.facilities}
                    onChange={handleChange}
                  />
                  <label>Rent:</label>
                  <input
                    type="number"
                    id="rent"
                    name="rent"
                    value={pg.rent}
                    onChange={handleChange}
                  />
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={pg.phone}
                    onChange={handleChange}
                  />
                  <button  onClick={handleAddDoc} type="button">Submit</button>
        
      </div>
      </div>
    </div>
  );
}
}
