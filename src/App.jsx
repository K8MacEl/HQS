import { Route, Routes, Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from 'react'
import "./App.css";

import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IndexPage from "./pages/IndexPage/IndexPage";
import PHAProfilePage from "./pages/PHAProfilePage/PHAProfilePage";
import InspectorProfilePage from "./pages/InspectorProfilePage/InspectorProfilePage";
import NewPropertyForm from "./pages/NewPropertyForm/NewPropertyForm";
import PropertyShowPage from "./pages/PropertyShowPage/PropertyShowPage";
//----Inpsection feature under construction for ICEBOX--------------/////
// import InspectionIndexPage from "./pages/InspectionIndexPage/InspectionIndexPage";
// import NewInspectionForm from "./pages/NewInspectionForm/NewInspectionForm";

import RequestIndex from "./pages/RequestIndex/RequestIndex";
// ANY component that is rendered by a route, should be stored in the 
// pages folder. Every page is like an app component
import userService from "./utils/userService";

import propertyService from "./utils/propertyService";
import PropertyIndexPage from "./pages/PropertyIndexPage/PropertyIndexPage";


function App() {
  // the userService.getUser() when the page loads it goes into localstorage and looks for a jwt
  // token, decodes and sets it in state
  const [user, setUser] = useState(userService.getUser())
  const [property, setProperty] = useState(propertyService.getProperty())
  const navigate = useNavigate()
  function handleSignUpOrLogin(){
    // we call this function after userService.login(), or userService.signup()
    // in order to get the token sent back from express and store the decoded token in the state
    setUser(userService.getUser())
    navigate(`/${user.role}`);//<---just added this here but no go
  }
  function logout() {
    console.log("logging out");
    userService.logout();
    setUser(null);
    navigate("/");//redirects to home page after logout
  }
if (!user) {
  return (
    <Routes>
         <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
  return (
    <Routes>
      <Route path="/" element={<IndexPage user={user} handleLogout={logout} />} />
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/inspector" element={<InspectorProfilePage user={user} handleLogout={logout}/> } />
      <Route path="/pha" element={<PHAProfilePage user={user} handleLogout={logout}/> } />
      <Route path="/newproperty" element={<NewPropertyForm setProperty={setProperty} handleLogout={logout} />} />
      <Route path="/propertyindex" element={<PropertyIndexPage handleLogout={logout} /> } />
      <Route path="/requestindex" element={<RequestIndex handleLogout={logout} /> } />
      {/* --------ICEBOXED-------- */}
      {/* <Route path="/inspectionindex" element={<InspectionIndexPage handleLogout={logout}/>} />
      <Route path="/newinspection" element={<NewInspectionForm handleLogout={logout}/>} /> */}
      <Route path="/:propertyId" element={<PropertyShowPage handleLogout={logout} />} />
    </Routes>
  );
}

export default App;
