import prisma from "@/lib/prisma";

// POST /tags
export const POST = async (req) => {
  try {
    const data = await req.json();
    const newTag = await prisma.tag.create({
      data,
    });

    return new Response(JSON.stringify(newTag), { status: 201 });
  } catch (error) {
    return new Response("Failed to create tag", { status: 500 });
  }
};

// GET /tags
export const GET = async (req) => {
  try {
    const tags = await prisma.tag.findMany();

    return new Response(JSON.stringify(tags), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch tags", { status: 500 });
  }
};