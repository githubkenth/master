import React, { useEffect, useState } from "react";
import { Outlet, Link } from 'react-router-dom';
import LayoutAuth  from "../../components/layout_auth";
import PageControlButton from "../../components/page_control_button";

export default function UserIndex() {
    const [users, setUser] = useState([''])
    const fetchUsers = async () => {
        const fetchUserResponse = await fetch('/api/users');
        const fetchUserResponseData = await fetchUserResponse.json();
        setUser(fetchUserResponseData);
    }


    const pageButtons = [
        <PageControlButton url={'/users/create'} label= 'Add New User'></PageControlButton>
    ];

    const pageContent = () => {
        return (
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Users</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.firstname}</td>
                                            <td>{val.lastname}</td>
                                            <td>{val.gender}</td>
                                            <td>{val.email}</td>
                                            <td>{val.mobileNumber}</td>
                                            <td>
                                                <Link to={"/users/edit/" + val._id}>Show</Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        fetchUsers();
    })
    return (<LayoutAuth element={pageContent} pageTitle="User Management" pageButtons={pageButtons}></LayoutAuth>);
}