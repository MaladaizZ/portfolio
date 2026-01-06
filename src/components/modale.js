import React, { useState, useEffect } from "react";


export default function Modale () {
 const [users,setUsers] = useState ([]) ; 

 const getUsers = async () => {
    const res = await fetch ("https://api.github.com/users");
    const json = await res.json ();
    setUsers(json);
 }
 useEffect(() => {
    getUsers ();
 },[])

 return (
    <ul>
        
        <button 
        type="button"
        class= "btn btn-danger"
        onClick={users.map(user =>(
            <li>{user.login}</li>
        ))} >En savoir plus</button> 
    </ul>
 )
}
 