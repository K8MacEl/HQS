import { Link } from 'react-router-dom';
import './InspectorProfilePage.css'
import tokenService from "../../utils/tokenService";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function InspectorProfilePage({user}){
    console.log(user,"<---this is user in the Insecptor profile page")

return (
    <>
    <Header></Header>
        <div className="yellow_top_page">
            <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
            <header className="title">
                <br />
                <h1 style={{
                    fontSize: "10vh"
                }}>INSPECTOR PROFILE</h1>
                <h2 style={{
                    fontsize: "10vh"
                }}></h2>
            </header>
            <section className="Inspector_Profile_Info">
                <form className="Profile_Container">
                    <div className="Inspector_User_Name_Title">
                        Name:
                    </div>
                    <div className="Inspector_User_Name_Input">
                        {user.username}
                    </div>
                    <div className="Inspector_User_Email_Title">
                        Email:
                    </div>
                    <div className="Inspector_User_Email_Input">
                        {user.email}
                    </div>
                    <div className="Inspector_User_Role_Title">
                        User Role:
                    </div>
                    <div className="Inspector_User_Role_Input">
                        {user.role}
                    </div>
                </form>
                <br></br>
            </section >
            <br></br>
        </div >
        <div className="New_Inspections_Nav">
            <div className="show_inspection_button">
                <Link to="/inspectionindex">
                    <button style={{
                        height: "8vh",
                        width: "50vh",
                        background: "rgb(255, 196, 56)",
                        color: "black",
                        margin: "10px",
                        borderRadius: "10px",
                        fontSize: "large"
                    }}>
                        VIEW INSPECTIONS
                    </button>
                </Link>
            </div>
        </div>
        <Footer></Footer>
    </>
)
}
