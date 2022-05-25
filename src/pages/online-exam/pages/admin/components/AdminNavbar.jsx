import React, {   } from 'react'
import styled from 'styled-components'
import { FiMenu, FiSettings } from 'react-icons/fi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { FaRegQuestionCircle} from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import "./style.css"
const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #f5f5f5;
  width: 100%;
  box-shadow: 0px 0px 9px #000000;
  position: fixed;
  top: 0;

`
const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  background-color:rbg(0,0,0,0.1);
`

const NavbarMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background-color:rbg(0,0,0,0.5);


`
const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40%;
  // background-color:rbg(0,0,0);
  height: 100%;

`

const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: rgba(0,0,0,0.5);
  }
  

`
const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  width:150px;
  transition: all 0.3s ease-in-out;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  &:focus{
    width: 400px;
  }

`
const DropdownContainer = styled.div`
    height:200px;
    width:200px;
    background-color: red;
    position: absolute;
    top: 60px;
    right: 0;
    display: none;


`
const NavbarItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  height: 40px;
  width:40px;
  color:rgba(0,0,0,0.6);
  cursor: pointer;
  position: relative;
  &:hover{
    border-radius: 50%;
    background-color: rgba(25,25,25,0.1);
    color:black;
  }
  // &:hover ${DropdownContainer}{
  //   display: flex;
  // }

`


const AdminNavbar = ({ setIsOpenFunction}) => {

  

  function toogleDropdown(x) {
   
    document.getElementById(x).classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
   
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
         
        }
      }
    }
  }
  return (
   
      <Navbar>
        <NavbarLeft>
          <NavbarItem >
          
            <FiMenu size={30}
            id="navbar-menu"
            onClick={() => setIsOpenFunction()}

          />

          </NavbarItem>
          <NavbarItem style={{
            fontSize: "30px",
            fontWeight: "bold",
            backgroundClip: "url('./../assets/images/background.jpg')",
          }}>
            BkSytem
          </NavbarItem>
        </NavbarLeft>
        <NavbarMiddle>
          <NavbarItem style={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            boxShadow: "0px 0px 3px #000000",
          }}>
            <BiSearch size={30} />
            <SearchInput placeholder="Search..." />

            <AiOutlineMenuUnfold size={30} />

          </NavbarItem>
        </NavbarMiddle>
        <NavbarRight>
          <NavbarItemIcon>
            <div className="dropdown">

              <FaRegQuestionCircle
                onClick={() => {
                  toogleDropdown("helpDropDown")
                }} className="dropbtn"

                size={25}

              />
              <div id="helpDropDown" className="dropdown-content">
                <h3>Help</h3>
                <hr />
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </NavbarItemIcon>
          <NavbarItemIcon>
            <div className="dropdown">

              <FiSettings
                onClick={() => {
                  toogleDropdown("settingDropdown")
                }} className="dropbtn"

                size={25}

              />
              <div id="settingDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>


          </NavbarItemIcon>

          <NavbarItemIcon style={{
            marginRight: "20px"
          }}

          >
            <div className="dropdown">

              <CgProfile
                onClick={() => {
                  toogleDropdown("profileDropdown")
                }} className="dropbtn"

                size={25}

              />
              <div id="profileDropdown" className="dropdown-content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </NavbarItemIcon>

        </NavbarRight>

        {/* <img src={require("./../assets/images/background.jpg")} /> */}
      </Navbar>
      
  
  )
}

export default AdminNavbar