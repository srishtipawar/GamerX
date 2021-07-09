import React, { useState } from "react";
import { auth,db} from "../firebase";
import { useHistory ,Link} from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Login.css"
import {Row,Col} from "reactstrap"
export default function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    contact:"",
    address:"",
    description:"",
    pass:""
  })

  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [username,setUsername]=useState("")

  const { contact,address,description} = formData;


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const register = (e) => {
    e.preventDefault();
      auth
      .createUserWithEmailAndPassword(email, pass)
      .then((auth) => {
        db.collection('users').doc(auth.user.uid).set(formData)
        auth.user.updateProfile({
          displayName: username,
        });
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <>    
      <Row>
        <Col lg={8}>
          <video id="videoBG" poster="https://wallpapercave.com/wp/wp1867426.jpg" autoplay muted loop>
          </video>
        </Col>
        <Col lg={4}>
        <div className=" login ">
      <div id="login-page" class="row">
        <div class="col s12">
          <form class="login-form">
            <div class="row">
              <div class="input-field col s12 center">
                <img src="images/login-logo.png" alt="LOGO" class="circle responsive-img valign profile-image-login"/>
                <h3 class="center login-form-text">Sign Up </h3>
              </div>
            </div>
            
            <div class="row margin">
            <div class="input-field col s12">
              <i class="material-icons prefix">person_outline</i>
                <input id="username" type="text" name='username'
                type='text'
                id='username'
                value={username}
                onChange={(event) => setUsername(event. target.value)}
                />
                <label for="username">Username</label>
              </div>
            </div>
            <div class="row margin">
              <div class="input-field col s12">
              <i class="material-icons prefix">mail_outline</i>
                <input id="email" type="email" name='email'
                label='Email'
                type='email'
                id='email'
                value={email}
                onChange={(event) => setEmail(event. target.value)}
                
                />
                <label for="email" class="center-align c">Email</label>
              </div>
            </div>
            <div class="row margin">
              <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
                <input id="password" type="password" name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={pass}
                onChange={(event) => setPass(event. target.value)} />
                <label for="password">Password</label>
              </div>
            </div>

            <div class="row margin">
            <div class="input-field col s12">
              <i class="material-icons prefix">location_city</i>
                <input id="address" type="text" name='address'
                type='text'
                id='address'
                value={address}
                onChange={(e) => onChange(e)} />
                <label for="address">Address</label>
              </div>
            </div>
 
            <div class="row">
              <div class="input-field col s12">
                <button onClick={register}class="btn col s12">Sign Up</button>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m6 l6">
                <p class="margin" style={{fontWeight:"600"}}><Link to="/login" style={{textDecoration:"none",fontWeight:"700"}}>Already have an account? Sign in</Link></p>
              </div>         
            </div>

          </form>
        </div>
      </div>

    </div>
          
        </Col>
      </Row>
      
</>
  
  );
}
