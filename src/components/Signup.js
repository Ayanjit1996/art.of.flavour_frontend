import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import Side_component from "./Auth_components";
import { Alertreq, Alert_response } from "./Alerts";

const Signup = () => {

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

    const [user, setUser] = useState({ Name: "", Phone: "", Age: "", Gender: "", Email: "", UserID: "", Password: "", CPassword: "" });

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
        const { Name, Phone, Age, Gender, Email, UserID, Password, CPassword } = user;
        if (user.Phone === "")
            user.Phone = "NA"
        const res = await fetch("/register", {
            method: "POST",
            body: JSON.stringify({ Name, Phone, Age, Gender, Email, UserID, Password, CPassword }),
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
            {Flag === "Success" && showAlert && <Alert_response flag={true} message={"Registration successful"} />}
            {Flag === "UnSuccess" && showAlert && <Alert_response flag={false} message={"Registration unsuccessful"} />}
            <div className="main_container">
                <Side_component />
                <section className="auth_section_container">
                    <div className="navbar_signin_or_signup">
                        <p className="Signup_Sigin_navigate_wrapper">
                            Already a member?{"    "}
                            <NavLink to="/signin" id="Signup_Sigin_navigate">
                                Signin
                            </NavLink>
                        </p>
                    </div>
                    <main className="auth_data_section">
                        <div className="auth_content_signup">
                            <div className="inside_container_signup">
                                <h5 className="banner">Sign in to art.of.flavours</h5>
                                <br />
                                <div className="google_signin">
                                    {/* <div id="my-signin2"></div> */}
                                </div>
                                <br />
                                <hr className="divider" />
                                <div className="form_field">
                                    <form method="POST" className="form-look" onSubmit={PostDATA}>
                                        <div className="form-group-signup">
                                            <label htmlFor="name">
                                                <h6>Name *</h6>
                                            </label>
                                            <input type="text" className="form-control input_design" id="Name" aria-describedby="emailHelp" placeholder="Full Name" name="Name" value={user.Name} onChange={handleInputs} required />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="phone">
                                                <h6>Phone</h6>
                                            </label>
                                            <input type="number" className="form-control input_design" id="Phone" aria-describedby="emailHelp" placeholder="+91" name="Phone" value={user.Phone} onChange={handleInputs} maxLength={10} />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="age">
                                                <h6>Age *</h6>
                                            </label>
                                            <input type="number" className="form-control input_design" id="Age" aria-describedby="emailHelp" placeholder="" name="Age" value={user.Age} onChange={handleInputs} max={120} min={0} required />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="gender">
                                                <h6>Gender *</h6>
                                            </label>
                                            <select className="form-control input_design" id="Gender" name="Gender" value={user.Gender} onChange={handleInputs} required>
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="None">None</option>
                                            </select>
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="email">
                                                <h6>Email address *</h6>
                                            </label>
                                            <input type="email" className="form-control input_design" id="Email" aria-describedby="emailHelp" placeholder="" name="Email" value={user.Email} onChange={handleInputs} required />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="uid">
                                                <h6>Create User ID *</h6>
                                            </label>
                                            <input type="text" className="form-control input_design" id="uid" aria-describedby="emailHelp" placeholder="" name="UserID" value={user.UserID} onChange={handleInputs} required />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="password">
                                                <h6>Password *</h6>
                                            </label>
                                            <input type="password" className="form-control input_design" id="Password" placeholder="Password" name="Password" value={user.Password} onChange={handleInputs} required />
                                        </div>
                                        <div className="form-group-signup">
                                            <label htmlFor="c_password">
                                                <h6>Confirm Password *</h6>
                                            </label>
                                            <input type="password" className="form-control input_design" id="C_Password" placeholder="Password" name="CPassword" value={user.CPassword} onChange={handleInputs} required />
                                        </div>
                                        <Alertreq />
                                        <div className="submit_btn_place">
                                            <button type="submit" className="btn btn-primary submit_button_signup" >
                                                Signup
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

export default Signup;
