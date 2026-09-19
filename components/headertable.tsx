import Link from "next/link";

export default function HeaderTable() {
  return (
    <div className="mx-auto mb-8 flex w-full max-w-4xl gap-4 px-4">
      <Link
        href="/today"
        className="my-4 flex-1 rounded-2xl bg-gray-500 py-4 text-center text-2xl font-bold text-white"
      >
        今日
      </Link>
      <Link
        href="/tomorrow"
        className="my-4 flex-1 rounded-2xl bg-gray-200 py-4 text-center text-2xl font-bold text-gray-800"
      >
        明日
      </Link>
    </div>
  );
}
