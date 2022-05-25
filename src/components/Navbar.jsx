import styled from 'styled-components';
 import { GrCart} from 'react-icons/gr';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { BsArrowDown } from "react-icons/bs";
import { FaUserSlash} from 'react-icons/fa';
import { mobile } from '../responsive';
const NavbarContainer = styled.div`
  background-color: #a1c4fd;
  height: 70px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  ${mobile({
      backgroundColor: "#1a78c2",
      fontSize: "24px",
  })}
`;
const Left = styled.div`
    flex:1;
    display:flex;
    padding:10px;
    justify-content:flex-end;
    align-items:center;
    margin-left:10px;
    ${mobile({
        justifyContent: "flex-start",
         flex:1
    
        
    })}
    `
const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const LogoText = styled.h1`
  font-size: 30px;
  cursor: pointer;
  ${mobile({
   
    color: "#ff5722",
  })}
`;
    
const Center = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  ${mobile({
      justifyContent: "flex-start",
       flex:2
  })}
`;


const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  border: 0.5px solid white;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  background: white;
  height: 60%;

 
`;

const SerachInput = styled.input`
  padding: 10px;
  width: 80%;
  height: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  color: rgba(221, 122, 22, 0.9);
  &:focus {
    outline: none;
    
  }
`;
const SearchButton = styled.button`
  font-size: 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  height: 100%;
  width: 20%;
  background: transparent;
  color:blue;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  padding: 10px 30px 10px 10px;
  justify-content: flex-end;
  align-items: center;
  ${mobile({
      justifyContent: "flex-start",
       flex:2
  })}
`;


const RightText = styled.div`
    font-size:20px;
    margin-right:20px;
    color:rgba(0,0,0,0.8);
    border:0.4px solid rgba(0,255,255,.9);
    padding:5px;
    border-radius:5px;
    cursor:pointer;
    display:flex;
    transition:all .5s ease;
    &:hover{
        background-color:rgba(245,255,255,.9)
    }
    `;
const MoreMenu = styled.div`
  position: absolute;
  top: 90px;
  border: 1px solid linear-gradient(90deg, #ff758c 0%, #ff7eb3 100%);
  border-radius: 5px;
  width: 200px;
  background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: all 0.2s ease;

  transform: translateY(-100%);
`;
const Arrow = styled.div`
  font-size: 10px;
  position: absolute;
  display: flex;
  right: -10px;
  bottom: 10px;
`;
const RightMore = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:40px;
    cursor:pointer;
    position:relative;
    margin-left:20px;
    transition:all .1s ease;
    &:hover{
         color:white;
    }
&:hover ${MoreMenu} {
    visibility:visible;
    color:white;
 
`;
    ;

const RighMoreText = styled.div`
  font-size: 20px;
  text-align:center;
  padding:5px;
`;



const RightLogo = styled.div`
      font-size: 20px;
      margin-right: 10px;
      color: rgba(0, 0, 0, 0.8);

      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      &:hover {
        color: rgba(245, 255, 255, 0.9);
      }
    `;
const Badge=styled.span`
    font-size:12px;
    position:absulute;
    
  
    
    
    `
const Navbar = () => {
    return (
      <NavbarContainer bg="#f3f1f1">
        <Left>
          <LogoText>BK-E-Cart</LogoText>
        </Left>

        <Center>
          <Logo>
            <SearchContainer>
              <SerachInput placeholder="Search.." />
              <SearchButton bg="black">
                <SearchIcon />
              </SearchButton>
            </SearchContainer>
          </Logo>
        </Center>

        <Right>
          <RightText>
            <RightLogo>
              <FaUserSlash />
            </RightLogo>
            Sign In
          </RightText>
          <RightMore>
                <RighMoreText>More</RighMoreText>
                    <Arrow> <BsArrowDown /> </Arrow>
                    
                    <MoreMenu>Hi this is more</MoreMenu>
          </RightMore>
          <RightLogo>
            <GrCart />
            <Badge>1</Badge>
          </RightLogo>
            </Right>
            
            
      </NavbarContainer>
    );
}

export default Navbar
