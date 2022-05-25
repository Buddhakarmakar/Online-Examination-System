import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Topbar = styled.div `

    background-color: #f5f5f5;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
   
`;
const ExamName = styled.div `
    font-size: 20px;
    margin-left: 20px;
    color: #333;
   `
const Timer = styled.div `
  font-family: "Orbitron", sans-serif;
  color: #333;
  margin-right: 20px;
  font-size: 20px;
`;
const SubmitButton = styled.button `
    background-color: #c2641a;
    font-size: 14px;
    color: #fff;
    border: none;
    font-weight: bold;
    padding: 10px;
    margin-right: 20px;
    letter-spacing: 1px;
    cursor: pointer;
    &:hover{
        background-color: #c1341a;
    }
    &:active{
        background-color: #c1841a;
    }

`;
const AutoSubmit = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    height: 25px;
    width: 100%;
    color:rgba(0,0,0,0.8);
    margin-top: 10px;
    letter-spacing: .8px;
`
function TopBar({examName,duration}) {
  //  const ExamTime="01:00:00"
    const [time, setTime] = useState(0)
    const [timeLeft,setTimeLeft]=useState(duration)
    const TimerFunction = () => {
       // let timeArray = ExamTime.split(":")
        // let hour=timeArray[0]
        // let min = timeArray[1]
        
        // let sec = timeArray[2]
        let hour=~~(duration/60)
        let min = duration%60
        
        let sec = 0
        let interval = setInterval(() => {
            if(sec>0){
                sec--
            }
            else if(min>0){
                min--
                sec=59
            }
            else if(hour>0){
                hour--
                min=59
                sec=59
            }
            else {
                setTimeLeft(0)
                clearInterval(interval)
                console.log("time ses");
            }
            setTime(`${hour}:${min}:${sec}`)
        }, 1000)
        
    }
  
    const AutoSubmitFunction = () => {
        if (timeLeft === 0) {
            console.log("timeLeft",timeLeft);
            return null
        }
        return null
    }
    if (timeLeft === 0) {   
        AutoSubmitFunction()
    }
    useEffect(() => {
        TimerFunction()
        
    }, [timeLeft])
   
    return (
        <div>
        
            <Topbar>
                <ExamName > 
                    {examName}
                </ExamName>

                <Timer >
                    {time}
                </Timer>
                <SubmitButton>
                    Submit
                </SubmitButton>
            </Topbar >
            
            <AutoSubmit>
                <p>Exam will automatically Submitted after
                    <span>{" " +time}</span> Minutes
                </p>
            </AutoSubmit>

        </div>
    );
}

export default TopBar;