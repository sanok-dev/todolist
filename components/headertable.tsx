import Link from "next/link";

export default function HeaderTable() {
  return (
    <div className="flex px-4  gap-4 mb-8 ">
      <Link
        href="/today"
        className="text-2xl font-bold bg-gray-500 text-white grow text-center rounded-2xl py-4 my-4"
      >
        今日
      </Link>
      <Link
        href="/tomorrow"
        className="text-2xl font-bold bg-gray-200 text-gray-800 grow text-center rounded-2xl py-4 my-4"
      >
        明日
      </Link>
    </div>
  );
}
