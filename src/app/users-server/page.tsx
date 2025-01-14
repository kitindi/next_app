type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
  // delaying component redering for 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholderr.typicode.com/users");
  const users = await res.json();

  return (
    <ul className="w-full max-w-3xl mx-auto mt-5 p-8 bg-white flex flex-col space-y-4">
      {users.map((user: User) => (
        <li key={user.id} className="bg-slate-300 p-4 rounded-md">
          {user.name} {user.email}
        </li>
      ))}
    </ul>
  );
}
