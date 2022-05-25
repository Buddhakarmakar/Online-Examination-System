import React from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import CreateExam from './CreateExam'
import ShowAllExam from './ShowAllExam'
import AddQuestion from './AddQuestion'
const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  background-color:rgba(20,25,20,0.1);
  height:calc(100vh - 60px);
  overflow-y:auto;
 
`
const CurrentTabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
  background-color:rgba(204,245,202,0.1);
  border-bottom: 1px solid rgba(20,25,20,0.1);
`
const CurrentTabText = styled.div`

  display: flex;
  margin:10px 30px
`
const AdminMainContainer = ({currentTab}) => {
  return (
    <Container>

      {currentTab === "dashboard" ?
        <CurrentTabContainer>
          <CurrentTabText>
            Dashboard
          </CurrentTabText>
        </CurrentTabContainer> :
        null}
      {currentTab === "create-exam" ?
        <CurrentTabContainer>
          <CurrentTabText>
            Create Exam
          </CurrentTabText>
        </CurrentTabContainer> :
        null}
      {currentTab === "show-all-exam" ?
        <CurrentTabContainer>
          <CurrentTabText>
            Show All Exam
          </CurrentTabText>
        </CurrentTabContainer> :
        null}
      {currentTab === "add-question" ?
        <CurrentTabContainer>
          <CurrentTabText>
            Add Questions
          </CurrentTabText>
        </CurrentTabContainer> :
        null}
      {currentTab === "dashboard" ?
        <Dashboard /> : null}
      {currentTab === "create-exam" ?
        <CreateExam /> : null}
      {currentTab === "show-all-exam" ?
        <ShowAllExam /> : null}
      {currentTab === "add-question" ?
        <AddQuestion /> : null}
    </Container>
  )
}

export default AdminMainContainer