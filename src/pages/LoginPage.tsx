import React from "react";
import logo from "../assets/auction-logo.png";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                {/* Logo placeholder */}
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="BTC Online Auction"
                        className="logo-image"
                    />
                </div>

                {/* Login Card */}
                <div className="login-card">
                    <label className="login-label">Email</label>
                    <input
                        type="email"
                        placeholder="example@btc.bw"
                        className="login-input"
                    />

                    <label className="login-label password-label">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="login-input"
                    />

                    <Link to="/dashboard" className="login-link">
                        <button className="login-button">Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;