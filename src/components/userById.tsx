import { useEffect, useState } from "react";
import UserComponenet from "./userComponent";

export default function UserById() {

  const [user, setUser] = useState<any>({});
  const [id, setId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`);
      const data = await response.json();
      !data ? setErrorMessage('User not found') : setErrorMessage('');
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div className="flex flex-col gap-10 justify-center border rounded-md shadow-md m-10 p-10">
      <div>
        <h1 className="text-center">Search User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-20">
          <label className="flex justify-center items-center">
            <span className="w-24">Id</span>
            <input className="rounded-md shadow-md w-48 text-sm h-7 text-center" type="text" name="id" onChange={(e) => setId(e.target.value)} value={id} placeholder='Digite seu id' />
          </label>
          <span className="text-red-600">{errorMessage}</span>
          <button className="rounded bg-zinc-100 w-24 shadow-md hover:bg-zinc-300 transition-colors" type="submit">Search</button>
        </form>
      </div>
      <div className="flex justify-center">
        
        {user && user.id && <ul className="flex flex-col">
          <UserComponenet
            id={user.id}
            username={user.username}
            password={user.password}
            nome={user.nome}
          />
        </ul>}
      </div>
    </div>
  )
}