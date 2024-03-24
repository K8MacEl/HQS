
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignupPage/SignupPage";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import { Header, Segment, Image, Icon } from "semantic-ui-react"
import "./IndexPage.css";

export default function IndexPage() {
    return (
        <>
            <div className="yellow_top_page">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "10vh"
                    }}>HQS Inspection Tool</h1>
                    <h2 style={{
                        fontsize: "10vh"
                    }}>Designed to Assist with HUD's Inspection Form for the Housing Choice Voucher Program</h2>
                    <br />
                </header>
                <nav className="buttons">
                    <div className="login_button">
                        <Link to="/login">
                            <button style={{ 
                                height: "8vh", 
                                width: "15vh", 
                                background: "white",
                                margin: "10px", 
                                borderRadius: "10px" }}> 
                                LOGIN 
                            </button>
                        </Link>
                    </div>
                    <div className="signup_button">
                        <Link to="/signup">
                            <button style={{ 
                                height: "8vh", 
                                width: "15vh", 
                                background: "white", 
                                borderRadius: "10px" }}>
                                SIGN UP
                            </button>
                        </Link>
                    </div>
                </nav>
                <div className="section-container">
                    <div className="section">
                        <p className="textblock_one">HQS Inspectors Create a Profile that will track all of their inspections.</p>
                    </div>
                    <div className="section">
                        <p className="textblock_two">HQSpec guides inspectors through the Inspection form.</p>
                    </div>
                    <div className="section">
                        <p className="textblock_three">HQSpec populates the HUD Inspection Form PDF for the inspector to submit.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
