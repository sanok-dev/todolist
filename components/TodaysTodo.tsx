import prisma from "@/lib/prisma";
import TodoCard from "./TodoCard";

export default async function TodaysTodo() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todaysTodos = await prisma.todo.findMany({
    where: {
      targetDate: {
        gte: today,
        lt: tomorrow,
      },
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      {todaysTodos.map((todo) => (
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
