"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const when = formData.get("when") as string; // "today" か "tomorrow"

  // ユーザーの選択に合わせて保存する日付（targetDate）を決定する
  const targetDate = new Date();
  if (when === "tomorrow") {
    targetDate.setDate(targetDate.getDate() + 1); // 1日足す
  }

  await prisma.todo.create({
    data: {
      title: title,
      description: description,
      targetDate: targetDate, // 決定した日付をPrismaに渡す
    },
  });

  revalidatePath("/[day]"); // これにより、指定されたパスのキャッシュが再検証されます
}
