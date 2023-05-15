import { useEffect, useState } from "react";
import '../app/globals.css';
import Link from "next/link";
import UserComponent from "@/components/userComponent";

export default function Users() {

  const [users, setUsers] = useState<any[]>([]);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    id === '' && getUsers();
  }, [id, users])

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    id !== '' && getUserById();
  }, [id]);

  return (
    <div className="flex flex-col gap-10 justify-center items-center border rounded-md shadow-md m-10 p-10">
      <div>
        <label>
          <input className="rounded-md shadow-md w-48 text-sm h-7 text-center" type="text" name="id" onChange={(e) => setId(e.target.value)} value={id} placeholder='Digite seu id' />
        </label>
      </div>
      <h1 className="text-center">Users</h1>
      <div className="flex">
        <ul className="grid grid-cols-3 w-auto">
          {users && users.length > 0 && users.map((user) => (
              <UserComponent
                id={user.id}
                username={user.username}
                password={user.password}
                nome={user.nome}
                key={user.id}
                users={users}
                setUsers={setUsers}
              />
          ))}
          {users && users.id && 
            <UserComponent
              id={users.id}
              username={users.username}
              password={users.password}
              nome={users.nome}
              key={users.id}
              users={users}
              setUsers={setUsers}
            />
          }
        </ul>
      </div>
      <Link className="border shadow-md p-2 w-28" href={`/form-crud/register-user`}>Create User</Link>
    </div>
  )
}