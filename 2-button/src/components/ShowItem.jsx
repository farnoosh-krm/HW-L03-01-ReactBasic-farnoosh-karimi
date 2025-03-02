import React from "react";

const showText = () => {
  const inputBox = document.getElementById("input-text");
  console.log(inputBox.value);
  inputBox.value = "";
};

const ShowItem = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <input
        id="input-text"
        className="m-2 p-2.5 w-[350px] border-2 border-white rounded-2xl shadow-xl bg-amber-200 outline-none focus:border-amber-700 "
        type="text"
        placeholder="write something..."
      />
      <br />
      <button
        className="bg-amber-500 m-2 p-2.5 border-white border-1 rounded-xl shadow-xl hover:bg-amber-300 active:bg-amber-400 cursor-pointer"
        onClick={showText}
      >
        write in console
      </button>
    </div>
  );
};

export default ShowItem;
