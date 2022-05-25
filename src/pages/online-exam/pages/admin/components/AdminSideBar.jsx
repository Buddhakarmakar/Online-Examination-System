import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { BiBorderAll, } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { BiAddToQueue} from 'react-icons/bi'
// import { Link } from 'react-router-dom'
const SidebarText = styled.div`
  margin:0px 10px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
 

`
const SidebarIcon = styled.div`
  margin:0px 10px;
  `
const Container = styled.div`
  margin-top: 60px;
  width: ${props => props.isOpen?"300px": '50px'};
  height: calc(100vh - 60px);
  background-color: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  
  &:hover{
    width:300px;

  }
  &:hover ${SidebarText} {
    display: flex;
  }

`

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(240,255,245,.9);
  color: ${props => props.isActive ? "rgba(0,103,255,1)" :
              "rgba(250,250,250,0.7)"};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rgba(0,0,0,0.5);
    color:rgba(120,220,233,0.8);
    border-bottom: 1px solid red;
    border-radius: 5px;

  }
`

const AdminSideBar = ({ isOpen, setIsOpenFunction, setCurrentTabFunction,currentTab}) => {
  
  return (
    <Container id="admin-sidebar"
      isOpen={isOpen}
      // onClick={() => {
      //   setIsOpenFunction()
      // }}
    >
      
      <SidebarItem onClick={() => {
        setCurrentTabFunction("dashboard")
        
      }}
        isActive={currentTab === "dashboard"}
      >
        <SidebarIcon>
          <AiOutlineHome size={30} />
        </SidebarIcon>
    
            <SidebarText isOpen={isOpen}>
              Dashboard
            </SidebarText>
    
      </SidebarItem>
      <SidebarItem onClick={() => {
        setCurrentTabFunction("create-exam")
        
        
      }}
        isActive={currentTab === "create-exam"}
      
      >
        <SidebarIcon>
          <IoCreateOutline size={30} />
        </SidebarIcon>
        <SidebarText isOpen={isOpen}>
          Create Exam
        </SidebarText>
      </SidebarItem>
      <SidebarItem onClick={() => {
        setCurrentTabFunction("show-all-exam")
      }}
        isActive={currentTab === "show-all-exam"}
      >
        <SidebarIcon>
          <BiBorderAll size={30} />
        </SidebarIcon>
        <SidebarText isOpen={isOpen}>
          Show All Exam
        </SidebarText>
      </SidebarItem>
      <SidebarItem onClick={() => {
        setCurrentTabFunction("add-question")
      }}
        isActive={currentTab === "add-question"}
      >
        <SidebarIcon>
          <BiAddToQueue size={30} />
        </SidebarIcon>
        <SidebarText isOpen={isOpen}>
          Add Questions
        </SidebarText>
      </SidebarItem>

      <SidebarItem style={{
        bottom: 0,
        position: 'absolute',
        width: '200px',
      }}>
        <SidebarIcon>
          <FiLogOut size={30} />
        </SidebarIcon>
        <SidebarText isOpen={isOpen}>
          Logout
        </SidebarText>
      </SidebarItem>
    </Container>
  )
}

export default AdminSideBar