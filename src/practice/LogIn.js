import styled from 'styled-components';
import { useRef, useState } from 'react';
import axios from 'axios'
const Container = styled.div`
  display: flex;
  transition: all 0.5s ease-in-out;
  width:100vw;
  height:100vh;
`
const Left = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
`
const Right = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`
const RightTop = styled.div`
      display: flex;
      width: 100%;
      height: 30%;
`
const RightMiddle = styled.div`
      display: flex;
      width: 100%;
      height: 30%;
      flex-direction: column;
      margin-right:30px
`
const InputTextDIv = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin:10px

`
const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border:none;
  border-bottom: 1px solid rgba(230,230,120,.9);
  outline: none;
  box-shadow: 0px 1px  #ccc;
  &:focus{
    
    background-color: black;
    color:white
  }
`
const LogInButton = styled.button`
  width: 80%;
  padding: 10px;
  font-size: 1.1rem;
  border: none;
  background-color:rgba(33,150,243,1) ;
  cursor: pointer;
  color: white;
  &:hover{
    background-color:rgba(33,45,243,1) ;
  }
  &:active{
      background-color:rgba(33,45,243,.7) ;
  }

`
const LogIn = () => {
  const email = useRef()
  const password = useRef()
  // const registerEmail=user
  // const [registerPassword, setRegisterPassword] = useState('')
  const confirmPassword = useRef()
  const [emailError, setEmailError] = useState("Email is required")
  const [passwordError, setPasswordError] = useState('Password is required')
  const [comfirmPasswordError, setConfirmPasswordError] = useState('Password is required')
  const setError = () => {
    if (email.current.value.trim() === '') {
      setEmailError('Email is required')
    } else if (!email.current.value.includes("@")) {
      setEmailError('Email is not valid')
    }
    else {
      setEmailError('')
    }
    if (password.current.value.trim() === '') {
      setPasswordError('Password is required')
    } else if (password.current.value.length < 6) {
      setPasswordError('Password must be atleast 6 characters')
    }
    
    else {
      setPasswordError('')
    }
    if (currentPage === "Register") {
      if (password.current.value !== confirmPassword.current.value) {
        setConfirmPasswordError('Password does not match')
      } else {
        setConfirmPasswordError('')
      }
    }
      

  }
  const LogInUser = () => {
    
    if (emailError === '' && passwordError === '') {
      axios.post('http://localhost:8000/api/user/login', {
        email: email.current.value,
        password: password.current.value
      })
        .then(res => {
          localStorage.setItem('token', res.data.user.token)
          // window.location.href = '/'
          console.log(res.data)
        })
        .catch(err => {
          // console.log(err)
          const status_code = err.response.status
          if (status_code === 401) {
            setPasswordError(err.response.data.message)
          } else {
            setEmailError(err.response.data.message)
          }

        })
      
        
    }
  }

  const registerUser = () => {
    if (emailError === '' && passwordError === '' && comfirmPasswordError === '') {
      axios.post('http://localhost:8000/api/user/register', {
        email: email.current.value,
        password: password.current.value
      })
        .then(res => {
          localStorage.setItem('token', res.data.user.token)
          // window.location.href = '/'
          console.log(res.data)
        })
        .catch(err => {
           console.log(err.response.data.message)
          const status_code = err.response.status
          if (status_code === 500) {
            setEmailError(err.response.data.message)
            confirmPassword.current.value = ''
            password.current.value = ''
          }

        })
    }
  }
  const [currentPage, setCurrentPage] = useState('LogIn')
  return (
    <Container>
      <Left>
        Left

      </Left>
      {currentPage === 'LogIn' ? (
        <Right>
          <RightTop style={{
            display: 'flex',
            
          }}>
            <h1
              style={{
                marginLeft: "10px"
              }}
            >
              Log IN
          </h1>
          </RightTop>
          <RightMiddle>
            <form>
              <div >
                <InputTextDIv htmlFor="Email">Email</InputTextDIv>
                <Input type="email"
                  id="Email"
                  placeholder="Email"
                  ref={email}
                  onChange={setError}
                />
                <div style={{
                  color: 'red',
                  marginLeft: "10px"
                }}>{emailError}</div>

              </div>
              <div >
                <InputTextDIv htmlFor="Password">Password</InputTextDIv>

                <Input type="password"
                  style={{
                    width: "90%",
                  }}
                  id="Password"
                  placeholder="Password"
                  ref={password}
                  onChange={setError}
                />


                <div style={{
                  color: 'red',
                  marginLeft: "10px"
                }}>{passwordError}</div>


                <div style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  display: 'flex',
                  margin: '10px'
                }}>
                  Not A member
                  <div
                    style={{
                      marginLeft: "10px",
                      cursor: 'pointer'

                    }}
                    onClick={() => {setCurrentPage("Register")}}
                  >Register Now </div>
                </div>
              </div>
              <div style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}>
                <LogInButton type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    LogInUser()
                  }}

                >Log In</LogInButton>
              </div>
            </form>
          </RightMiddle>

        </Right>

      ) : (
          <Right>
            <RightTop>
            <h1>Register </h1>
            </RightTop>
            <RightMiddle>
              <form>
                <div >
                  <InputTextDIv htmlFor="Email">Email</InputTextDIv>
                  <Input type="email"
                    id="Email"
                    placeholder="Email"
                    ref={email}
                    onChange={setError}
                  />
                  <div style={{
                    color: 'red',
                    marginLeft: "10px"
                  }}>{emailError}</div>

                </div>
                <div >
                  <InputTextDIv htmlFor="Password">Password</InputTextDIv>

                  <Input type="password"
                    style={{
                      width: "90%",
                    }}
                    id="Password"
                    placeholder="Password"
                    ref={password}
                    onChange={setError}
                  />


                  <div style={{
                    color: 'red',
                    marginLeft: "10px"
                  }}>{passwordError}</div>

                  <InputTextDIv htmlFor="Password">Confirm Password</InputTextDIv>

                  <Input type="password"
                    style={{
                      width: "90%",
                    }}
                    id="Password"
                    placeholder="Password"
                    ref={confirmPassword}
                    onChange={setError}
                  />


                  <div style={{
                    color: 'red',
                    marginLeft: "10px"
                  }}>{comfirmPasswordError}</div>


                  <div style={{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    margin: '10px'
                  }}>
                    Already A member
                    <div
                      style={{
                        marginLeft: "10px",
                        cursor: 'pointer',
                        color:"blue"
                      }}
                      onClick={() => {setCurrentPage("LogIn")}}
                    >Sign In Now </div>
                  </div>
                </div>
                <div style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                  <LogInButton type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      // LogInUser()
                      registerUser()
                    }}

                  >Register Now</LogInButton>
                </div>
              </form>
            </RightMiddle>

          </Right>
      )}
    </Container>
  )
}

export default LogIn