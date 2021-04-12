import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "../User/User";
import "../User/User.css";
const UserList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="profile">
            {list.map((user, i) => (
                <User user={user} key={i} />
            ))}
        </div>
    );
};

export default UserList;
