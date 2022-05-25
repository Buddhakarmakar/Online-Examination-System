import React from 'react'
import styled from 'styled-components'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
// import CreateExam from './CreateExam';
import exam_data from './data';
import EditExam from './EditExam';
const Container = styled.div`

    display:grid;
    gap:2rem;
    grid-template-columns:repeat(auto-fit,minmax(350px,450px));
    
`
const ItemDiv = styled.div`
    margin:20px;
    background-color:rgba(229,239,255,1);
    border-radius:10px;
    padding:20px;
    
    display:flex;
    box-shadow:0px 0px 8px rgba(0,0,0,0.8);
    flex-direction:column;
    &:hover{
     
        transform:rotate(-2deg);
       
    }
`
const ItemTextDiv = styled.div`
    display:flex;
    align-items: center;
    padding:10px;
    border-bottom:1px solid rgba(20,25,20,0.1);


`
const ItemText=styled.div`
   color:${props=>props.color?'#00bcd4':'#000'};
   font-weight:bold;
   display:flex;
   flex:1;
   font-size:18px

`
const Button = styled.button`
    display:flex;
    flex:1;
    justify-content:center;
    padding:8px;
    border-radius:5px;
    border:1px solid #00bcd4;
    color:rgba(255,87,34,0.5);
    cursor:pointer;
    &:hover{
        background-color:white;
    }
    &:active{
        background-color:rgba(230,230,240,0.6);
    }
`

const ShowAllExam = () => {
    const [editExam, setEditExam] = React.useState(false);
    const [currentExam, setCurrentExam] = React.useState(null);
  return (
      <div>
          {editExam ? <EditExam data={ currentExam}/> :
              <Container>
                  {exam_data.map((item, index) => {
                      return(
                      <ItemDiv key={index}>
                          <ItemTextDiv>
                              <img style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "scale-down"
                              }}
                                  src={item.exam_image?item.exam_image:""} alt="" />
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Exam Name:
                              </ItemText>
                              <ItemText color={"true"}>
                                  {item.exam_name}
                              </ItemText>
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Exam Date:
                              </ItemText>
                              <ItemText color={"true"}>
                                 {item.exam_date}
                              </ItemText>
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Exam Duration:
                              </ItemText>
                              <ItemText color={"true"}>
                                  {item.duration} Minutes
                              </ItemText>
                  
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Exam Time :
                              </ItemText>
                              <ItemText color={"true"}>
                                 {item.exam_time?item.exam_time:"Not Specified"}
                              </ItemText>
                  
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Total Questions:
                              </ItemText>
                              <ItemText color={"true"}>
                                 {item.total_questions}
                              </ItemText>
                          </ItemTextDiv>
                          <ItemTextDiv>
                              <ItemText>
                                  Categories:
                              </ItemText>
                              <ItemText color={"true"}>
                                      {item.category.join(",")}
                                
                              </ItemText>
                          </ItemTextDiv>
              
                          <ItemTextDiv>
                              <ItemText>
                                  Exam Description:
                              </ItemText>
                              <ItemText color={"true"}>
                                      {item.exam_description}
                              </ItemText>
                          </ItemTextDiv>
              
                          <ItemTextDiv style={{
                              borderBottom: "none"
                          }}>
                              <Button onClick={() => {
                                  alert("Edit")
                                      return (
                                      setCurrentExam(item),
                                      setEditExam(true)
                                  )
                              }}>
                                  <FiEdit size={20} />
                              </Button>
                              <Button style={{
                                  marginLeft: "10px",
                                  color: "red",
                                  borderColor: "red"
                              }}>
                                  <AiOutlineDelete size={20} />
                              </Button>
                              <Button style={{
                                  marginLeft: "10px",
                                  color: "rgba(63,81,181,1)",
                                  borderColor: "rgba(63,81,181,1)"
                        
                              }}>
                                  <FaShareAlt size={20} />
                              </Button>
                          </ItemTextDiv>
                  
                      </ItemDiv>
       

                      )
                  })}

        
        
              </Container>
          }
      </div>

  )
}

export default ShowAllExam