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
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between">
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <form action={`/delete/${id}`}>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          削除
        </button>
      </form>
    </div>
  );
}
