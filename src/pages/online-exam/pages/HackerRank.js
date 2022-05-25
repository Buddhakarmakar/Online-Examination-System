import MiddleContainer from "../components/middle-container/MiddleContainer";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import styled from 'styled-components'
import {useEffect   } from "react";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 ;
    padding: 0;

`
const HomePage = () => {
    const [tabName, setTabName] = useState("hello")
    
    const getTabName = (tab) => {
                setTabName(tab)
    }
    const [dropDownName, setDropDownName] = useState("")
    const setDropDownNameFun = (dropDown) => {
        setDropDownName(dropDown)
    }
    useEffect(() => {
        
    },[dropDownName])
    return (
        <Container>
            <Navbar
                getTabName={getTabName}
                setDropDownNameFun={setDropDownNameFun}
                dropDownName={dropDownName}
            />
                
            <MiddleContainer
                tabName={tabName}
                setDropDownNameFun={setDropDownNameFun}
            />

        </Container>
        
    
    )   
};

export default HomePage;
