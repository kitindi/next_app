import { revalidatePath } from "next/cache"; // for reloading the cache after form submission
import { auth, currentUser } from "@clerk/nextjs/server";
type MockUser = {
  id: number;
  name: string;
};

export default async function MockUsers() {
  const res = await fetch("https://6786774af80b78923aa6f058.mockapi.io/users");
  const users = await res.json();

  //   server actions

  async function addUser(formData: FormData) {
    "use server";
    const authObj = await auth();
    const userObj = await currentUser();

    console.log(authObj, userObj);

    const name = formData.get("name");
    const res = await fetch("https://6786774af80b78923aa6f058.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Baerer YOUR_PRIVATE_KEY" },
      body: JSON.stringify({ name }),
    });

    const newUser = await res.json();
    revalidatePath("/mock-users");
    console.log(newUser);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="py-10 w-92">
        <form action={addUser}>
          <div className="mb-3">
            <input type="text" name="name" required className="border border-gray-500 px-3 py-2 focus:outline-none w-92" />
          </div>
          <button className="bg-black text-white px-12 py-2 rounded-sm">Add new user</button>
        </form>
      </div>
      <ul className="w-full max-w-3xl mx-auto mt-5 p-8 bg-white flex flex-col space-y-4">
        {users.map((user: MockUser) => (
          <li key={user.id} className="bg-slate-300 p-4 rounded-md">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
