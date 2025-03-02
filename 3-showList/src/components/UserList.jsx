import React from "react";
import ShowList from "./ShowList";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <ShowList
            key={user.name}
            name={user.name}
            age={user.age}
            city={user.city}
          />
        );
      })}
    </>
  );
};

export default UserList;
