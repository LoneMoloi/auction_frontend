import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-page">
            {/* Top Bar */}
            <header className="dashboard-header">
                <div className="header-left">
                    <img
                        src="/btc-logo.png"
                        alt="BTC Online Auction"
                        className="header-logo"
                    />
                    <span className="header-title">btc online auction</span>
                </div>

                <div className="header-right">
                    <span className="user-name">Welcome, User</span>
                </div>
            </header>

            <div className="dashboard-body">
                {/* Sidebar */}
                <aside className="sidebar">
                    <ul className="sidebar-menu">
                        <li className="active">Dashboard</li>
                        <li>Live Auctions</li>
                        <li>My Bids</li>
                        <li>Won Items</li>
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="dashboard-content">
                    <h2 className="section-title">Live Auctions</h2>

                    <div className="auction-grid">
                        <div className="auction-card">
                            <div className="auction-image"></div>
                            <h3>Office Furniture</h3>
                            <p>Current Bid: <strong>P 1,200</strong></p>
                            <button className="bid-button">View Auction</button>
                        </div>

                        <div className="auction-card">
                            <div className="auction-image"></div>
                            <h3>IT Equipment</h3>
                            <p>Current Bid: <strong>P 3,500</strong></p>
                            <button className="bid-button">View Auction</button>
                        </div>

                        <div className="auction-card">
                            <div className="auction-image"></div>
                            <h3>Vehicles</h3>
                            <p>Current Bid: <strong>P 25,000</strong></p>
                            <button className="bid-button">View Auction</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
