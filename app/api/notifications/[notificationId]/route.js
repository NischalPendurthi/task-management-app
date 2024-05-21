import prisma from "@/lib/prisma";

// GET /notifications/{notificationId}
export const GET_BY_ID = async (req, notificationId) => {
  try {
    const notification = await prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) {
      return new Response("Notification not found", { status: 404 });
    }

    return new Response(JSON.stringify(notification), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch notification", { status: 500 });
  }
};

// DELETE /notifications/{notificationId}
export const DELETE = async (req, notificationId) => {
    try {
      await prisma.notification.delete({
        where: { id: notificationId },
      });
  
      return new Response("Notification deleted", { status: 200 });
    } catch (error) {
      return new Response("Failed to delete notification", { status: 500 });
    }
  };