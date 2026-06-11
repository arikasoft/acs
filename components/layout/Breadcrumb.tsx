import Link from "next/link";

interface Props {
  page: string;
}

export default function Breadcrumb({
  page,
}: Props) {
  return (
    <div className="bg-slate-100 py-3">
      <div className="container mx-auto px-6">

        <Link
          href="/"
          className="text-blue-600"
        >
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>{page}</span>

      </div>
    </div>
  );
}