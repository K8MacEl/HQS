import { Header, Segment, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom"
import NewPropertyForm from "../../pages/NewPropertyForm/NewPropertyForm";
import "./Header.css"

export default function PageHeader( {loggedUser, handleLogout}){
    return (
       <>
       <div className="header_container">
            
            <Link to="/newproperty">NEW PROPERTY</Link>
            <Link to="/propertyindex">ALL PROPERTIES</Link>
            <Link to="/requestindex">INSPECTION REQUESTS</Link>
            <Link to="/inspectionindex">ALL INSPECTIONS</Link>
            <div>LOG-OUT NOT WORKING</div>
       </div>
      </>
    );
  }