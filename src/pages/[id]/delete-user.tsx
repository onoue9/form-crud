import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
//import '../app/globals.css';

export default function DeleteUser() {

  const { id } = useRouter().query;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
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
      <h1 className="text-center">Delete User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-20">
        <button className="rounded bg-zinc-100 w-24 shadow-md hover:bg-zinc-300 transition-colors" type="submit">Delete</button>
      </form>
    </div>
  )
}