import { UserMenu } from "@/components/UserMenu";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="w-full pt-3 pb-1 bg-gray-200 dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-10 shadow-lg">
      <ul className="flex justify-between items-center w-[90%] sm:w-4/6 md:w-3/4 lg:w-2/3 mx-auto">
        <li className="dark:hover:text-gray-300 hover:text-gray-950 transition-colors">
          <Link href={"/"}>Home</Link>
        </li>
        <div className="flex gap-3 ml-auto items-center">
          <li className="dark:hover:text-gray-300 hover:text-gray-950 transition-colors">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="dark:hover:text-gray-300 hover:text-gray-950 transition-colors">
            <Link href={"/blogs"}>Blog</Link>
          </li>
          <li className="dark:hover:text-gray-300 hover:text-gray-950 transition-colors">
            <Link href={"/users"}>Users</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </div>
      </ul>
    </nav>
  );
}
