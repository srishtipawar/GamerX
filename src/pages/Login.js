import React, { useState } from "react";
import "./Login.css"
import {Container,Row,Col} from "reactstrap"
import { auth } from "../firebase";
import { useHistory,Link } from "react-router-dom";

export default function SignIn() 
{
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in ,redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

    return(
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
                <h3 class="center login-form-text">Sign In </h3>
              </div>
            </div>
            <div class="row margin">
              <div class="input-field col s12">
              <i class="material-icons prefix">mail_outline</i>
                <input id="email" type="text" name='email'
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
                value={password}
                onChange={(event) => setPassword(event. target.value)}/>
                <label for="password">Password</label>
              </div>
            </div>
 
            <div class="row">
              <div class="input-field col s12">
                <button onClick={login} class="btn col s12">Login</button>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6 m6 l6">
                <p class="margin" style={{fontWeight:"600"}}><Link to="/register" style={{textDecoration:"none",fontWeight:"700"}}>Don't have an account? Sign Up</Link></p>
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
