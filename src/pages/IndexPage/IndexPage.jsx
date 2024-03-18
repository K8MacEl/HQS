
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../SignupPage/SignupPage";
import { Link } from "react-router-dom";
import "./IndexPage.css";

export default function IndexPage() {
    return (
        <>
            <div className="yellow_top_page" >
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br></br>
                    <h1>HQS Inspection Tool</h1>
                    <h3>Designed to Assist with HUD's Inspection Form for the Housing Choice Voucher Program</h3>
                    <br></br>
                </header>
                <nav>
                    <Link to="/login" className="login_button" >
                        <button style={{height: "8vh", width: "15vh", background: "white", margin: "10px", borderRadius: "10px"}}> LOGIN </button>
                    </Link>
                    <Link to="/signup" className="signup_button">
                        <button style={{height: "8vh", width: "15vh", background: "white", borderRadius: "10px"}}>SIGN UP</button>
                    </Link>
                </nav>
            </div>
        </>
    )
}

import React from 'react'




