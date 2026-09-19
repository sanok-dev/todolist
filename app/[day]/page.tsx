import { createAction } from "@/actions/createAction";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ day: string }>;
}) {
  const resolvedParams = await params;
  return (
    <>
      <div className="text-2xl font-bold text-center mb-4">
        {resolvedParams.day} Page
      </div>
      <form action={createAction} className="flex  justify-around gap-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="ToDoを入力..."
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="description"
          placeholder="詳細を入力..."
          className="border border-gray-300 rounded-md p-2 mr-auto"
        />
        <input type="hidden" name="when" value={resolvedParams.day} />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          追加
        </button>
      </form>
    </>
  );
}
