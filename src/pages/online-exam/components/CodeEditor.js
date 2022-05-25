import styled from "styled-components";
import { FiSettings, FiSun } from "react-icons/fi";
import {useState    } from "react";
const MainContainer = styled.div`

    height: 100%;
    width: 100%;
    background-color: white;
    overflow-x: auto;
    

`
const Topbar = styled.div`
    height: 40px;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    
    align-items: center;
`
const TopBarLeft = styled.div`
        display: flex;
        justify-content: flex-start;
        width: 50%;
        margin-left: 10px;
`
const TopBarRight = styled.div`
        display: flex;
        justify-content: flex-end;
        width: 50%;
`
const TopBarItemDiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    margin-right: 20px;
    justify-content: space-around;
`
const TopBarItem = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    cursor: pointer;

`
const TopBarItemText = styled.div`
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
`
const SelectOption = styled.select`
    padding: 5px;
    width: 100px;

`
const Options = styled.option`
    padding: 5px;
    background-color: #f5f5f5;

`

const EditorContainer = styled.div`
        width: 100%;
        height: 70%;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        overflow-y: auto;
        overflow-x: auto;
`

const LineNoIndicator = styled.div`
    position: relative;
    height: clac(100%-10px);
    background-color: rgba(0,0,0,0.1);
    flex-direction: column;
    display: flex;
    align-items: center;
    width: 50px;
    padding-top: 10px;
    
`
const LineNoText = styled.div`
        color:white;
        font-size: 20px;
        color: rgba(250, 150, 50, 0.5);

`

const TextEditorArea = styled.textarea`
    width: 100%;
    height: 95%;
    background-color:transparent;
    overflow: auto;
    border: none;
    color: white;
    font-size: 20px;
    padding: 10px;
    resize: none;
    caret-color: white;
    
    
    line-height: 135%;
    font-family: 'Courier New', Courier, monospace;
    &:focus{
        outline: none;

    }
    

`
const CustomInputPanel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`
const CustomInputItemDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`
const CustomInputCheckBox = styled.input.attrs({ type: 'checkbox' })`
        margin-right: 10px;
       
`
const CustomInputItemText = styled.div`
        font-size: 15px;
        color: rgba(0, 0, 0, 0.5);
`
const CustomInput = styled.textarea`
    width: 100%;
    height:100px;
    
    font-size: 20px;
    padding: 10px;
    resize: none;
    color: rgba(0, 0, 0, 0.8);
    &:focus{
        outline: none;
    }
`
const ComplieSubmitPanel = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
    align-items: center;
`
const ComplieSubmitDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: none;
    
`
const ComplieSubmitButton = styled.button`
    height: 100%;
    background-color: ${props => props.color ? props.color : 'lightblue'};
    color:${props => props.color ? 'white' : 'black'};
    border: .2px solid black;
    padding: 5px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: ${props => props.color ? 'rgba(14,19,233,0.5)' : 'rgba(0,0,0,.5)'};
        color:white;
        font-weight: bold;

    }
    &:active{
        background-color: ${props => props.color ? 'rgba(14,19,233)' : 'black'};
        color:white;
        font-weight: bold;
    }
`
export default function CodeEditor() {
    const LineNoArray = []
    for (let i = 0; i < 10; i++) {
        LineNoArray.push(i)
    }
    const [customInputCheckBox,setCustomInputCheckBox] = useState(false)
    return (
        <MainContainer>
            <Topbar>
                <TopBarLeft>
                    <TopBarItemDiv>
                        <TopBarItemText>
                            Write You Code
                        </TopBarItemText>
                    </TopBarItemDiv>
                    
                </TopBarLeft>
                <TopBarRight>
                    <TopBarItemDiv>
                        <SelectOption >
                            <Options >Java </Options>
                            <Options>C++</Options>
                            <Options>Python</Options>
                            <Options>JavaScript</Options>
                            
                        </SelectOption>
                    </TopBarItemDiv>

                    <TopBarItemDiv>
                        <TopBarItem>
                            <FiSun />
                        </TopBarItem>
                    </TopBarItemDiv>

                    <TopBarItemDiv>
                        <TopBarItem>
                            <FiSettings />
                        </TopBarItem>
                    </TopBarItemDiv>
        </TopBarRight>
            </Topbar>

            <EditorContainer>
                <LineNoIndicator>
                    {LineNoArray.map((index) => {
                        return (
                            <LineNoText>{index}</LineNoText>
                        )
                    })}
                    
                </LineNoIndicator>
                <TextEditorArea >

                </TextEditorArea>
                
            </EditorContainer>
            <CustomInputPanel>
                <CustomInputItemDiv>
                    <CustomInputCheckBox
                    onChange={(e) => {
                                setCustomInputCheckBox(e.currentTarget.checked)
                        }}
                        checked={customInputCheckBox}/>
                    <CustomInputItemText
                        
                    >
                        Provide Custom Input
                    </CustomInputItemText>
                    
                </CustomInputItemDiv>
                {customInputCheckBox ? (
                    <CustomInputItemDiv>
                        <CustomInput></CustomInput>
                    </CustomInputItemDiv>)
                    : (null)
                }
                
            </CustomInputPanel>
            <ComplieSubmitPanel>
                <ComplieSubmitDiv>
                    <ComplieSubmitButton >
                        Clear
                    </ComplieSubmitButton>
                </ComplieSubmitDiv>
                 <ComplieSubmitDiv>
                    <ComplieSubmitButton >
                        Compile & Run
                    </ComplieSubmitButton>
                </ComplieSubmitDiv>
                 <ComplieSubmitDiv>
                    <ComplieSubmitButton color='green'>
                        Submit
                    </ComplieSubmitButton>
                </ComplieSubmitDiv>
            </ComplieSubmitPanel>

        </MainContainer>
        
        )
}
