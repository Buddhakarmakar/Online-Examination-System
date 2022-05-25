import styled from 'styled-components'
import { MdNotifications } from 'react-icons/md'
import { FiMessageSquare } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { BsSearch,BsChevronDown } from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import { useState, useEffect } from 'react'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
const NavbarContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(58, 66, 79);
  
`
const NavbarLeft = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
        flex:1

`
const NavbarRight = styled.div`
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: Center;
         flex:1
`
const NavbarItemDiv = styled.div`
    display: flex;
    align-items: center;
    height: 90%;
    justify-content: center;
    margin-right: 15px;
      cursor: pointer;
      position: relative;
    

`
const NavbarItemLogo = styled.div`
    font-size: 25px;
    color: white;
    font-weight: bold;

`
const NavbarItem = styled.div`
        display: flex;
        align-items: center;
        font-weight: bold;
        height: 100%;
        
        color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        border-bottom: ${props => props.active ? '5px solid rgb(28, 169, 75)' : 'none'};
        &:hover{
            color: white;
        }
        &:active{
            color: white;
        }
        

 
`
const NavbarItemIcon = styled.div`
    font-size: 20px;
  
    background-color:${props => props.active ? 'black' : ''};
    padding:${props => props.active ? '10px' : ''};
    border-radius: 5px;    
    transition: all 0.3s ease-in-out;
`

const NavbarSearchInput = styled.input`
    width: 50px;
    height:20px;
    border:none;
    padding: 10px;
    caret-color: white;
    color: white;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    background-color: transparent;
    transition: all .3s ease-in-out;
    &:focus{
        outline: none;
        width: 150px;
        background-color: rgba(0,0,0,.9);
        color:white;
        border-radius: 5px;
       
    }


`

const ProfileDiv = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    position: absolute;
    top: 55px;
    flex-direction: column;
   
    width: 200px;
    background-color:white;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    
    
   
`
const Profile = styled.div`
    
        &:hover ${ProfileDiv}{
            background-color:red;
        }
    

`
const ProfileDivItem = styled.div`

    margin:10px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover{
        font-weight:bold
    }
`
const ProfileDivText = styled.div`
    padding: 10px;
    
`
const ProfileDivProgressBar = styled.div`
    width:25px;
    height:25px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
`
const Message = styled.div`
  
`
const MessageNotiDiv = styled.div`
    position: absolute;
    display: ${props => props.active ? 'flex' : 'none'};
    right:0;
    top: 55px;
    flex-direction: column;
    width: 350px;
    background-color:white;
    box-shadow: 0px 0px 10px rgba(0,0,0,.5);
    transition: all 1s ease-in-out;

`
 const MessageDivItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
`
 const MessageDivItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    
`
const MessageDivItemText = styled.div`
    font-size: 15px;
    font-weight: bold;
    color:rgba(0,0,0,.5);

