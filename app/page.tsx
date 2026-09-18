import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center mt-10">
        今日と明日のTODOを管理するアプリです。
      </div>
      <Link
        href="/allTodo"
        className="text-gray-500 hover:text-gray-700 mt-4 block text-center"
      >
        すべてのTODOを見る
      </Link>
    </>
  );
}
