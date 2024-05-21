import prisma from "@/lib/prisma";

// GET /tasks/{taskId}
export const GET_BY_ID = async (req, taskId) => {
  try {
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      return new Response("Task not found", { status: 404 });
    }

    return new Response(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch task", { status: 500 });
  }
};

// PUT /tasks/{taskId}
export const PUT = async (req, taskId) => {
  try {
    const data = await req.json();
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data,
    });

    return new Response(JSON.stringify(updatedTask), { status: 200 });
  } catch (error) {
    return new Response("Failed to update task", { status: 500 });
  }
};

// DELETE /tasks/{taskId}
export const DELETE = async (req, taskId) => {
  try {
    await prisma.task.delete({
      where: { id: taskId },
    });

    return new Response("Task deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete task", { status: 500 });
  }
};