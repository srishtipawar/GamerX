import React,{useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import M from 'materialize-css';
import "./Header.css"
import {useHistory,Link} from "react-router-dom"
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);


    
    const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
      'closeOnClick': true,
      'hover':true
  }
    var instances = M.Dropdown.init(elems,options);
  });

  return (
    <div className="navbar-fixed">
      <nav class="grey darken-4">
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo" style={{ textDecoration: 'none' ,color:"white"}}>GamerEx</Link>
          <ul class="right ">
            <li>
              {user&&<span style={{ textDecoration: 'none' ,color:"#fff",fontWeight:"600",marginRight:"30px"}}>Hello, {user.displayName}</span>}
              {console.log(user)}
            
            </li>
            <li>
            <Link to="/orders" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
              <i class="material-icons left">reorder</i>
              <span style={{color:"white" ,fontWeight:"500"}}>Orders</span></Link>
            </li>
            <li>
              <Link to="/discover" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
                  <i class="material-icons left">insert_chart</i>
                    <span style={{color:"white" ,fontWeight:"500"}}>Dicover</span>
              </Link>
            </li>

            <li>
              <Link to="/cart" style={{ textDecoration: 'none' ,color:"#b2ebf2"}}>
                  <i class="material-icons left">shopping_cart</i>
                  <span style={{marginLeft:"-10px",marginRight:"15px"}}>{basket?.length}</span> 
                  <span style={{color:"white" ,fontWeight:"500",marginRight:"15px"}}>Cart</span>
              </Link>
            </li>
            
            <li>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle tag="text">
                  <i className="material-icons">account_circle</i>
                </DropdownToggle>
                <DropdownMenu>
                  {
                  user&&user?
                  <div>
                    <li>
                      <Link to="/contact" style={{ color:"#000" ,textDecoration: 'none' }}>
                        <span style={{fontWeight:"500"}}>
                        Profile
                        </span>
                      </Link>
                    </li>
                    <li class="divider" tabindex="-1"></li>
                    <li>
                      <Link style={{textDecoration: 'none' ,color:"000"}}>
                        <span style={{fontWeight:"500"}} onClick={logout}>
                          Sign Out
                        </span>
                      </Link>
                    </li>
                  </div>
                :<div>
                <li>
                <Link to="/login" style={{ background:"black" ,textDecoration: 'none' ,color:"#000"}}>
                  <span style={{color:"aqua" ,fontWeight:"500",padding:"15px 0px"}}>
                  Sign in
                  </span>
                </Link>
                </li>
              </div>}
              </DropdownMenu>
            </Dropdown>
            </li>
            <li style={{color:"white" ,fontWeight:"500",marginRight:"25px"}}>Account</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
