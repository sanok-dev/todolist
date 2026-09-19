"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function deleteAction(formData: FormData) {
  const id = formData.get("id");

  if (typeof id !== "string" || !id.trim()) {
    throw new Error("削除対象のIDが不正です");
  }

  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath("/today");
  revalidatePath("/tomorrow");
  revalidatePath("/allTodo");
}
