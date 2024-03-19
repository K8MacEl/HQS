import { Link } from "react-router-dom";
import "./PHAProfilePage.css"
import React from 'react'


export default function PHAProfilePage() {
    return (
        <>
            <div className="yellow_top_page">
                <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
                <header className="title">
                    <br />
                    <h1 style={{
                        fontSize: "10vh"
                    }}>PHA PROFILE</h1>
                    <h2 style={{
                        fontsize: "10vh"
                    }}></h2>
                </header>
                <section className="PHA_Profile_Info">
                    <form className="Profile_Container">
                        <div className="PHA_User_Name_Title">
                            Name:
                        </div>
                        <div className="PHA_User_Name_Input">
                            USER NAME!
                        </div>
                        <div className="PHA_User_Email_Title">
                            Email:
                        </div>
                        <div className="PHA_User_Email_Input">
                            blah@mail.com
                        </div>
                        <div className="PHA_User_Role_Title">
                            User Role:
                        </div>
                        <div className="PHA_User_Role_Input">
                            PHA
                        </div>
                    </form>
            </section >

            <ul>TO DOS:

                <li>
                    role: PHA
                </li>
                <li>EDIT button</li>
                <li>DELETE BUTTON</li>
                <li>CREATE NEW PROPERTY BUTTON</li>
                <li>VIEW MY PROPERTIES BUTTON</li>

            </ul>
        </div >
        </>
    )
}
