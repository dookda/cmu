import React from "react";
import "./../assets/css/soft-ui-dashboard.min.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";


const PageSurvey = () => {
    return (
        <div className='container'>
            <Header name="สำรวจข้อมูล" />
            <div className="container-fluid py-4">
                <Map />
            </div>
            <Footer />
        </div>
    )
}

export default PageSurvey;
