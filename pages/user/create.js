import React, { createRef, useEffect, useState } from 'react'
import { postData } from '../../assets/js/utils';
import NavigationAuthenticated from '../../components/navigation_authenticated';
import LayoutAuth from '../../components/layout_auth';
import PageControlButton from '../../components/page_control_button';

export default function UserCreate() {
    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [userType,setUserType] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        fetchCustomers()
    });

    const fetchCustomers = async () => {
        const customerResponse = await fetch('/api/users')
        const users = await customerResponse.json()
        console.log(users)
    }

    const createUser = async (event) => {
        event.preventDefault();

        const createUserResponse = await postData('/api/users', 'POST', {
            firstname: firstname,
            lastname: lastname,
            userType : "ADMIN",
            email: email,
            mobileNumber: mobileNumber,
            password: password,
            gender : "FEMALE"
        });

        if(createUserResponse) {
            window.location = '/users/index';
        }
    }

    const pageButtons = [
        <PageControlButton url={'/users/index'} label={'Users'}></PageControlButton>
    ];

    const pageContent = () => {
        return (
            <div className='card'>
                <div className='card-header'>
                    <h4 className='card-title'>Add User</h4>
                </div>
                <div className='card-body'>
                    <form method='post' action='' onSubmit={createUser}>
                        <div className='form-group mb-3'>
                            <label htmlFor=''>First name</label>
                            <input id='firstname' 
                            placeholder='First name' 
                            className='form-control' 
                            onChange={(event)=>{
                                setFirstName(event.target.value)
                            }}></input>
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor=''>Last name</label>
                            <input id='lastname' 
                            placeholder='Last Name' 
                            className='form-control'
                            onChange={(event)=>{
                                setLastName(event.target.value)
                            }}></input>
                        </div>

                        <div className='form-group mb-3'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label htmlFor=''>Gender</label>
                                    <select className='form-control' id='gender'
                                    onChange={(event)=>{
                                        setGender(event.target.value)
                                    }}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor=''>User Type</label>
                                    <select className='form-control' id='userType'
                                    onChange={(event)=>{
                                        setUserType(event.target.value)
                                    }}>
                                        <option value="sub_admin">Sub Admin</option>
                                        <option value="staff">Staff</option>
                                        <option value="client">Client</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='form-group mb-3'>
                            <label htmlFor=''>Mobile Number</label>
                            <input id='mobileNumber' 
                            placeholder='Mobile Number' 
                            className='form-control'
                            onChange={(event)=>{
                                setMobileNumber(event.target.value)
                            }}></input>
                        </div>

                        <div className='form-group mb-3'>
                            <label htmlFor=''>Email</label>
                            <input id='email' 
                            placeholder='Email' 
                            className='form-control'
                            onChange={(event)=>{
                                setEmail(event.target.value)
                            }}></input>
                        </div>

                        <div className='form-group mb-3'>
                            <label htmlFor=''>Password</label>
                            <input type='password' id='password' 
                            placeholder='Password' 
                            className='form-control'
                            onChange={(event)=>{
                                setPassword(event.target.value)
                            }}></input>
                        </div>

                        <button id='submit' className='btn btn-primary'>Save user</button>
                    </form>
                </div>
            </div>
        );
    }
    return (<LayoutAuth element={pageContent} pageTitle='User Management' pageButtons={pageButtons}></LayoutAuth>);
}