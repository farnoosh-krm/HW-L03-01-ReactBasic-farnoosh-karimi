import React from "react";

const ShowList = ({ name, age, city }) => {
  return (
    <div className="m-6 p-4 w-[500px] border-10 border-white rounded-3xl shadow-xl bg-fuchsia-200 text-gray-700 text-xl mx-auto flex flex-col justify-center items-center">
      <h2 className="font-bold">{name}</h2>
      <p>age: {age}</p>
      <p>city: {city}</p>
    </div>
  );
};

export default ShowList;