`

const Notifications=styled.div`
   `
const Navbar = ({getTabName,dropDownName,setDropDownNameFun}) => {
    const [tabName, setTabName] = useState("")
      const changeTab = (e) => {
        setTabName(e.target.innerHTML)
        getTabName(e.target.innerHTML)
    }
    
    const [dropDown, setDropDown] = useState("")
    useEffect(() => {
        setDropDown(dropDownName)
    }, [dropDownName])
    console.log(dropDown)
 
    return (

        <div>
            <NavbarContainer onClick={() => {
                setDropDown(" ")
            }}> 
                <NavbarLeft>
                    <NavbarItemDiv >
                        <NavbarItemLogo>
                            BkSystem
                        </NavbarItemLogo>
                    </NavbarItemDiv>
                    <NavbarItemDiv>
                        <NavbarItem onClick={(e) => {
                            changeTab(e)
                        }}
                            active={tabName==="PREPARE"}
        
                        >
                            PREPARE
                        </NavbarItem>
                    </NavbarItemDiv>
                    <NavbarItemDiv >
                        <NavbarItem
                            onClick={(e) => {
                            changeTab(e)
                        }}
                            active={tabName==="CERTIFY"}
                        >
                            CERTIFY
                        </NavbarItem>
                    </NavbarItemDiv>
                    <NavbarItemDiv>
                        <NavbarItem
                        onClick={(e) => {
                            changeTab(e)
                        }}
                            active={tabName==="COMPETE"}
                        >
                            COMPETE
                        </NavbarItem>
                    </NavbarItemDiv>
                </NavbarLeft>
                <NavbarRight>
                    <NavbarItemDiv>
                        {/* <NavbarItemIcon style={{
                            color: "rgba(255,255,255,.8",
                            cursor:"text"
                        }}>
                            <BsSearch/>
                        </NavbarItemIcon> */}
                        <NavbarSearchInput type="text" placeholder="Search..." />
                    
                    </NavbarItemDiv>
                    <NavbarItemDiv >
                        <Notifications
                            onClick={() => {
                               
                                setDropDownNameFun("Notifications")     
                            }}
                            
                        >
                            <NavbarItem>
                                <NavbarItemIcon
                                    active={dropDown === "Notifications"}
                                    
                                >
                                    <MdNotifications/>
                                </NavbarItemIcon>
                            </NavbarItem>
                        </Notifications>
                         <MessageNotiDiv
                                active={dropDown === "Notifications"}
                                
                            >
                                <MessageDivItemContainer>
                                    <MessageDivItem style={{
                                        backgroundColor: "rgba(0,0,0)",
                                        justifyContent:"space-between"
                                    }}>
                                        
                                        <MessageDivItemText style={{
                                                color:"white"
                                            }}>
                                                Notifications
                                    </MessageDivItemText>
                                    <MessageDivItemText style={{
                                        color: "white",
                                        fontWeight: "normal",
                                        borderBottom:"0.5px solid white"
                                            }}>
                                                Archive All
                                            </MessageDivItemText>
                                    </MessageDivItem>
                                </MessageDivItemContainer>
                            <MessageDivItemContainer style={{
                                    
                                }}>
                                    <MessageDivItem style={{
                                        padding: "20px",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems:"flex-start"
                                        
                                    }}>
                                        
                                        <MessageDivItemText style={{
                                            fontWeight: "normal",
                                            fontSize: "14px",
                                            padding: "0px",   
                                            }}>
                                                You have no Unread messages
                                        </MessageDivItemText>
                                        
                                    </MessageDivItem>
                                </MessageDivItemContainer>

                                <MessageDivItemContainer>
                                    <MessageDivItem style={{
                                       
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTop:"1px solid rgba(0,0,0,.3)"
                                        }}
                                    >
                                        <MessageDivItemText style={{
                                            fontWeight: "normal",
                                            fontSize: "17px",
                                        }}
                                        onClick={() => {
                                                alert("Show All Click")
                                            }}
                                    >
                                               Show All
                                        </MessageDivItemText>
                                    </MessageDivItem>
                                </MessageDivItemContainer>
                        </MessageNotiDiv>
                    </NavbarItemDiv>
                    <NavbarItemDiv >
                        <Message onClick={() => {
                                    setDropDownNameFun("Messages")
                                }}>
                            <NavbarItem>
                                <NavbarItemIcon
                                    active={dropDown === "Messages"}
                                >
                                    <FiMessageSquare/>
                                </NavbarItemIcon>
                            </NavbarItem>
                            <MessageNotiDiv
                                active={dropDown === "Messages"}
                                
                            >
                                <MessageDivItemContainer>
                                    <MessageDivItem style={{
                                        backgroundColor: "rgba(0,0,0)",
                                        justifyContent:"center"
                                    }}>
                                        
                                        <MessageDivItemText style={{
                                                color:"white"
                                            }}>
                                                Messages
                                            </MessageDivItemText>
                                    </MessageDivItem>
                                </MessageDivItemContainer>
                                <MessageDivItemContainer>
                                    <MessageDivItem style={{
                                        border: "1px dotted black",
                                        margin: "20px",
                                        padding: "20px",
                                        flexDirection: "column",
                                        justifyContent:"flex-start"
                                    }}>
                                        
                                        <MessageDivItemText style={{
                                            fontWeight: "normal",
                                            fontSize: "14px",
                                            padding: "0px",   
                                            }}>
                                                You have no Unread messages
                                        </MessageDivItemText>
                                        
                                    </MessageDivItem>
                                </MessageDivItemContainer>

                                <MessageDivItemContainer>
                                    <MessageDivItem style={{
                                       
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderTop:"1px solid rgba(0,0,0,.3)"
                                        }}
                                    >
                                        <MessageDivItemText style={{
                                            fontWeight: "normal",
                                            fontSize: "17px",
                                        
                                            }}>
                                               Show All
                                        </MessageDivItemText>
                                    </MessageDivItem>
                                </MessageDivItemContainer>
                            </MessageNotiDiv>
                        </Message>
                        
                    </NavbarItemDiv>
                    <NavbarItemDiv >
                        <Profile onClick={() => {
                             setDropDownNameFun("Profile")
                          
                        }}>
                            <NavbarItem active={dropDown === "Profile"}
                                style={{
                                            borderBottom:"none"
                                        }}
                            >
                                <NavbarItemIcon style={{
                                    marginRight: "5px"
                                }}>
                                    <FaUser/>
                                </NavbarItemIcon>
                        
                                <span style={{
                                    whiteSpace: "nowrap;",
                                    width: "100px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                   
                                    
                                }} >
                                      buddhadebkarmakar4567@gmail.com
                                </span>
                                {dropDown === "Profile" ?
                                     <MdOutlineKeyboardArrowUp />:
                                    <BsChevronDown /> 
                                   
                                }
                            </NavbarItem>
                        </Profile>
                        <ProfileDiv
                            active={dropDown==="Profile"}
                        >
                            <ProfileDivItem onClick={() => {
                                        alert("Profile ")
                                    }}>
                                <ProfileDivText >
                                    Profile
                                </ProfileDivText>
                                <ProfileDivProgressBar>

                                </ProfileDivProgressBar>
                            </ProfileDivItem>
                            <ProfileDivItem>
                                <ProfileDivText>
                                    LeaderBoard
                                </ProfileDivText>
                            </ProfileDivItem>
                            <ProfileDivItem>
                                <ProfileDivText>
                                    Setting
                                </ProfileDivText>
                            </ProfileDivItem>
                            <ProfileDivItem>
                                <ProfileDivText>
                                    Bookmarks
                                </ProfileDivText>
                            </ProfileDivItem>
                            <ProfileDivItem>
                                <ProfileDivText>
                                    LogOut
                                </ProfileDivText>
                                <ProfileDivText>
                                    <FiLogOut/>
                                </ProfileDivText>
                            </ProfileDivItem>
                        </ProfileDiv>
                        
                    </NavbarItemDiv>
                </NavbarRight>


            </NavbarContainer>
           
        
        </div>
    )
};

export default Navbar;
