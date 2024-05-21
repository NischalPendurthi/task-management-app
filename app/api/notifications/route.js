import prisma from "@/lib/prisma";

// GET /notifications
export const GET = async (req) => {
  try {
    const notifications = await prisma.notification.findMany();

    return new Response(JSON.stringify(notifications), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch notifications", { status: 500 });
  }
};