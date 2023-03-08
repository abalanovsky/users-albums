import {useEffect, useState} from "react";
import './Users.css'
import { useNavigate } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error))
    }, [])
    return (
      <div className="users-container">
          {users.map((user) =>
              <div key={user.id} className="user-container">
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>City: {user.address.city}</div>
                <div>Company: {user.company.name}</div>
                <button className="album-button" onClick={() => navigate(`${user.id}/albums`)}>
                    Show albums</button>
              </div>
          )}
      </div>
    );
}

export default Users;
