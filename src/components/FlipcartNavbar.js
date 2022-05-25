import styled from "styled-components"

import { FaShoppingCart } from "react-icons/fa";
import {MdOutlineExpandLess} from "react-icons/md"
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
// import {FiArrowDown} from "react-icons/fi"
const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: RGB(40, 115, 240);
  position: fixed;
  color: white;
  display: flex;
  top: 0px;
  justify-content: center;
  align-items: center;
  font-family: "Outfit", sans-serif;
  margin-bottom:auto;
//   font-family: "PT Sans", sans-serif;
`;


const Left = styled.div`
    flex:1;
    margin-left:20px;
  `;


const LeftLogo = styled.div`
  display: flex;
  justify-content: center;
  font-family: "PT Sans", sans-serif;
`;
const LeftLogoText=styled.h3`
    font-size:24px;
    font-weight:700;
    cursor:pointer;
    letter-spacing:2px;
    
    
    `
const Center = styled.div`
  flex: 1;
  margin-left: 20px;
  background-color:white;
`;

const CenterSearchInputContainer=styled.div`
  display:flex;
  width:100%;
  height:100%;
  
  `
const CenterSearchInput = styled.input`
  width: 80%;
  height: 100%;
  padding:10px;
  border:none;
  font-weight:bold;
  
  &:focus{
      outline:none
  }
`;
const CenterSearchButton = styled.button`
  width: 20%;
  height: 100%;
  padding: 10px;
  font-size:16px;
  text-align:center;
  border: none;
  background-color:transparent;
  cursor:pointer;
  &:focus {
    outline: none;
  }
`;

const Right = styled.div`
  flex: 1;
  justify-content:center;
  align-items:center;
  display: flex;
  font-family: "Roboto", sans-serif;
  margin-left:20px;
 
`;
const RightMoreArrow = styled.span`
  font-size: 14px;
  margin: 10px;~
`;
const RightProfileArrow = styled.span`
  font-size: 14px;
  margin: 10px;
`;
const RightProfile = styled.div`
  position: relative;
  margin-right: 15%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${RightMoreArrow} {
    transform: scaleX(180deg);
    background-color: red;
  }
`;
const RightProfileText=styled.p`
  
  
  `

const RightMore = styled.div`
  position: relative;
  margin-right: 10%;
  cursor: pointer;
`;



const RightCart = styled.div`
    position: relative;
    margin-right: 30px;
    color: white;
    display:flex;
`;
const RightCartText = styled.h4`
    font-size:24px;
    color:white
  
`;
const RightCartValue = styled.span`
  background-color: #c2641a;
  font-size: 18px;
  position: absolute;
  border-radius:10px;
  top: 20px;
  right: -15px;
  padding:2px
`;
const FlipkartNavbar = () => {
    return (
      <NavbarContainer>
        <Left>
          <LeftLogo>
            <LeftLogoText>LeftLogo</LeftLogoText>
          </LeftLogo>
        </Left>
        <Center>
          <CenterSearchInputContainer>
            <CenterSearchInput placeholder="Search..." />
            <CenterSearchButton>
              <AiOutlineSearch />
            </CenterSearchButton>
          </CenterSearchInputContainer>
        </Center>

        <Right>
          <RightProfile>
                    <RightProfileText>Sign In 
                        <RightMoreArrow>
                            <AiOutlineDown/>
                        </RightMoreArrow>
            </RightProfileText>
          </RightProfile>
            <RightMore>
                        
                    More
                    <RightMoreArrow>
                        <AiOutlineDown />
                    </RightMoreArrow>
          </RightMore>

          <RightCart>
            <RightCartText>
              <FaShoppingCart />
              <RightCartValue>2</RightCartValue>
            </RightCartText>
          </RightCart>
        </Right>
      </NavbarContainer>
    );
}

export default FlipkartNavbar
