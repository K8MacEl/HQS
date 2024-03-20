import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "../NewPropertyForm/NewPropertyForm.css";

import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
} from "semantic-ui-react";

export default function NewPropertyForm() {
    return (
        <>
        <div className="yellow_top_page">
            <img className="hqspec_logo" src="https://i.imgur.com/CKEt2Kqm.png" alt="" />
            <header className="title">
                <br />
                <h1 style={{
                    fontSize: "8vh"
                }}>NEW PROPERTY</h1>
                <h2 style={{
                    fontsize: "10vh"
                }}></h2>
            </header>
            <form> 
                <nav className="New_Property_Section">
                    <div className="New_Property_Container">
                        <div
                        className="Property_Address_Title">
                        Property Address:
                        </div>
                        <div
                        className="Property_Address_Input">
                        NEED INPUT FIELD HERE
                        </div>
                        <div
                        className="Voucher_Holder_Title">
                        Voucher Holder:
                        </div>
                        <div
                        className="Voucher_Holder_Input">
                        NEED INPUT FIELD HERE
                        </div>
                        <div
                        className="Tenant_Id_Title">
                        Tenant ID#:
                        </div>
                        <div
                        className="Tenant_Id_Input">
                        NEED INPUT FIELD HERE
                        </div>
                        <div
                        className="Property_Owner_Title">
                        Property Owner:
                        </div>
                        <div
                        className="Property_Owner_Input">
                        NEED INPUT FIELD HERE
                        </div>
                        <div
                        className="Family_Name_Title">
                        Name of Family:
                        </div>
                        <div
                        className="Family_Name_Input">
                        NEED INPUT FIELD HERE
                        </div>
                        <div
                        className="Census_Track_Title">
                        Neighborhood/Census Track:
                        </div>
                        <div
                        className="Census_Track_Input">
                        NEED INPUT FIELD HERE OR API
                        </div>
                    </div>
                 </nav> 
                 <br></br>      
                <div className="create_button">
                   
                            <button style={{
                                height: "8vh",
                                width: "15vh",
                                background: "white",
                                color: "black",
                                margin: "10px",
                                borderRadius: "10px"
                            }}>
                                CREATE
                            </button>
                     
                    </div>
            </form>
        </div>
        </>
    );
}

