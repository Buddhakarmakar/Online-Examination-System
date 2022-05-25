import React, { useRef } from 'react'
import { app } from '../firebase/Firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, resetPassword } from 'firebase/auth'

const FireBaseLogIn = () => {
    const [user, setUser] = React.useState(null)
    const email = useRef()
    const password = useRef()
    
    const auth = getAuth(app)
    console.log(auth)
    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential.user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });   
    }
  return (
      <div>FireBaseLogIn
          <h1>
              {user? user.username : "no user"}
          </h1>
          <hr />
          <center>
              <label >Email :
                  <input type="text" placeholder="email" ref={email} />
              </label>
              <br />
              <label>
                  Password
                  <input type="password" placeholder="password" ref={password} />
              </label>
              <br />
              <button onClick={SignUp}>SignUp</button>

          </center>

    </div>
  )
}

export default FireBaseLogIn