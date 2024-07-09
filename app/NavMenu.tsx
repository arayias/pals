import { SignInButton } from "@/components/buttons";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="w-screen p-5 bg-gray-900 border-b border-gray-800">
      <ul className="flex gap-2 justify-around">
        <li className="hover:text-gray-300 transition-colors">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className="hover:text-gray-300 transition-colors">
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
