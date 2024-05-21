import prisma from "@/lib/prisma";

// POST /projects
export const POST = async (req) => {
  try {
    const data = await req.json();
    const newProject = await prisma.project.create({
      data,
    });

    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response("Failed to create project", { status: 500 });
  }
};

// GET /projects
export const GET = async (req) => {
  try {
    const projects = await prisma.project.findMany();

    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch projects", { status: 500 });
  }
};