import React from "react";
import './../assets/css/soft-ui-dashboard.min.css';
import './../Style.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

const Home = () => {
    return (
        <div className='container'>
            <Header name="หน้าหลัก" />
            <div className="container-fluid py-4">
                <div className="row">
                    <Card name="salda" />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
