import { useEffect, useState } from "react";
import '../app/globals.css';
import UserById from "../components/userById";
import Link from "next/link";
import UserComponenet from "@/components/userComponent";

export default function Users() {

  const [users, setUser] = useState<any[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    getUsers();
  }, [])

  return (
    <div className="flex flex-col gap-10 justify-center items-center border rounded-md shadow-md m-10 p-10">
      <div>
        <UserById />
      </div>
      <h1 className="text-center">Users</h1>
      <div className="flex">
        <ul className="grid grid-cols-3 w-auto">
          {users.map((user) => (
            <UserComponenet
              id={user.id}
              username={user.username}
              password={user.password}
              nome={user.nome}
              key={user.id}
            />
          ))}
        </ul>
      </div>
      <Link className="border shadow-md p-2 w-28" href={`/register-user`}>Create User</Link>
    </div>
  )
}