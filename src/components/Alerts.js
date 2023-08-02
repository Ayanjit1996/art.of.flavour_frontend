import { useState } from "react";
import React from "react";
import "../App.css";

const Alertreq = () => {
    return (
        <div className="req_field">
            <p className="req_filed_text">* required field</p>
        </div>)
}

const Alert_response = ({ message, flag }) => {
    return (
        <div>
            <div className="alert_box">
                {flag && <div className="alert_top alertsuccess">
                    {message}
                </div>}
                {!flag && <div className="alert_top alertinvalid">
                    {message}
                </div>}
            </div>
        </div>
    );
};

export { Alertreq, Alert_response }