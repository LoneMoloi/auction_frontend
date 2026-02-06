import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-brand-green-50 to-brand-green-400 flex flex-col">
            {/* Top Bar */}
            <header className="h-16 bg-white flex justify-between items-center px-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2.5">
                    <img
                        src="/btc-logo.png"
                        alt="BTC Online Auction"
                        className="w-9 h-9 object-contain"
                    />
                    <span className="text-lg font-semibold text-brand-green-600">btc online auction</span>
                </div>

                <div>
                    <span className="text-sm text-gray-600">Welcome, User</span>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-[220px] bg-white shadow-[2px_0_10px_rgba(0,0,0,0.08)]">
                    <ul className="list-none py-5 m-0">
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm bg-brand-green-50 text-brand-green-500 font-medium">
                            Dashboard
                        </li>
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm hover:bg-brand-green-50 hover:text-brand-green-500 hover:font-medium transition-colors">
                            Live Auctions
                        </li>
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm hover:bg-brand-green-50 hover:text-brand-green-500 hover:font-medium transition-colors">
                            My Bids
                        </li>
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm hover:bg-brand-green-50 hover:text-brand-green-500 hover:font-medium transition-colors">
                            Won Items
                        </li>
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm hover:bg-brand-green-50 hover:text-brand-green-500 hover:font-medium transition-colors">
                            Profile
                        </li>
                        <li className="py-3 px-6 cursor-pointer text-gray-700 text-sm hover:bg-brand-green-50 hover:text-brand-green-500 hover:font-medium transition-colors">
                            Logout
                        </li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <h2 className="mb-5 text-brand-green-900">Live Auctions</h2>

                    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
                        <div className="bg-white rounded-lg p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex flex-col">
                            <div className="h-[120px] bg-[#dfeee3] rounded-md mb-3"></div>
                            <h3 className="m-0 mb-2 text-base text-gray-800">Office Furniture</h3>
                            <p className="text-sm mb-3">Current Bid: <strong>P 1,200</strong></p>
                            <button className="mt-auto h-9 border-none rounded-md bg-brand-green-500 text-white cursor-pointer text-sm hover:bg-brand-green-600 transition-colors">
                                View Auction
                            </button>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex flex-col">
                            <div className="h-[120px] bg-[#dfeee3] rounded-md mb-3"></div>
                            <h3 className="m-0 mb-2 text-base text-gray-800">IT Equipment</h3>
                            <p className="text-sm mb-3">Current Bid: <strong>P 3,500</strong></p>
                            <button className="mt-auto h-9 border-none rounded-md bg-brand-green-500 text-white cursor-pointer text-sm hover:bg-brand-green-600 transition-colors">
                                View Auction
                            </button>
                        </div>

                        <div className="bg-white rounded-lg p-4 shadow-[0_8px_20px_rgba(0,0,0,0.12)] flex flex-col">
                            <div className="h-[120px] bg-[#dfeee3] rounded-md mb-3"></div>
                            <h3 className="m-0 mb-2 text-base text-gray-800">Vehicles</h3>
                            <p className="text-sm mb-3">Current Bid: <strong>P 25,000</strong></p>
                            <button className="mt-auto h-9 border-none rounded-md bg-brand-green-500 text-white cursor-pointer text-sm hover:bg-brand-green-600 transition-colors">
                                View Auction
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;

