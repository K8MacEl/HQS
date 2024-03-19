import { Link } from 'react-router-dom';
import './InspectorProfilePage.css'

export default function InspectorProfilePage(){

return (
    <>
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
                        
                    </div>
                    <div className="Inspector_User_Email_Title">
                        Email:
                    </div>
                    <div className="Inspector_User_Email_Input">
                      
                    </div>
                    <div className="Inspector_User_Role_Title">
                        User Role:
                    </div>
                    <div className="Inspector_User_Role_Input">
                        
                    </div>
                </form>
                <br></br>
            </section >
            <nav className="buttons">
                <div className="edit_button">
                    <Link to="/login">
                        <button style={{
                            height: "8vh",
                            width: "15vh",
                            background: "black",
                            color: "white",
                            margin: "10px",
                            borderRadius: "10px"
                        }}>
                            EDIT PROFILE
                        </button>
                    </Link>
                </div>
                <div className="delete_button">
                    <Link to="/signup">
                        <button style={{
                            height: "8vh",
                            width: "15vh",
                            background: "black",
                            color: "white",
                            borderRadius: "10px"
                        }}>
                            DELETE PROFILE
                        </button>
                    </Link>
                </div>
            </nav>
        </div >
        <div className="New_Inspections_Nav">
            <div className="show_inspection_button">
                <Link to="/login">
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
    </>
)
}
