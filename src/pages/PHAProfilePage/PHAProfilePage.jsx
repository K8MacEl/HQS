
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import "./PHAProfilePage.css"
import tokenService from "../../utils/tokenService";
import NewPropertyForm from "../NewPropertyForm/NewPropertyForm";



export default function PHAProfilePage({user}) {

    console.log(user, "<--this is user in PHA profile page")

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
                            {user.username}
                        </div>
                        <div className="PHA_User_Email_Title">
                            Email:
                        </div>
                        <div className="PHA_User_Email_Input">
                            {user.email}
                        </div>
                        <div className="PHA_User_Role_Title">
                            User Role:
                        </div>
                        <div className="PHA_User_Role_Input">
                            {user.role}
                        </div>
                    </form>
                </section >
                <nav className="buttons">
                    <div className="delete_button">
                        <Link to="/signup">
                            <button style={{
                                height: "8vh",
                                width: "25vh",
                                background: "black",
                                color: "white",
                                borderRadius: "10px"
                            }}>
                                DELETE PROFILE NOT FUNCTIONAL YET!
                            </button>
                        </Link>
                    </div>
                </nav>
            </div >
            <div className="PHA_Property_Nav">
                <div className="new_property_button">
                    <Link to="/newproperty">
                        <button style={{
                            height: "8vh",
                            width: "50vh",
                            background: "rgb(255, 196, 56)",
                            color: "black",
                            margin: "10px",
                            borderRadius: "10px",
                            fontSize: "large"
                        }}>
                            CREATE NEW PROPERTY BUTTON
                        </button>
                    </Link>
                </div>
                <div className="show_properties_button">
                        <h2 style={{
                            height: "8vh",
                            width: "50vh",
                            background: "rgb(255, 196, 56)",
                            color: "black",
                            margin: "10px",
                            borderRadius: "10px",
                            fontSize: "large"
                        }}>MY PROPERTIES SHOW BELOW</h2>                 
                </div>
            </div>
        </>
    )
}
