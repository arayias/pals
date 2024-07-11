"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogOut, User, UserPen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function UserMenu() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Button className="w-[32px] h-[32px]">Loading...</Button>;
  }
  if (status === "authenticated") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            src={session.user?.image ?? "/mememan.webp"}
            width={32}
            height={32}
            alt={session.user?.name ?? "User Avatar"}
            className="rounded-full cursor-pointer dark select-none"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 dark">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={`/users/${session.user.id}`}>
              <DropdownMenuItem>
                <div className="flex flex-row items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </div>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <Link href={`/dashboard`}>
              <DropdownMenuItem>
                <div className="flex flex-row items-center">
                  <UserPen className="mr-2 h-4 w-4" />
                  Dashboard
                </div>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      className="dark px-1 py-0.5"
      variant={"outline"}
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
}
