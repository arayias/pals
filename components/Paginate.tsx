"use client";

import { Pagination } from "@/components/ui/pagination";
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams } from "next/navigation";

type Props = {
  params: {
    totalPages: number;
  };
};

export default function Paginate({ params }: Props) {
  const searchParams = useParams();
  const currentPage = parseInt(searchParams.page as string) || 0;

  return (
    <Pagination className="justify-center mt-1">
      <PaginationContent className="bg-slate-700 rounded-xl">
        {currentPage > 0 && (
          <PaginationItem>
            <PaginationPrevious href={`/blogs/page/${currentPage - 1}`} />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#">{currentPage}</PaginationLink>
        </PaginationItem>
        {params.totalPages - 1 > currentPage && (
          <PaginationItem>
            <PaginationNext href={`/blogs/page/${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
