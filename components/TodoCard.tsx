


export default function TodoCard({id,title,description}: {id: string, title: string, description: string}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
    </div>
  )
}
