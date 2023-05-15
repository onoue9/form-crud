import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
//import '../app/globals.css';

export default function UpdateUser() {

  const { id } = useRouter().query;

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nome, setNome] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, nome }),
      });
      const data = await response.json();
      console.log(data);
      location.pathname = '/users';
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div className="flex flex-col gap-10 justify-center border rounded-md shadow-md m-10 p-10">
      <h1 className="text-center">Update User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-20">
        <label className="flex">
          <span className="w-24">Username</span>
          <input className="rounded-md shadow-md w-48 text-sm h-7 text-center" type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Digite seu email'/>
        </label>
        <label className="flex justify-center items-center">
          <span className="w-24">Password</span>
          <input className="rounded-md shadow-md w-48 text-sm h-7 text-center" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Digite sua senha' />
        </label>
        <label className="flex justify-center items-center">
          <span className="w-24">Nome</span>
          <input className="rounded-md shadow-md w-48 text-sm h-7 text-center" type="text" name="nome" onChange={(e) => setNome(e.target.value)} value={nome} placeholder='Digite seu nome' />
        </label>
        <button className="rounded bg-zinc-100 w-24 shadow-md hover:bg-zinc-300 transition-colors" type="submit">Update</button>
      </form>
    </div>
  )
}
