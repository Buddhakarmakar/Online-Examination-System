import styled from "styled-components";
import { BsBookmark } from "react-icons/bs"
import { useState } from "react";
import { useEffect } from "react";
import CodeEditor from "./CodeEditor";


const MainContainer = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: calc(100vh - 140px);

`
const QuestionPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
   


`
const TopQuestionBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 10px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
`
const QuestionNo = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const ReportErrorButton = styled.button`
    background-color: #333;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px;
    margin-right: 15px;`
const MidQuestionBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const MidQuestionBarContent = styled.div`
    display: flex;
    juti-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`
const ShowQuestion = styled.div`
    display: flex;
    justify-content: flex-start;
    margin:20px;
    font-size: 16px;
    color: rgba(0,0,0,);
    flex-direction:column;


`
const ShowQuestionText = styled.p` 
    margin: 0px; 

`
const ShowQuestionImageDiv = styled.div`
    height: 200px;
    width: 200px;
    dispaly: flex;
    
`
const ShowQuestionImage = styled.img` 
    object-fit: scale-down; 
    height:100%;
    width:100%;
    &:hover{
        cursor: zoom-in;
        object-fit: fill;
    }
    
    
`
const MidPanelBorder = styled.div`
    height: 100%;
    width: 3px;
    background-color: rgba(0,0,0,0.3);
    cursor:e-resize
`
const OptionsPanelAndPreviousNext = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        flex: 1;
`
const OptionsPanel = styled.div`

    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 90%;

    
`
const Options = styled.div`
    width: 100%;
    height: auto;

    margin-bottom: 10px;
    display: flex;
    justify-content: space-arround;
    align-items: center;
    cursor: pointer;
    transition:.3s;
    background-color: ${props => props.isSelected ? "rgba(48,48,250,.9)" : "#f5f5f5"};
    color: ${props => props.isSelected ? "white" : "black"};
    font-weight: ${props => props.isSelected ? "bold" : "normal"};
    &:hover{
        background-color: #3f51b5;
        color: white;
    }
    

    `
const OptionText = styled.div`
    margin:10px;
    font-size: 15px;
    
`
// const OptionImage = styled.img`
//     height:100px;
//     width:100px;
//     object-fit:cover
// `
const PreviousNextPanel = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
     
        margin-bottom: 10px;
        border-top: 2px solid rgba(0,0,0,0.3);
`

const PreviousNextButton = styled.button`
    background-color: #3f51b5;
    margin-right: ${props => props.marginRight ? props.marginRight : "0px"};
    margin-left: ${props => props.marginLeft ? props.marginLeft : "0px"};
    border: none;
    border-radius: 1px;
    margin-top: 10px;
    padding: 5px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    width: 100px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: #333;
    }
    &:active{
        background-color: rgba(230,230,190,.9);
        color: #333;
    }
    display: ${props => props.display ? props.display : "inline-block"};
    
`

const StateContainer = styled.div`
        width: 220px;
        height: 450px;
        background-color:rgba(0,0,0,0.6);
        position:fixed;
        display:flex;
        justify-content:space-between;
        right:0;
        top:0;
        transition: 0.4s;
        flex-direction:column;
        transform: translateY(50%) translateX(${props => props.show ? "0%" : "99%"});
        &:before{
            content: "";
            position: absolute;
            top: 50%;
            left: -10px;
            width: 0; 
            height: 0; 
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right:10px solid rgba(20,220,20,1); 
            cursor: pointer;
        }
       

`
const StateContainerToggleButton = styled.div`

        position: absolute;
            top: 50%;
            left: -10px;
            width: 0; 
            height: 0; 
            border-top: 15px solid transparent;
            border-bottom: 15px solid transparent;
            border-right:10px solid red; 
            cursor: pointer;

`
const PaginateDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 1px;
    background-color: rgba(101,115,195,1);
    padding: 10px;
    align-items: center;
`
const PaginateButton = styled.button`
    background-color: ${props =>
        props.is_visited ?
            props.isAnswered ?
                props.isActive ?
                    "rgba(241,122,14,.9)" :
                    "rgba(121,129,247,1)" :
                "rgba(33,45,243,1)" :
            "black"};
    margin-top: 5px;
    border: none;
    margin-bottom: 5px;
    margin-left: 5px;
    cursor: pointer;
    color: white;
    padding: 5px;
`
const StateText = styled.div`
        margin-bottom: 20px;
 `
const ExamTypeViewDiv = styled.div`
        display: flex;
        justify-content: fex-start;
`
const ExamTypeViewText = styled.div`
        font-size: 13px;
        font-weight: bold;
        margin: 5px 10px;
        color: white;
        flex: 1;
`

