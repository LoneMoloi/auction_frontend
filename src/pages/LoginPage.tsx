import React from "react";
import logo from "../assets/auction-logo.png";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-brand-green-50 to-brand-green-800 flex justify-center items-center">
            <div className="flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src={logo}
                        alt="BTC Online Auction"
                        className="w-14 h-14 object-contain"
                    />
                </div>

                {/* Login Card */}
                <div className="w-[340px] bg-white rounded-lg px-6 pt-6 pb-20 shadow-[0px_10px_25px_rgba(0,0,0,0.12)] flex flex-col">
                    <label className="text-sm text-gray-800 mb-1.5">Email</label>
                    <input
                        type="email"
                        placeholder="example@btc.bw"
                        className="h-10 rounded-md border border-brand-green-300 px-3 text-sm outline-none focus:border-brand-green-600 focus:ring-1 focus:ring-brand-green-600"
                    />

                    <label className="text-sm text-gray-800 mb-1.5 mt-4">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="h-10 rounded-md border border-brand-green-300 px-3 text-sm outline-none focus:border-brand-green-600 focus:ring-1 focus:ring-brand-green-600"
                    />

                    <Link to="/dashboard" className="no-underline">
                        <button className="w-full mt-6 h-[42px] rounded-md bg-brand-green-700 text-green text-[15px] font-medium cursor-pointer hover:bg-brand-green-800 transition-colors">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
