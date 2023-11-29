import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
  return (
    <main style={{ backgroundColor: "#80"}}>
      <div className='flex' style={{ backgroundColor: "#80"}}>
        <Sidebar />

        {/* Wrapper goes here */}
        <section className="dashboard_wrapper" style={{ width: "80%", backgroundColor: "#80"}}>
          <Navbar />
          <div className='flex' style={{ width: "100%", flexDirection: "column", alignItems: "center" }}>
            {/* Greeting Section */}
            <div style={{ backgroundColor: "#371cdf", padding: "20px", borderRadius: "4px", marginBottom: "20px" ,width:"100%"}}>
              <h5 style={{ fontFamily: "Public Sans, sans-serif", color: "white" }}>Hey Kevin,</h5>
            </div>

            {/* First Set of Boxes */}
            <div className='flex' style={{ backgroundColor: "#371cdf", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px",width:"100%" }}>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
            </div>

            {/* Quick Actions Section */}
            <div style={{width:"100%",backgroundColor: "#371cdf"}}>
              <h5>Quick Actions</h5>
            </div>

            {/* Second Set of Boxes */}
            <div className='flex' style={{ backgroundColor: "#371cdf", justifyContent: "center", flexWrap: "wrap",width:"100%" }}>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
              <div style={{ backgroundColor: "white", width: "300px", height: "250px", margin: "10px", borderRadius: "4px" }}></div>
            </div>
          </div>
        </section>
        {/* Wrapper ends here */}
      </div>
    </main>
  );
}

export default Dashboard;