const ClearPanel = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    `
const ClearButtonContainer = styled.div`
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-item:center;
`
const ClearButton = styled.button`
    background-color: transparent;
    border:1px solid rgba(0,0,0,0.3);
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    width: 70px;
    font-weight:bold;
    &:hover{
        background-color: rgba(0,0,0,0.6);
        color:white;
    }
    &:active{
        background-color: rgba(0,0,0,0.8);
        color:white;
    }

`
const CodingSection = styled.div`
    display: flex;
    flex-direction: column;
    `

const CodingAllHeader = styled.div`
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 5px;
// `
// const SampleInputOutputContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     margin-bottom: 10px;
//     margin-top: 20px;
//     border: 2px solid rgba(0,0,0,0.3);
// `
// const SampleInput = styled.div`
//     width: 40%;                       

//     border-right: 2px solid rgba(0,0,0,0.3);
//     display: flex;
//     flex-direction: column;
// `

// const SampleOutput = styled.div`
//     width: 60%;                       
//     display: flex;
//     flex-direction: column;


// `
// const SampleInputOutputText = styled.div`
//     padding: 10px;
//     font-size: 13px;
//     color:(0,0,0,0.1);
//     font-weight: bold;
//     border-bottom: 1px solid rgba(0,0,0,0.3);
// `
// const SampleInputOutputValue = styled.div`
//     font-size: 13px;
//     margin: 5px;
//     padding: 10px;
//     display: flex;
//     flex-direction: column;
//     height:auto;
//     margin-bottom: 10px;


// `
const SampleInputOutput = styled.div`
   width: 100%;
   background-color: rgba(0,0,0,0.3);
   height: 100%;
   display: flex;
   margin-top: 10px;

`
// const SampleInputOutputDiv = styled.div`
//     width: 100%;
//     border-bottom: 1px solid rgba(0,0,0,0.3);


// `

