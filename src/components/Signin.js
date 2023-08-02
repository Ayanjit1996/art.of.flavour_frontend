import React, { useState } from "react";
import "../App.css";
import { NavLink, Routes } from "react-router-dom";
import Side_component from "./Auth_components";
import { Alertreq, Alert_response } from "./Alerts";

const Signin = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [Flag, setFlag] = useState("")

    const handleShowAlert = (res) => {
        setShowAlert(true);
        setFlag(res)
        setTimeout(() => {
            setShowAlert(false);
            setFlag("");
        }, 5000);
    };

    const [user, setUser] = useState({ ID: "", Password: "" });

    let name, value
    const handleInputs = (e) => {
        e.preventDefault();
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const PostDATA = async (e) => {
        e.preventDefault();
        const { ID, Password } = user;
        console.log(ID,Password)
        const res = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({ ID, Password }),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const result = await res.json();
        console.log(result);
        if (res.ok) {
            handleShowAlert("Success");
        }
        else {
            handleShowAlert("UnSuccess");
        }
    };

    return (
        <div className="base_image_auth">
            {Flag === "Success" && showAlert && <Alert_response flag={true} message={"Logged In"} />}
            {Flag === "UnSuccess" && showAlert && <Alert_response flag={false} message={"Incorrect credentials"} />}
            <div className="main_container">
                <Side_component />
                <section className="auth_section_container">
                    <div className="navbar_signin_or_signup">
                        <p className="Signup_Sigin_navigate_wrapper">
                            Not a member?{"    "}
                            <NavLink to="/signup" id="Signup_Sigin_navigate">
                                Signup now
                            </NavLink>
                        </p>
                    </div>
                    <main className="auth_data_section">
                        <div className="auth_content_signin">
                            <div className="inside_container_signin">
                                <h5 className="banner">Sign in to art.of.flavours</h5>
                                <br />
                                <div className="google_signin">
                                    {/* <div id="my-signin2"></div> */}
                                </div>
                                <br />
                                <hr className="divider" />
                                <div className="form_field">
                                    <form method="POST" onSubmit={PostDATA}>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">
                                                <h6>UserID or Email *</h6>
                                            </label>
                                            <input type="text" className="form-control input_design" id="UserID" aria-describedby="emailHelp" placeholder="Enter UserID or Email" name="ID" value={user.ID} onChange={handleInputs} required />
                                            <small id="emailHelp" className="form-text text-muted">
                                                We'll never share your email and userID with anyone else.
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">
                                                <h6>Password *</h6>
                                            </label>
                                            <input type="password" className="form-control input_design" id="Password" placeholder="Password" name="Password" value={user.Password} onChange={handleInputs} required />
                                        </div>
                                        <Alertreq />
                                        <div className="submit_btn_place">
                                            <button type="submit" className="btn btn-primary submit_button_signin">
                                                Signin
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    );
};

export default Signin;
