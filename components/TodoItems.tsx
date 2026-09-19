import prisma from "@/lib/prisma";
import TodoCard from "./TodoCard";
export default async function TodoItems() {
  const todos = await prisma.todo.findMany();
  return (
    <div className="grid w-full grid-cols-1 gap-4">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          id={todo.id}
          description={todo.description}
        />
      ))}
    </div>
  );
}
