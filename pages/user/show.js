import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationAuthenticated from "../../components/navigation_authenticated";

export default function UserShow() {
    const params = useParams();
    const [user, setUser] = useState('');

    let userEditLink = '';
    useEffect(() => {
        getuser();

        if(user) {
            userEditLink = "/users/edit/" + user._id;
        }

    }, [])

    const getuser = async () => {
        const userResponse = await fetch(`/api/users/?id=${params.id}`);
        const userResponseData = await userResponse.json();
        setUser(userResponseData);
    }
    return (
        <>
            <NavigationAuthenticated></NavigationAuthenticated>
            <h1>Currently going under renovation</h1>
            <a href={userEditLink}>Edit USer</a>
        </>
    );
}