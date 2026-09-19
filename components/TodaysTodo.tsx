import prisma from "@/lib/prisma";
import TodoCard from "./TodoCard";

export default async function TodaysTodo({ day }: { day: string }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

  const todaysTodos = await prisma.todo.findMany({
    where: {
      targetDate: {
        gte: today,
        lt: tomorrow,
      },
    },
  });
  const tomorrowsTodos = await prisma.todo.findMany({
    where: {
      targetDate: {
        gte: tomorrow, // 明日以上
        lt: dayAfterTomorrow, // 明後日未満 (明日の23:59:59まで)
      },
    },
  });
  if (day === "tomorrow") {
    return (
      <div className="grid grid-cols-1 gap-4">
        {tomorrowsTodos.map((todo) => (
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
