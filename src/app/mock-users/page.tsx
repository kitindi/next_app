type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const res = await fetch("https://6786774af80b78923aa6f058.mockapi.io/users");
  const users = await res.json();

  return (
    <ul className="w-full max-w-3xl mx-auto mt-5 p-8 bg-white flex flex-col space-y-4">
      {users.map((user: MockUser) => (
        <li key={user.id} className="bg-slate-300 p-4 rounded-md">
          {user.name}
        </li>
      ))}
    </ul>
  );
}
