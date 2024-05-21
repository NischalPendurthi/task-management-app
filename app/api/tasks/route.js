import prisma from "@/lib/prisma";

export const POST = async (req) => {
  try {
    const data = await req.json();
    const newTask = await prisma.task.create({
      data,
    });

    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (error) {
    return new Response("Failed to create task", { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    const tasks = await prisma.task.findMany();

    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch tasks", { status: 500 });
  }
};