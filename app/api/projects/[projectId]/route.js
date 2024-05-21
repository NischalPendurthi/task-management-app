import prisma from "@/lib/prisma";

// GET /projects/{projectId}
export const GET_BY_ID = async (req, projectId) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return new Response("Project not found", { status: 404 });
    }

    return new Response(JSON.stringify(project), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch project", { status: 500 });
  }
};

// PUT /projects/{projectId}
export const PUT = async (req, projectId) => {
  try {
    const data = await req.json();
    const updatedProject = await prisma.project.update({
      where: { id: projectId },
      data,
    });

    return new Response(JSON.stringify(updatedProject), { status: 200 });
  } catch (error) {
    return new Response("Failed to update project", { status: 500 });
  }
};

// DELETE /projects/{projectId}
export const DELETE = async (req, projectId) => {
  try {
    await prisma.project.delete({
      where: { id: projectId },
    });

    return new Response("Project deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete project", { status: 500 });
  }
};