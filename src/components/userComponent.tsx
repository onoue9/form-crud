import Link from "next/link";

export default function UserComponent(
  { id, username, password, nome, users, setUsers }: any) {

  const handleClick = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data);
      setUsers(users.filter((user: any) => user.id !== id));
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div className="flex flex-col gap-2 items-center border shadow-md p-4" key={id}>
      <li>id: {id}</li>
      <li>username: {username}</li>
      {password && <li>password: {password}</li>}
      <li>nome: {nome}</li>
      <div className="flex gap-5 p-2">
        <Link className="border shadow-md p-1" href={`/form-crud/${id}/update-user`}>Update</Link>
        <button className="border shadow-md p-1" onClick={() => handleClick
          (id)}>Delete</button>
      </div>
    </div>
  )
}
