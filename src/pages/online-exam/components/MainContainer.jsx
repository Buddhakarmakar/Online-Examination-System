import TopBar from "./TopBar"
import {useState,useEffect} from "react"
import styled from "styled-components"
import ExamTabOutput from "./ExamTabOutput"
import { data } from "../data/data"
const ExamTab = styled.div`
        display: flex;
        width: 100%;
        height:40px;
      
        border-bottom: 2px solid #e5e5e5;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    `
const Tab=styled.div`
        display: flex;
        height: 40px;
        justify-content: space-around;
        align-items: center;   
        background-color: ${props => props.isActive ? "powderblue" : "#f5f5f5"};
        color: ${props => props.active ? "white" : "black"};
        width: 140px;
        margin-right: 10px;
        cursor:pointer;
        margin-bottom: 10px;
        transition:  0.2s;

        
`
const TabName = styled.div`
        font-size: 18px;


`
const TabQuestionsCount = styled.div`
        height: 25px;
        width:25px;
        border-radius: 50%;
        background-color: white;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        
`

const MainContainer = () => {

        const Tabs = []
        const TabQuestions = []
        
        let duration=0
        const exam_name="Infosys Exam"
        for (let i = 0; i < data.length; i++) {
                Tabs.push(data[i].category)
                TabQuestions.push(data[i].questions.length)
                // setTotalDuration(total_duration+data[i].duration)
                duration=duration+data[i].duration
        }
        
        console.log("Total Duration",duration)
        const [currentTab, setCurrentTab] = useState(0)
        const [currentTabData,setCurrentTabData]=useState(data[currentTab])
        // console.log(currentTab)
        const switchTab = (index) => {
                setCurrentTab(index)
                setCurrentTabData(data[index])
                console.warn("SwicthTab warning",index)
        }
        // console.log(currentTabData)
        useEffect(() => {
                
        }, [currentTab,currentTabData])
        
    return(
        <div>
                    <TopBar
                            examName={exam_name}
                            duration={duration}

                    />
                    <ExamTab>
                            {Tabs.map((tab, index) => {
                                    return (
                                            <Tab    key={index}
                                                    onClick={()=>switchTab(index)}
                                                    isActive={currentTab === index}
                                                >
                                                    <TabName>{tab}</TabName>
                                                    <TabQuestionsCount>{TabQuestions[index]}</TabQuestionsCount>
                                            </Tab>
                                    )
                            })}
                            
                    </ExamTab>

                    <ExamTabOutput currentTabData={currentTabData}
                            CurrentTab={currentTab}
                            switchTab={switchTab}
                            TotalTab={Tabs.length}
                        >

                    </ExamTabOutput>


            
        </div>)
}
 

export default MainContainer