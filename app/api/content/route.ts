import { NextResponse } from "next/server";

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit",
    slug: "dolor-sit",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Amet Consectetur",
    slug: "amet-consectetur",
    content:
      "Amet consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
