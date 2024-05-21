import prisma from "@/lib/prisma";

export const PUT = async (request, { params }) => {
  try {
    const data = await request.json();
    console.log(data);
    const { username, bio } = data;
    const id = params.userId;
    console.log(params.userId);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username: username, bio: bio },
    });

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    return new Response("Failed to Update user info", { status: 500 });
  }
};

export const GET_BY_ID = async ({ params }) => {
  try {
    const id = params.userId;
    console.log(id);
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch user info `, { status: 500 });
  }
};
