import React from "react";
import Table from "../Table/Table";
import Header from "../Header/Header";

const Profile = () => {
    return (
        <div className='container'>
            <Header name="โปรไฟล์" />
            <div className="container-fluid py-4">
                <Table />
            </div>
        </div>
    )
}

export default Profile;