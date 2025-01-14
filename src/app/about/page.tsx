"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h2> This is about us page</h2>;
      <button className="bg-black text-white rounded-full px-12 py-2" onClick={() => router.push("/")}>
        Go back home
      </button>
    </div>
  );
};

export default About;
