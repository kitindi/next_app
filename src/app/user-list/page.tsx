"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fecthUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch clients");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Failed to fetch clients");
        if (err instanceof Error) {
          setError(`Failed to fetch clients :${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fecthUsers();
  }, []);

  if (loading) return <div>Loading ....</div>;
  if (error) return <div>{error}</div>;
  return (
    <ul className="w-full max-w-3xl mx-auto mt-5 p-8 bg-white flex flex-col space-y-4">
      {users.map((user) => (
        <li key={user.id} className="bg-slate-300 p-4 rounded-md">
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserClient;
