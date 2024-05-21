import prisma from "@/lib/prisma";

export const GET = async (req) => {
  try {
    const { email } = await req.json();
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user info", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    const { username, email, bio, role } = data;
    const newUser = await prisma.user.create({
      data: { username, email, bio, role },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    return new Response("Failed to create user", { status: 500 });
  }
};