const SampleInputOutTable = styled.table`
    width: 100%;
    border:1px solid rgba(0,0,0,0.6);
    margin-top: 10px;
    


`
const Tr = styled.tr`
    border: 1px solid rgb(0,0,0);
`
const Th = styled.th`
    border: 1px solid rgb(0,0,0);
`
const Td = styled.td`
    border: 1px solid rgb(0,0,0);
    padding: 5px;
    
`
function ExamTabOutput({ currentTabData, CurrentTab, switchTab, TotalTab }) {
    const [stateShow, setStateShow] = useState(false);
    let [question, setQuestion] = useState(currentTabData);
    const totalQues = currentTabData.questions.length;
    let [totalQuestion, setTotalQuestion] = useState(totalQues);
    const [currentTab, setCurrentTab] = useState(CurrentTab);
    const [totalTab, setTotalTab] = useState(TotalTab);
    // console.log("totalQuestion",totalQuestion);
    const [visited, setVisited] = useState(1);
    const [answered, setAnswered] = useState(0)
    // const[currentTabQuestionState,setCu0rrentTabQuestionState] = useState(question);


    const countVisited = () => {
        // question.questions[currentQuestion].isVisited = true;

        let count = 0
        let ans = 0
        for (let i = 0; i < question.questions.length; i++) {
            if (question.questions[i].isVisited) {
                count++

                console.log("visited", visited);
            }
            if (question.questions[i].isAnswered) {
                ans++
            }
            setVisited(count);
            setAnswered(ans)
        }

    }


    const [currentQuestion, setCurrentQuestion] = useState(0);
    //mark Visited
    question.questions[currentQuestion].isVisited = true;
    // console.log("new question", question.questions[currentQuestion]);

    // console.log("currentQuestion",question.questions[currentQuestion]);
    const PreviousNextButtonClick = (e) => {
        // markVisited(currentQuestion);

        if (e.target.value === "next") {

            if (currentQuestion === totalQuestion - 1
                && currentTab < totalTab - 1) {

                switchTab(currentTab + 1);
            }
            else if (currentQuestion < totalQuestion - 1) {
                setCurrentQuestion(currentQuestion + 1);



            }


        }
        else if (e.target.value === "previous") {

            if (currentQuestion === 0
                && currentTab > 0) {
                switchTab(currentTab - 1);
                setCurrentQuestion(0);
            }
            else if (currentQuestion > 0) {
                // markVisited(currentQuestion)
                setCurrentQuestion(currentQuestion - 1);
            }
        }
    }
    useEffect(() => {
        setQuestion(currentTabData);
        setTotalQuestion(totalQues);
        setCurrentTab(CurrentTab);
        setTotalTab(TotalTab);
        setCurrentQuestion(0);
        // setCurrentTabQuestionState(question);




    }, [currentTabData, totalQues, CurrentTab, TotalTab,]);
    useEffect(() => {
        countVisited()
    }, [currentQuestion])
    // console.log("currenttab", currentTab);
    // console.log("currentQuestion", currentQuestion);
    // console.log("totalQuestion", totalQues);
    // console.log("totaalTab", totalTab);
    const questionsPerPage = 1;
    const pagesVisited = currentQuestion * questionsPerPage;
    const displayQuestions = question.questions
        .slice(pagesVisited, pagesVisited + questionsPerPage)
        .map(q => {
            return (
                <><QuestionPanel key={q.question_text}>
                    <TopQuestionBar>
                        <QuestionNo>
                            <BsBookmark />
                            <span style={{
                                marginLeft: "5px",
                                fontSize: "16px",
                                fontWeight: "bold"
                            }}>
                                <b>Q- </b>{currentQuestion + 1}
                            </span>
                        </QuestionNo>
                        <ReportErrorButton>Report Error</ReportErrorButton>
                    </TopQuestionBar>
                    <MidQuestionBar >
                        <MidQuestionBarContent>
                            {question.category !== "coding" ?
                                "Multiple Choice Question" :
                                "Coding Question"}

                        </MidQuestionBarContent>
                        <MidQuestionBarContent>
                            Marks : {q.marks ? q.marks : 1} Negative Mark :{q.negative_mark ? q.negative_mark : 0}
                        </MidQuestionBarContent>
                    </MidQuestionBar>

                    <ShowQuestion>
                        {question.category !== "coding" ?
                            <>
                                <div>

                                    {q.question_text ? q.question_text.map((text, index) => {
                                        return (
                                            <ShowQuestionText key={index}>
                                                {text}
                                                <br />
                                            </ShowQuestionText>
                                        )
                                    }) : ""}
                                </div>
                                <ShowQuestionImageDiv>
                                    {q.question_image ? q.question_image.map((image, index) => {
                                        return (
                                            <ShowQuestionImage key={index}
                                                src={image} alt="question" >
                                            </ShowQuestionImage>
                                        )
                                    }) : ""}
                                </ShowQuestionImageDiv>

                            </> :
                            <CodingSection>
                                <CodingAllHeader>
                                    Problem
                                </CodingAllHeader>
                                <ShowQuestionText>
                                    {q.question_text ? q.question_text : ""}
                                </ShowQuestionText>
                                <CodingAllHeader>
                                    Input
                                </CodingAllHeader>
                                <ShowQuestionText>
                                    {q.inputFormat ? q.inputFormat : ""}
                                </ShowQuestionText>
                                <CodingAllHeader>
                                    Output
                                </CodingAllHeader>
                                <ShowQuestionText> {q.outputFormat ? q.outputFormat : ""}</ShowQuestionText>
                                <CodingAllHeader>
                                    Constrains :
                                </CodingAllHeader>
                                <ShowQuestionText>
                                    {q.constraintText ?
                                        q.constraintText.split('\n').map((item, key) => {
                                            return <ShowQuestionText key={key}>{item}</ShowQuestionText>
                                        })
                                        : ""}
                                </ShowQuestionText>


                                <SampleInputOutTable>


                                    <Tr>
                                        <Th>
                                            Sample Input
                                        </Th>
                                        <Th>
                                            Sample Output
                                        </Th>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            {q.sampleInputOutput ?
                                                q.sampleInputOutput.map((i, k) => {
                                                    return (
                                                        <p>
                                                            {i.input.split("\n").map((item, key) => {
                                                                return (

                                                                    <SampleInputOutput key={key}>{item}</SampleInputOutput>


                                                                )
                                                            })
                                                            }
                                                        </p>

                                                    )

                                                })
                                                : ""}
                                        </Td>

                                        <Td>


                                            <p>
                                                {q.sampleInputOutput ?
                                                    q.sampleInputOutput.map((i, k) => {
                                                        return (
                                                            i.output.split("\n").map((item, key) => {
                                                                return <SampleInputOutput key={key}>{item}</SampleInputOutput>
                                                            })
                                                        )
                                                    })
                                                    : ""}
                                            </p>
                                        </Td>
                                    </Tr>
                                </SampleInputOutTable>
                                <CodingAllHeader>
                                    Explanations :
                                </CodingAllHeader>
                                <ShowQuestionText>
                                    {q.explanations ? q.explanations : ""}
                                </ShowQuestionText>

                            </CodingSection>


                        }
                        {/* <ShowQuestionImage src={ require("../../../assets/images/" +"abc.png")}/> */}
                    </ShowQuestion>
                </QuestionPanel><MidPanelBorder />
                    <OptionsPanelAndPreviousNext>
                        {question.category !== "coding" ? (
                            <OptionsPanel >
                                {q.options.map((o, index) => {

                                    return (
                                        <Options key={o.option_text}
                                            isSelected={o.isSelecetd}
                                            onClick={() => {
                                                let temp = question.questions.slice();
                                                question.questions[currentQuestion].isAnswered = true
                                                temp[currentQuestion].options.forEach(o => {
                                                    o.isSelecetd = false;
                                                });
                                                temp[currentQuestion].options[index].isSelecetd = true;
                                                countVisited()
                                                setQuestion({ ...question, questions: temp });

                                            }}
                                        >
                                            <OptionText>{o.option ? o.option : ""}</OptionText>
                                            {/* <OptionImage src={require("../../../assets/images/" +"abc.png")}></OptionImage> */}
                                        </Options>
                                    )

                                })}

                                <ClearPanel>
                                    <ClearButtonContainer>
                                        <ClearButton
                                            onClick={() => {
                                                question.questions[currentQuestion].isAnswered = false
                                                let temp = question.questions.slice();
                                                temp[currentQuestion].options.forEach(o => {
                                                    o.isSelecetd = false;
                                                });
                                                countVisited()
                                                setQuestion({ ...question, questions: temp });

                                            }}
                                        >
                                            Clear
                                        </ClearButton>
                                    </ClearButtonContainer>
                                </ClearPanel>
                            </OptionsPanel>
                        ) : (
                            <CodeEditor />
                        )
                        }
                        <PreviousNextPanel key={q.isAnswered}>

                            <PreviousNextButton
                                display={currentQuestion === 0
                                    && currentTab === 0 ? "none" : "inline-block"}
                                marginRight={"40px"}
                                value="previous"
                                onClick={(e) => PreviousNextButtonClick(e)}
                            >Previous
                            </PreviousNextButton>
                            {CurrentTab === TotalTab - 1 && currentQuestion === totalQues - 1 ?
                                <PreviousNextButton
                                    // display={currentQuestion === totalQuestion - 1 ? "none" : "inline-block"}
                                    value="submit"
                                    onClick={(e) => {


                                    }}
                                >Submit
                                </PreviousNextButton> :
                                <PreviousNextButton
                                    // display={currentQuestion === totalQuestion - 1 ? "none" : "inline-block"}
                                    value="next"
                                    onClick={(e) => {
                                        PreviousNextButtonClick(e)

                                    }}
                                >Next
                                </PreviousNextButton>
                            }

                        </PreviousNextPanel>
                    </OptionsPanelAndPreviousNext></>
            )
        });

    const SubmitOnclick = () => {

    }
    // const ImagePath="../../../assets/images/"
    return (
        <MainContainer>
            {displayQuestions}
            <StateContainer
                show={stateShow}

            >
                <StateContainerToggleButton
                    onClick={() => { setStateShow(!stateShow) }}>

                </StateContainerToggleButton>

                <PaginateDiv>
                    {question.questions.map((q, index) => {
                        return (
                            <PaginateButton
                                onClick={() => {
                                    setCurrentQuestion(index);
                                }}
                                key={index}
                                is_visited={q.isVisited}
                                isAnswered={q.isAnswered}
                                isActive={index === currentQuestion}
                            >
                                {index + 1}

                            </PaginateButton>
                        )

                    })}

                </PaginateDiv>

                <StateText>
                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Exam Type :
                        </ExamTypeViewText>
                        <ExamTypeViewText>
                            {question.category}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>

                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Total Question :
                        </ExamTypeViewText>
                        <ExamTypeViewText>
                            {totalQues}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>

                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Visited :
                        </ExamTypeViewText>
                        <ExamTypeViewText>
                            {visited}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>

                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Not Visited :
                        </ExamTypeViewText>
                        <ExamTypeViewText>
                            {totalQues - visited}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>
                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Answered :
                        </ExamTypeViewText>
                        <ExamTypeViewText>
                            {answered}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>
                    <ExamTypeViewDiv>
                        <ExamTypeViewText>
                            Not Answered:
                        </ExamTypeViewText>
                        <ExamTypeViewText style={{
                            color: "rgba(255,112,12,1)"
                        }}

                        >
                            {totalQues - answered}
                        </ExamTypeViewText>
                    </ExamTypeViewDiv>
                </StateText>
            </StateContainer>
        </MainContainer>
    );
}

export default ExamTabOutput;