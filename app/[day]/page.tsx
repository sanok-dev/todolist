import { createAction } from "@/actions/createAction";
import TodaysTodo from "@/components/TodaysTodo";
import Link from "next/link";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const resolvedParams = await params;
  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="text-2xl font-bold text-center mb-4">
        {resolvedParams.day} Page
      </div>
      <Link
        href="/"
        className="text-gray-700 p-2 my-4 bg-gray-400 rounded-lg text-center mx-auto block"
      >
        Home
      </Link>
      <form action={createAction} className="mb-8 flex w-full items-center gap-4">
        <input
          type="text"
          name="title"
          placeholder="ToDoを入力..."
          className="min-w-0 flex-1 rounded-md border border-gray-300 p-2"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="詳細を入力..."
          className="min-w-0 flex-1 rounded-md border border-gray-300 p-2"
          required
        />
        <input type="hidden" name="when" value={resolvedParams.day} />
        <button
          type="submit"
          className="shrink-0 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          追加
        </button>
      </form>
      <TodaysTodo day={resolvedParams.day} />
    </div>
  );
}
