import { useState } from 'react';
import axios from 'axios';
//  import Navbar from './components/Navbar';
//  import NavbarDynamic from './components/FlipcartNavbar';
// import {app,db} from "./firebase/Firebase"
// import ImageUpload from './practice/ImageUpload';
import MainContainer from './pages/online-exam/components/MainContainer';
// //import CodeEditor from "./pages/online-exam/components/CodeEditor";

// import Navbar from "./pages/online-exam/components/navbar/Navbar";
// import HomePage from "./pages/online-exam/pages/HackerRank";
// import FilterAndSortElement from './practice/FilterAndSortElement';
// import FireBaseLogIn from './practice/FireBaseLogIn';
// import LogIn from './practice/LogIn';
// import AddQuestion from './practice/AddQuestion';
// import AdminDashboard from C: 
import AdminDashoard from "./pages/online-exam/pages/admin/pages/AdminDashoard";
import ExamTabOutput from './pages/online-exam/components/ExamTabOutput';


function App() {
  // const [user, setUser] = useState(null);
  // const token = ""//localStorage.getItem('token');
  // // console.log("token",token)
  // if (token && !user) {
  //   axios.post('http://localhost:8000/api/user/',{}, {
  //     headers: {
  //       token:token
  //     }
  //   })
  //     .then(res => {
  //       setUser(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //       //"Error")
  //     })
        
  // }

  return (
    <div>
      {/* <AdminDashoard/> */}
      <MainContainer/>
    </div>
  );
}

export default App;
