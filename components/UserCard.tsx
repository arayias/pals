import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className="bg-gray-700 shadow-lg rounded-lg w-48 h-80 hover:bg-gray-800 transition duration-200">
      <div className="h-48 overflow-hidden rounded-tr-3xl">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={name || "User"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-semibold">{name || "User"}</h1>
        {age ? <p className="text-gray-500">{age} years old</p> : null}
        <Link href={`/users/${id}`}>
          <span className="text-blue-500 hover:border-b-4 cursor-pointer">
            View Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
