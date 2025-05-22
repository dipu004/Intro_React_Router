import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails from '../UserDetails/UserDetails';
import UserDetails2 from '../UserDeatis2/UserDetails2';


const User = ({user}) => {
    const [showInfo , setShowInfo] = useState(false);
    const [visiteHome , setVisiteHome] = useState(false);
    const {name , email, phone ,id} = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    const userStyle = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin:'10px'
    }

    if(visiteHome){
        return <Navigate to={"/"}></Navigate>
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone:{phone}</small></p>
           <Link to={`/users/${id}`}>Show Details</Link>
           <button onClick={() => setShowInfo(!showInfo)}>{ showInfo ? 'Hide': 'Show'} Info</button>
           {
            showInfo && <Suspense fallback={<span>Loading...</span>}>
                <UserDetails2 userPromise={userPromise}></UserDetails2>
            </Suspense>
           }
           <button onClick={() => setVisiteHome(true)}>Visite Home</button>
        </div>
    );
};

export default User;