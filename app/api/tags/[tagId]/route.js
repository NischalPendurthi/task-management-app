import prisma from "@/lib/prisma";

// GET /tags/{tagId}
export const GET_BY_ID = async (req, tagId) => {
  try {
    const tag = await prisma.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      return new Response("Tag not found", { status: 404 });
    }

    return new Response(JSON.stringify(tag), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch tag", { status: 500 });
  }
};

// PUT /tags/{tagId}
export const PUT = async (req, tagId) => {
  try {
    const data = await req.json();
    const updatedTag = await prisma.tag.update({
      where: { id: tagId },
      data,
    });

    return new Response(JSON.stringify(updatedTag), { status: 200 });
  } catch (error) {
    return new Response("Failed to update tag", { status: 500 });
  }
};

// DELETE /tags/{tagId}
export const DELETE = async (req, tagId) => {
  try {
    await prisma.tag.delete({
      where: { id: tagId },
    });

    return new Response("Tag deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete tag", { status: 500 });
  }
};