"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-gray-400 py-4">
      <nav className="w-full max-w-2xl mx-auto space-x-5">
        <Link href="/" className={pathname === "/" ? "text-amber-600 font-bold" : ""}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? "text-amber-600 font-bold" : ""}>
          About
        </Link>
        <Link href="/products/1" className={pathname === "/products/1" ? "text-amber-600 font-bold" : ""}>
          Product 1
        </Link>
      </nav>
    </div>
  );
};
