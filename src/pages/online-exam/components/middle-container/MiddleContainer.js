import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80vh;
     background:rgb(243, 247, 248);
   `
const TabNameViewerContainer = styled.div`
    display: flex;
    
    background:white;
    flex-direction: column;
    width: 100%;
    background:white;
    
    align-items: center;
   
    

`
const TabNameViewerDivLeft = styled.div`
    display: flex;
   
    flex:1;;
    margin:0px 50px;
    align-items: center;
    width:100%;
    justify-content: center;
    

`

const TabNameViewerText = styled.div`
    font-size: 20px;
    padding: 10px;
    margin:0px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex:1
    
`


const MiddleContainer = ({ tabName, setDropDownNameFun }) => {
    
    const TabNameViewer = () => {
      
    
    return (
        <TabNameViewerContainer>
            <TabNameViewerDivLeft>
                <TabNameViewerText style={{
                    justifyContent: "center",
                    fontSize: "14px"
                }}
                >
                    {tabName}
                    <br />
                    {tabName}

                </TabNameViewerText>
                <TabNameViewerText style={{
                    justifyContent:"center"
                }}
                
                >
                    Bookmarks
                </TabNameViewerText>
            </TabNameViewerDivLeft>
    
        </TabNameViewerContainer>
    )

}
    return (
        <Container
            onClick={() => setDropDownNameFun("")}
        >
      
        
            {TabNameViewer()}
            <hr/>
          
  
        </Container>
    );
};

export default MiddleContainer;
