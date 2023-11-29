// Sidebar.js

import React from 'react';
import './sidebar.css'; // Import the styleshee
import { HomeOutlined } from "@ant-design/icons"

const Sidebar = () => {
    return (
        <div className="sidebar" style={{height:"100vh"}}>
            <ul className="nav">

                <li>
                    
                    <HomeOutlined />
                    <use xlinkHref="#speedometer2" />
                    Dashboard
                </li>

                <li>
                    <HomeOutlined />
                    <use xlinkHref="#home" />
                    Purchase Orders
                </li>

                <li>
                    <HomeOutlined />
                    <use xlinkHref="#home" />
                    Delivery Schedule
                </li>

                <li>
                    <HomeOutlined />
                    <use xlinkHref="#home" />
                    Report
                </li>

                <li>
                    <HomeOutlined />
                    {/* Include your SVG icons here */}
                    <use xlinkHref="#home" />
                    Invoice & Payments
                </li>

                <li>
                    <HomeOutlined />
                    {/* Include your SVG icons here */}
                    <use xlinkHref="#home" />
                    Settings
                </li>

                <li>

                    <HomeOutlined />
                    {/* Include your SVG icons here */}
                    <use xlinkHref="#home" />

                    Support
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
