import deleteAction from "@/actions/deleteAction";
export default function TodoCard({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md">
      <div className="min-w-0 flex-1">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <form action={deleteAction} className="shrink-0">
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          削除
        </button>
      </form>
    </div>
  );
}
