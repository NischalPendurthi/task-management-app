import prisma from "@/lib/prisma";

// GET /projects/{projectId}/tasks
export const GET_TASKS_BY_PROJECT = async (req, projectId) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { projectId: projectId },
    });

    if (!tasks) {
      return new Response("No tasks found for this project", { status: 404 });
    }

    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch tasks", { status: 500 });
  }
};