import React, { createRef, useEffect, useState } from 'react'
import { cleanJson, postData } from '../../assets/js/utils';
import NavigationAuthenticated from '../../components/navigation_authenticated';
import { useParams } from 'react-router-dom';
import LayoutAuth from '../../components/layout_auth';
import PageControlButton from '../../components/page_control_button';

export default function UserEdit() {
    const params = useParams();

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [userType,setUserType] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user, setUser] = useState('');
    
    useEffect(() => {
        getuser();

    }, [])

    const getuser = async () => {
        const userResponse = await fetch(`/api/users/?id=${params.id}`);
        const userResponseData = await userResponse.json();

        setFirstName(userResponseData.firstname ?? '');
        setLastName(userResponseData.lastname ?? '');
        setMobileNumber(userResponseData.mobileNumber ?? '');
        setEmail(userResponseData.email ?? '');
        setGender(userResponseData.gender ?? '');
    }

    const editUser = async (event) => {
        event.preventDefault();
        
        let updateData = cleanJson({
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobileNumber: mobileNumber,
            password : password
        });

        const updateUserResponse = await postData(`/api/users/${params.id}`, 'PUT', updateData);
        if(updateUserResponse) {
            window.location = '/users/edit/'+params.id;
        }
    }

    const pageButtons = [
        <PageControlButton url={'/users/index'} label={'Users'}></PageControlButton>
    ];

    const deleteUser = async () => {
        const response = await postData('/api/users/' + params.id, 'DELETE');
        window.location.href = '/users/index';
    }

    const pageContent = () => {
        return (
            <div className='col-md-6 mx-auto'>
                <div className='card'>
                    <div className='card-header'>
                        <h4 className='card-title'>Edit User</h4>
                        <button className='btn btn-danger btn-sm' onClick={deleteUser}>Delete</button>
                    </div>
                    <div className='card-body'>
                        <form method='post' action='' onSubmit={editUser}>
                            <div className='form-group mb-3'>
                                <label htmlFor=''>First name</label>
                                <input id='firstname' 
                                placeholder='First name' 
                                className='form-control' 
                                onChange={(event)=>{
                                    setFirstName(event.target.value)
                                }} value={firstname ?? ''}></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor=''>Last name</label>
                                <input id='lastname' 
                                placeholder='Last Name' 
                                className='form-control'
                                onChange={(event)=>{
                                    setLastName(event.target.value)
                                }} value={lastname ?? ''}></input>
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
                                }} value={mobileNumber ?? ''}></input>
                            </div>

                            <div className='form-group mb-3'>
                                <label htmlFor=''>Email</label>
                                <input id='email' 
                                placeholder='Email' 
                                className='form-control'
                                onChange={(event)=>{
                                    setEmail(event.target.value)
                                }} value={email ?? ''}></input>
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
            </div>
        );
    }
    return (
        <LayoutAuth element={pageContent} pageTitle='User Management' pageButtons={pageButtons}></LayoutAuth>
    );
}