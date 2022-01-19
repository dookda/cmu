import React from "react";
import './../assets/css/soft-ui-dashboard.min.css'

const Header = (props) => {
    return (
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky" id="navbarBlur" navbar-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <h6 className="font-weight-bolder mb-0">{props.name}</h6>
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm text-dark"><a className="opacity-5 text-dark" href="Home">Home</a></li>
                        <li className="breadcrumb-item text-sm text-dark " ><a className="opacity-5 text-dark" href="Survey">Survey</a></li>
                        <li className="breadcrumb-item text-sm text-dark " ><a className="opacity-5 text-dark" href="Profile">Profile</a></li>
                    </ol>
                </nav>
            </div>
        </nav>
    );
}

export default Header;