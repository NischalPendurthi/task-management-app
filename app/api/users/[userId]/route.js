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

export const GET = async (request,{ params }) => {
  try {
    // const userId = params.userId; // Access the parameter as params.userId
    // console.log(userId); // Log the userId for debugging
    const user = await prisma.user.findUnique({
      where: { id: params.userId }, // Use userId instead of id
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch user info ${error} `, { status: 500 });
  }
};
