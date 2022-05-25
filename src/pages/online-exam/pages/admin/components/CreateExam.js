import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    background: #f5f5f5;
    border:1px solid rgba(20,25,20,0.1);
    height:90%;
    display:flex;
    flex-direction:column;
    


`
const ItemDiv = styled.div`
    display:flex;
    align-items:center;
   
    width:100%;
    height:70px;
   
`
const ItemText = styled.div`
    display:flex;
    flex:2;
    justify-content:center;
    font-size:20px;

`
const ItemInput = styled.input`
    display:flex;
    flex:3;
    justify-content:flex-start;
    padding:20px 20px;
    border:none;
    border-radius:5px;
    box-shadow:0px 0px 5px rgba(0,0,0,0.5);
    outline:none;
    &:focus{
        border:2px solid rgba(120,23,134);
        
    }

`
const Extra = styled.div`
    display:flex;
    flex:1;

`
const RequiredText = styled.div`
    color:red;
    font-size:20px;
    margin-left:10px;
    `
const AddCategoryBtn = styled.button`
    background:linear-gradient(to right,rgba(123,12,34),#00b3ff);
    color:white;
    padding:12px 20px;
    border-radius:10px;
    width:90%;
    
    border:none;
    outline:none;
    cursor:pointer;
    margin-left:10px;
    &:hover{
        background:linear-gradient(to right,rgba(13,120,34),#01b7ff);
    }
    &:active{
        background:linear-gradient(to right,rgba(183,120,134),#01b7ff);
    }

`

const CreateExam = () => {
  return (
      <Container>
          <ItemDiv>
              <Extra />
              <ItemText> Exam Name : 
                  <RequiredText>*</RequiredText>
              </ItemText>
              <ItemInput type="text" placeholder="Exam Name" />
              <Extra/>
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText> Exam Time : </ItemText>
              <ItemInput type="time" placeholder="Exam Name" />
              <Extra />
          </ItemDiv>
          
          <ItemDiv>
              <Extra />
              <ItemText> Exam Date : </ItemText>
              <ItemInput type="date" placeholder="Exam Name" />
              <Extra />
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText> Exam Duration : </ItemText>
              <ItemInput type="number" placeholder="Enter exam duration in Minutes" />
              <Extra />
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText>Total Question : </ItemText>
              <ItemInput type="number" placeholder="Enter Total Questions" />
              <Extra />
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText>Categories : </ItemText>
              <div style={{
                  display: "flex",
                  flex: 3,
              }}>
                  <div style={{
                      background: "linear-gradient(to right,rgba(123,12,34),#00b3ff)",
                      color: "white",
                      padding: "10px",
                      borderRadius: "10px",
                      position: "relative",
                  }}>
                      Verbal
                      <div
                          style={{
                              position: "absolute",
                              top: "-8px",
                              right: "5px",
                              cursor: "pointer",
                              color: "red",
                              fontSize: "20px",
                              fontWeight: "bold",
                          }}
                      >x</div>
                  </div>
              </div>
              <Extra />
              
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText>Category: </ItemText>
              <ItemInput type="text"
                  placeholder="Enter Category"
                  style={{
                      flex:"2"
                  }}
              />

              <div style={{ 
                  display: "flex",
                    flex: 1,
              }}>
                  <AddCategoryBtn>
                      Add Category
                  </AddCategoryBtn>
                  
              </div>
              <Extra />
              
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText>Total Marks : </ItemText>
              <ItemInput type="number" placeholder="Enter Total marks" />
              <Extra />
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText> Exam Description : </ItemText>
              <ItemInput type="text" placeholder="Exam Description" />
              <Extra />
              
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText> Exam Image : </ItemText>
              <ItemInput type="file" placeholder="Exam Image" />
              <Extra />
              
          </ItemDiv>
             
          <ItemDiv
              style={{
                  width: "100%",
                  height: "1px",
                  marginTop: "20px",
                  backgroundColor: "rgba(120,23,134,0.5)",
                  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                  
              }}            
              >

              
          </ItemDiv>
          <ItemDiv>
              <Extra />
              <ItemText></ItemText>
              
              <AddCategoryBtn
                  style={{
                      width: "30%",
                      background:"linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
              }}>
                  Add Exam
              </AddCategoryBtn>
              <Extra />
          </ItemDiv>
          
      </Container>
      
  )
}

export default CreateExam