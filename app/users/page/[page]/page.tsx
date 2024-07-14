import { UserSection } from "../../page";

type Props = {
  params: {
    page: string;
  };
};

export default async function UsersPage({ params }: Props) {
  const page = parseInt(params.page);
  if (isNaN(page) || page < 0) {
    throw new Error("Invalid page number");
  }

  return <UserSection page={page} />;
}
