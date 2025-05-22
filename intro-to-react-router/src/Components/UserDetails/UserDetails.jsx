import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
     const user = useLoaderData();

   const params = useParams();
   console.log(params);
     const {website , name} = user;

    return (
        <div>
            <h2>User Details Here</h2>
            <h2>Website:{website}</h2>
            <h2>Name:{name}</h2>
        </div>
    );
};

export default UserDetails;