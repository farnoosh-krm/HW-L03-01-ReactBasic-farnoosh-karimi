import UserList from "./components/UserList";

function App() {
  const users = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Alice Johnson", age: 23, city: "Chicago" },
  ];

  return (
    <>
      <h1 className="m-10 font-bold text-4xl text-gray-800 flex flex-col justify-center items-center">
        Users List:
      </h1>
      <UserList users={users} />
    </>
  );
}

export default App;
