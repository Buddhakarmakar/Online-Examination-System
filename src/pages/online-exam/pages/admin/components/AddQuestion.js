import React from 'react'
import styled from 'styled-components'
// import { FiUploadCloud} from 'react-icons/fi'
import { FiDelete } from 'react-icons/fi'
import exam_data from './data'
const Container = styled.div`
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(450px, 50%));
  display: flex;
  flex-direction: column;
  background-color: white;
  
`
const Row = styled.div`
  display: flex;
  background-color: white;
 
  margin: 5px 5px;
  padding: 5px 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`
const ItemDiv = styled.div`
  display: flex;
   background-color: rgba(0,0,0,0.1);
  height:30px;
  width:100%;
  margin: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  text-size:14px
  
`

const ItemText = styled.div`

  font-size: 14px;
  font-weight: bold;
  color: rgba(0,0,0,0.5);
  margin-right: 10px;
`

const ItemInput = styled.input`

 
  border-radius: 5px;
  border:none;
  padding: 10px;
  width: 80%
  
`
const SelectItem = styled.select`
  width: 70%;
  height: 60%;
  border-radius: 5px;
  color:rgba(244,67,54,1);
  &:focus{
    outline:1px solid #00bcd4;
  }
`
const SelectOption = styled.option`
  color: #00bcd4;
  height: 500px;
`
const TextArea = styled.textarea`
  width: 80%;
  height: 80%;
  border-radius: 5px;
  resize: none;
  border:none;
  outline:none;
  padding: 10px;
`
const FileInput = styled.input`
  visibility: hidden;
  &:before {
  visibility: visible;
  content: 'Select some files';
  display: inline-block;
  background-color:rgba(33,150,243,1);
  color:rgba(244,230,123,.9);
  border: 1px solid #999;
  border-radius: 3px;
  padding:10px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
   }
`
const Image = styled.img`
  z-index: 2;

  height: 80px;
  width: 80px;
  object-fit: scale-down;
  margin: 10px;
  transition: all 0.3s ease-in-out;
  cursor: zoom-in;
  &:hover{
    height: 600px;
    width: 600px;
  }
`
const Button = styled.button`

`
const AddQuestion = () => {
  const [optionCount, setOptionCount] = React.useState(1)
  const array = []
  for (let i = 0; i < optionCount; i++) {
    array.push(i)
  }
  const [currentFile, setCurrentFile] = React.useState([])
  const [optionImage, setOptionImage] = React.useState([])

  const OnFileSelect = (e) => {

    for (let i = 0; i < e.target.files.length; i++) {
      setCurrentFile([...currentFile, e.target.files[i]])

    }
  }
  // const OnRemoveFile = (e) => {
  //   const index = currentFile.indexOf(e.target.value)
  //   currentFile.splice(index, 1)
  //   setCurrentFile([...currentFile])
  // }

  let Category = []
  const ExamArray = []
  exam_data.map((item, index) => {
    ExamArray.push(item.exam_name)
    Category.push(item.category)
  })
  const [examName, setExamName] = React.useState(0)
  // const [categoryArray, setCategoryArray] = React.useState(exam_data[examName])
  const optionChange = (e) => {
    setExamName(e.target.value)
    // setCategoryArray(exam_data[e.target.value])
    // console.log(exam_data[e.target.value].category)
    // console.log(categoryArray)
    Category = exam_data[e.target.value].category
    console.log(Category)
  }

  const addOptionImage = (e) => {
    // const currentValues = optionImage[i] || []; // get current values for the key, or use empty array
    // setOptionImage({ ...optionImage, [i]: [...currentValues, e.target.files[0]] })
     setOptionImage([...optionImage, e.target.files[0]])
 
  }
  console.log("abc",currentFile)
console.log("op",optionImage)
  React.useEffect(() => {

  }, [currentFile, examName,])


  return (
    <Container>
      <Row >
        <ItemDiv>
          <ItemText>
            Choose Exam :
          </ItemText>
          <SelectItem onChange={(e) => {
            optionChange(e)
          }}>
            <SelectOption
              value="">
              Select
            </SelectOption>
            {ExamArray.map((item, index) => {
              return (
                <SelectOption

                  value={index}
                  key={index}

                >
                  {item}
                </SelectOption>
              )
            })}

          </SelectItem>
        </ItemDiv>

        <ItemDiv>
          <ItemText>
            Choose Category :
          </ItemText>
          <SelectItem>
            <SelectOption
              value="">
              Select
            </SelectOption>
            {Category[examName].map((item, index) => {
              return (
                <SelectOption
                  value={item}
                  key={index}
                >
                  {item}
                </SelectOption>
              )
            })}

          </SelectItem>
        </ItemDiv>

        <ItemDiv>
          <ItemText>
            Choose Question Type :
          </ItemText>
          <SelectItem>
            <SelectOption value="mcq">Mutiple Choice Question</SelectOption>
            <SelectOption value="objective">Objective Type </SelectOption>
          </SelectItem>
        </ItemDiv>
      </Row>

      <Row>
        <ItemDiv>
          <ItemText>
            Marks :
          </ItemText>
          <ItemInput type="number"
            style={{ width: "60%" }}
            placeholder="Enter Marks"
            required
          />

        </ItemDiv>
        <ItemDiv>
          <ItemText style={{
            marginLeft: "10px"
          }}>
            Neg Marks :
          </ItemText>
          <ItemInput type="number"
            style={{ width: "60%" }}
            required
            placeholder="Enter Marks" />
        </ItemDiv>
        <ItemDiv>
          <ItemText style={{
            marginLeft: "10px"
          }}>
            Duration :
          </ItemText>
          <ItemInput type="number"
            required
            style={{
              width: "60%",
            }}
            placeholder="Duration in minutes" />
        </ItemDiv>

      </Row>

      <Row style={{

        justifyContent: "space-between",

      }}>
        <ItemDiv style={{
          height: "200px",
          justifyContent: "space-between",
          flex: "1"
        }}>

          <ItemText>
            Question :
          </ItemText>
          <TextArea type="text"
            style={{
              width: "80%",

            }}
            placeholder="Enter Question" />
        </ItemDiv>

        <div style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "transparent",
          alignItems: "center",
          margin: "0px 20px",
          flex: "1",
          justifyContent: "space-between"
        }}>
          <ItemDiv style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <ItemText>
              Question Image :
            </ItemText>
            <FileInput type="file"
              onChange={OnFileSelect}
              multiple={true}
            />

          </ItemDiv>

          <ItemDiv style={{
            height: "100px",
          }}>

            {currentFile && currentFile.map((x, i) => {
              return (
                
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "10px",
                }}
                  key={ i}>
                  <Image
                    src={URL.createObjectURL(x)} alt="" />
                  <Button style={{
                    marginBottom: "10px",
                    border: "none",
                    cursor: "pointer",
                  }}

                    onClick={() => {
                      const index = currentFile.indexOf(x)
                      currentFile.splice(index, 1)
                      setCurrentFile([...currentFile])

                    }}>
                    <FiDelete size={20} color={"red"} />
                  </Button>
                </div>
              )
            })}





          </ItemDiv>
        </div>
      </Row>

      <Row style={{
        alignItems: "center"

      }}>
        <ItemDiv style={{
          height: "auto",
          justifyContent: "space-between",
        }}>
          <ItemText>
            Question Description :
          </ItemText>
          <TextArea type="text"
            required
            style={{
              width: "70%",
              padding: "10px"
            }}
            placeholder="Enter Description" />

        </ItemDiv>
        <ItemDiv style={{
          width: "20%",
          backgroundColor: "transparent",
          paddingRight: "0px",
        }}>
          <ItemInput type="button"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              cursor: "pointer",
              width: "100%",
            }}
            value="Add Option"
            onClick={() => {
              console.log("Add Question")
              setOptionCount(optionCount + 1)
            }} />
        </ItemDiv>



      </Row>
      <Row style={{

        justifyContent: "space-between",
        flexDirection: "column",

      }}>
        {array.map((x, i) => {
          return (
            <div style={{
              display: "flex",
              borderBottom: "1px solid #ccc",
            }}
              key={x}
            >

              <ItemDiv style={{
                height: "200px",
                width: "50%",
                justifyContent: "space-between",
              }}>

                <ItemText>
                  Option {i + 1} :
                </ItemText>
                <TextArea type="text"
                  style={{
                    width: "80%",

                  }}
                  placeholder="Enter Option" />

              </ItemDiv>


              <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
                alignItems: "center",
                margin: "0px 20px",
                width: "30%",
                justifyContent: "space-between"
              }}>

                <ItemDiv style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>

                  <ItemText>
                    Option Image :

                  </ItemText>

                  <FileInput type="file"
                    onChange={(e) => {
                        addOptionImage(e)
                    }} />


                </ItemDiv>


                <ItemDiv style={{
                  height: "100px",

                }}>

                  {optionImage && optionImage.map((item, index) => {
                    return (
                      index === i &&
                        
                      <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "10px",
                      }}
                        key={index}
                      >
                       
                        <Image src={URL.createObjectURL(item)} alt="" />
                        
                          <Button
                            onClick={() => {
                              const index = optionImage.indexOf(item)
                              optionImage.splice(index, 1)
                              setOptionImage([...optionImage])
                            }}
                            
                            style={{
                          marginBottom: "10px",
                          border: "none",
                          cursor: "pointer",
                        }}>
                          <FiDelete size={20} color={"red"} />
                        </Button>
                      </div>
                    ) 
                  })}





                </ItemDiv>

              </div>

              <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
                alignItems: "center",
                margin: "0px 20px",
                width: "30%",
                justifyContent: "space-between"

              }}>

                <ItemDiv style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  <ItemText>
                    Correct Answer :
                  </ItemText>
                  <ItemInput type="checkbox" />

                </ItemDiv>

                <div style={{
                  alignContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "100px",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  padding: "10px",
                  width: "100%",
                }}>
                  <ItemText>
                    Option Description :
                  </ItemText>


                  <TextArea type="text"
                    style={{
                      width: "80%",
                      padding: "10px"
                    }}
                    placeholder="Enter Description" />


                </div>
                <ItemInput type="button"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  value="Delete Option"
                  onClick={() => {
                    console.log("remove options")
                    setOptionCount(optionCount - 1)
                  }} >


                </ItemInput>

              </div>
            </div>
          )
        })}
      </Row>

      <Row >
        <Button style={{
          width: "100%",
          backgroundColor: "rgba(33,45,243,1)",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}>
          Add Question
        </Button>

      </Row>



    </Container>
  )
}

export default AddQuestion