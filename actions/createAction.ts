"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createAction(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const when = formData.get("when");

  if (typeof title !== "string" || !title.trim()) {
    throw new Error("タイトルは必須です");
  }

  if (typeof description !== "string" || !description.trim()) {
    throw new Error("詳細は必須です");
  }

  if (typeof when !== "string") {
    throw new Error("日付が不正です");
  }

  const targetDate = new Date();
  if (when === "tomorrow") {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  await prisma.todo.create({
    data: {
      title,
      description,
      targetDate,
    },
  });

  revalidatePath("/today");
  revalidatePath("/tomorrow");
  revalidatePath("/allTodo");
}
