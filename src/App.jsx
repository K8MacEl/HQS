import { Route, Routes, Link } from "react-router-dom";
import { useState } from 'react'
import "./App.css";

import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IndexPage from "./pages/IndexPage/IndexPage";
import PHAProfilePage from "./pages/PHAProfilePage/PHAProfilePage";
import InspectorProfilePage from "./pages/InspectorProfilePage/InspectorProfilePage";
import NewPropertyForm from "./pages/NewPropertyForm/NewPropertyForm";

// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";
import { useNavigate } from 'react-router-dom'

function App() {
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())
  const navigate = useNavigate()
  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
    navigate(`/${user.role}`);//<---just added this here but no go
  }
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/inspector" element={<InspectorProfilePage /> } />
      <Route path="/pha" element={<PHAProfilePage/>  } />
      <Route path="/newproperty" element={<NewPropertyForm />} />
    </Routes>
  );
}

export default App;
