import { UserMenu } from "@/components/UserMenu";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="w-full pt-3 pb-1 bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <ul className="flex gap-2 justify-around items-center w-4/6 mx-auto">
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
          <UserMenu />
        </li>
      </ul>
    </nav>
  );
}
